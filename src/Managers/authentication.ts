import { AuthUser, HTTPErrorModel, HTTPSuccessModel, LoginUserConstructor, NewUserConstructor, Session } from "../Models/Backend Models/APIModels";
import { DataStore } from "../Models/Backend Models/HelperModels";
import { getData, setData } from "../datastore";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto'
import validator from "validator";

/**
 * Registers a new user.
 * 
 * @param newUser - The information of the new user.
 * @returns An HTTPSuccessModel if the user is successfully registered, or an HTTPErrorModel if there is an error.
 */
export function userRegister(newUser: NewUserConstructor): HTTPSuccessModel | HTTPErrorModel {
  let data = getData();

  // Check if user already exists
  if (data.users.some((user: AuthUser) => user.email.toLowerCase() === newUser.email.toLowerCase())) {
    return { code: 400, message: "User already exists", userPrompt: "User already exists" };
  }

  // Check if email is valid
  if (!validateEmail(newUser.email)) {
    return { code: 400, message: "Invalid email", userPrompt: "Invalid email" };
  }

  // Check if password is valid
  if (newUser.password.length < 8) {
    return { code: 400, message: "Invalid", userPrompt: "Password must be at least 8 characters" };
  }

  if (validatePassword(newUser.password)) {
    return { code: 400, message: "Invalid password", userPrompt: "Password must contain characters and numbers" };
  }

  // Create new user
  const newUserId =  generateId(data);
  const newToken = generateToken(data);
  const hashedPassword = hashPassword(newUser.password);

  // TODO: CREATE NEW PLAYBACK STATE

  data.users.push({
    id: newUserId,
    userDetails: {
      id: newUserId,
      playbackStateIds: [],
      name: newUser.name,
      description:"",
      followers: [],
      friends: [],
      artwork: [],
      theme: {
        name: "Default",
        artwork: [],
        colorScheme: {
            primary: "#800080", // purple
            secondary: "#000000", // black
            tertiary: "#FFFFFF", // white
        }
      },
      stats: {
        totalMinutes: 0,
        artistMinutes: [],
        playsPerAlbum: [],
        playsPerTrack: []
      },
      musicLibrary: {
        artists: [],
        albums: [],
        tracks: [],
        musicVideos: [],
        playlists: []
      }
    },
    email: newUser.email,
    password: hashedPassword,
    oldPasswords: [],
    numSuccessfulLogins: 1,
    numFailedLoginsSinceLastLogin: 0,
    currentlyLoggedIn: true
  });

  data.searchable.users.push({
    id: newUserId,
    name: newUser.name,
    artwork:[]
  });

  data.sessions.push({
    token: newToken,
    userId: newUserId,
    previousTokens: []
  });

  setData(data);

  return { code: 200, message: "User created", token: newToken };
}

/**
 * Authenticates a user login.
 * @param loginUser - The login user object containing email and password.
 * @returns An HTTPSuccessModel if the login is successful, or an HTTPErrorModel if there is an error.
 */
export function userLogin(loginUser: LoginUserConstructor): HTTPSuccessModel | HTTPErrorModel {
  let data = getData();

  // Check if user exists
  const user = data.users.find((user: AuthUser) => user.email.toLowerCase() === loginUser.email.toLowerCase());
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Check if password is correct
  if (user.password !== hashPassword(loginUser.password)) {
    console.log("LOGIN: PASSWORD -> " + hashPassword(loginUser.password))
    user.numFailedLoginsSinceLastLogin++;
    setData(data);
    return { code: 400, message: "Incorrect password", userPrompt: "Incorrect password" };
  }

  // Create new token
  const newToken = generateToken(data);

  // Update user
  user.numSuccessfulLogins++;
  user.currentlyLoggedIn = true;
  user.numFailedLoginsSinceLastLogin = 0;

  // Update session
  data.sessions.push({
    token: newToken,
    userId: user.id,
    previousTokens: []
  });

  setData(data);

  return { code: 200, message: "User logged in", token: newToken };

}

/**
 * Logs out a user by removing their session and updating their logged-in status.
 * @param token - The token associated with the user's session.
 * @returns An object containing the HTTP response code, message, and optional token.
 */
export function userLogout(token: string): HTTPSuccessModel | HTTPErrorModel {
  let data = getData();

  // Check if token is valid
  if (!(token.startsWith("Bearer "))) {
    return { code: 400, message: "Invalid token", userPrompt: "Invalid token" };
  }
  token = token.substring("Bearer ".length);

  // Check if session exists
  const session = data.sessions.find((session: Session) => session.token === token);
  if (!session) {
    return { code: 400, message: "Session not found", userPrompt: "Session not found" };
  }


  // Check if user exists
  const user = data.users.find((user: AuthUser) => user.id === session.userId);
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Remove session
  data.sessions.splice(data.sessions.indexOf(session), 1);
  user.currentlyLoggedIn = false;

  setData(data);

  return { code: 200, message: "User logged out", token: "-1" };
}

// #region HELPERS
/**
 * Validates an email address.
 * @param email - The email address to validate.
 * @returns True if the email is valid, false otherwise.
 */
function validateEmail(email: string): boolean {
  return validator.isEmail(email);
}

/**
 * Validates the strength of a password.
 * @param password - The password to be validated.
 * @returns True if the password is strong, false otherwise.
 */
function validatePassword(password: string): boolean {
  return validator.isStrongPassword(password);
}

/**
 * Generates a unique user ID that is not present in the given array of users.
 * @param users - An array of AuthUser objects representing existing users.
 * @returns A string representing the generated user ID.
 */
export function generateId(data: DataStore): string {
  let newUserId: number;
  const existingIds = new Set(data.users.map(user => user.id)); 

  do {
    newUserId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (existingIds.has(String(newUserId)));

  return String(newUserId);
}

/**
 * Generates a unique token that is not present in the given array of tokens.
 * @param tokens - An array of TokenModel objects representing existing tokens.
 * @returns A string representing the generated token.
 */
export function generateToken(data: DataStore): string {
  let token;
  const existingTokens = new Set(data.sessions.map((session: Session) => session.token)); 
  do {
    token = uuidv4();
  } while (existingTokens.has(token));

  return token;
}

/**
 * Hashes a password using bcrypt.
 * @param password - The password to be hashed.
 * @returns A string representing the hashed password.
 */
export function hashPassword(password: string): string {
  const hash = crypto.createHash('sha256')

  return hash.update(password).digest('hex')
}
// #endregion