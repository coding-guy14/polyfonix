import { PlaybackStateModel } from "../Models/Backend Models/playbackStateModels";
import { AuthUser, HTTPErrorModel, HTTPSuccessModel, Session } from "../Models/Backend Models/APIModels";
import { getData, setData } from "../datastore";
import { generateId } from "./authentication";

/**
 * Retrieves the playback states for a given token.
 * 
 * @param token - The authentication token.
 * @returns An array of playback states or an HTTP error model.
 */
export function getPlaybackStates(token: string): PlaybackStateModel[] | HTTPErrorModel {
  const data = getData();

  // Check if token is valid
  if (!token.startsWith("Bearer ")) {
    return { code: 400, message: "Invalid token", userPrompt: "Invalid token" };
  }
  token = token.substring("Bearer ".length);

  // Find session and user
  const session = data.sessions.find((session: Session) => session.token === token);
  if (!session) {
    return { code: 400, message: "Session not found", userPrompt: "Session not found" };
  }
  const user = data.users.find((user: AuthUser) => user.id === session.userId);
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Find playback states
  const playbackStateIds = user.userDetails.playbackStateIds;
  const playbackStates: PlaybackStateModel[] = playbackStateIds.map((playbackStateId) =>
    data.playbackStates.find((playbackState: PlaybackStateModel) => playbackState.id === playbackStateId)
  );

  // Check if playback states found
  if (playbackStates.length === 0) {
    return { code: 400, message: "No playback states found", userPrompt: "No playback states found" };
  }

  return playbackStates;
}

/**
 * Retrieves the playback state by ID.
 * @param token - The authentication token.
 * @param id - The ID of the playback state.
 * @returns The playback state model if found, otherwise an HTTP error model.
 */
export function getPlaybackStateById(token: string, id: string): PlaybackStateModel | HTTPErrorModel {
  const data = getData();

  // Check if token is valid
  if (!token.startsWith("Bearer ")) {
    return { code: 400, message: "Invalid token", userPrompt: "Invalid token" };
  }
  token = token.substring("Bearer ".length);

  // Find session and user
  const session = data.sessions.find((session: Session) => session.token === token);
  if (!session) {
    return { code: 400, message: "Session not found", userPrompt: "Session not found" };
  }
  const user = data.users.find((user: AuthUser) => user.id === session.userId);
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Find playback state
  const playbackState = data.playbackStates.find((playbackState: PlaybackStateModel) => playbackState.id === id);
  if (!playbackState) {
    return { code: 400, message: "Playback state not found", userPrompt: "Playback state not found" };
  }
  return playbackState;
}

/**
 * Updates a playback state.
 * 
 * @param token - The authentication token.
 * @param id - The id of the playback state to be updated.
 * @param playbackState - The updated playback state.
 * @returns An object representing the result of the operation.
 *          If successful, it contains a code of 200, a message of "Playback state updated", and the token.
 *          If unsuccessful, it contains a code indicating the error, a corresponding error message, and a user prompt.
 */
export function udpatePlaybackState(token: string, id: string,  playbackState: PlaybackStateModel): HTTPSuccessModel | HTTPErrorModel {
  const data = getData();

  // Check if token is valid
  if (!token.startsWith("Bearer ")) {
    return { code: 400, message: "Invalid token", userPrompt: "Invalid token" };
  }
  token = token.substring("Bearer ".length);

  // Find session and user
  const session = data.sessions.find((session: Session) => session.token === token);
  if (!session) {
    return { code: 400, message: "Session not found", userPrompt: "Session not found" };
  }
  const user = data.users.find((user: AuthUser) => user.id === session.userId);
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Find playback state
  const playbackStateIndex = data.playbackStates.findIndex((playbackState: PlaybackStateModel) => playbackState.id === id);
  if (playbackStateIndex === -1) {
    return { code: 400, message: "Playback state not found", userPrompt: "Playback state not found" };
  }
  data.playbackStates[playbackStateIndex] = playbackState;
  setData(data);

  return { code: 200, message: "Playback state updated", token: token };
}

/**
 * Adds a playback state to the data store.
 * 
 * @param token - The authentication token.
 * @param playbackState - The playback state to be added.
 * @returns An object representing the result of the operation.
 *          If successful, it contains a code of 200, a message of "Playback state added", and the token.
 *          If unsuccessful, it contains a code indicating the error, a corresponding error message, and a user prompt.
 */
export function createPlaybackState(token: string, playbackState: PlaybackStateModel): HTTPSuccessModel | HTTPErrorModel {
  const data = getData();

  // Check if token is valid
  if (!token.startsWith("Bearer ")) {
    return { code: 400, message: "Invalid token", userPrompt: "Invalid token" };
  }
  token = token.substring("Bearer ".length);

  // Find session and user
  const session = data.sessions.find((session: Session) => session.token === token);
  if (!session) {
    return { code: 400, message: "Session not found", userPrompt: "Session not found" };
  }
  const user = data.users.find((user: AuthUser) => user.id === session.userId);
  if (!user) {
    return { code: 400, message: "User not found", userPrompt: "User not found" };
  }

  // Add playback state
  playbackState.id = generateId(data);
  data.playbackStates.push(playbackState);
  user.userDetails.playbackStateIds.push(playbackState.id);
  setData(data);

  return { code: 200, message: "Playback state added", token: token };
}