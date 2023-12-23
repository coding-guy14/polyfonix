import { AuthUser, HTTPErrorModel, HTTPSuccessModel, Session } from "../Models/Backend Models/APIModels";
import { AlbumCondensedModel } from "../Models/albumModels";
import { ArtistCondensedModel } from "../Models/artistModels";
import { PlaylistCondensedModel, PlaylistModel } from "../Models/playlistModels";
import { ThemeModel, UserModel, UserStatsModel } from "../Models/userModels";
import { getData, setData } from "../datastore";

// #region USER DETAILS 
/**
 * Retrieves the user details based on the provided token.
 * 
 * @param token - The token used for authentication.
 * @returns The user details if the token is valid and the user exists, otherwise an HTTP error model.
 */
export function getUserDetails(token: string): UserModel | HTTPErrorModel {
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

  return user.userDetails;
}

/**
 * Updates the user details for a given token.
 * @param token - The authentication token.
 * @param updatedUserDetails - The updated user details.
 * @returns An object containing the HTTP response code, message, and user prompt.
 */
export function updateUserDetails(token: string, updatedUserDetails: UserModel): HTTPSuccessModel | HTTPErrorModel {
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
  user.userDetails = updatedUserDetails;
  setData(data);
  return { code: 200, message: "User details updated", token: "-1" };
}

/**
 * Updates the theme of a user.
 * @param token - The user's authentication token.
 * @param theme - The new theme to be applied.
 * @returns An object representing the result of the update operation.
 *          If the update is successful, it returns an HTTPSuccessModel object.
 *          If there is an error, it returns an HTTPErrorModel object.
 */
export function updateUserTheme(token: string, theme: ThemeModel): HTTPSuccessModel | HTTPErrorModel {
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

  user.userDetails.theme = theme;
  setData(data);
  return { code: 200, message: "User theme updated", token: "-1" };
}

// #endregion

// #region USER MUSIC LIBRARY
/**
 * Updates the artists for a user.
 * 
 * @param token - The user's authentication token.
 * @param artists - An array of condensed artist models to update the user's music library with.
 * @returns An HTTPSuccessModel if the update is successful, or an HTTPErrorModel if there is an error.
 */
export function updateUserArtists(token: string, artists: ArtistCondensedModel[]): HTTPSuccessModel | HTTPErrorModel {
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
  user.userDetails.musicLibrary.artists = artists;
  setData(data);
  return { code: 200, message: "User artists updated", token: "-1" };
}

/**
 * Updates the albums of a user.
 * 
 * @param token - The user's authentication token.
 * @param albums - An array of condensed album models to update the user's albums.
 * @returns An HTTPSuccessModel if the albums are successfully updated, or an HTTPErrorModel if there is an error.
 */
export function updateUserAlbums(token: string, albums: AlbumCondensedModel[]): HTTPSuccessModel | HTTPErrorModel {
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
  user.userDetails.musicLibrary.albums = albums;
  setData(data);
  return { code: 200, message: "User artists updated", token: "-1" };
}

/**
 * Updates the playlists of a user.
 * 
 * @param token - The user's authentication token.
 * @param playlists - An array of playlist objects to update the user's playlists.
 * @returns An HTTPSuccessModel if the update is successful, or an HTTPErrorModel if there is an error.
 */
export function updateUserPlaylists(token: string, playlists: PlaylistCondensedModel[]): HTTPSuccessModel | HTTPErrorModel {
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
  user.userDetails.musicLibrary.playlists = playlists;

  setData(data);
  return { code: 200, message: "User artists updated", token: "-1" };
}


export function updateUserStats(token: string, stats: UserStatsModel): HTTPSuccessModel | HTTPErrorModel {
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

  user.userDetails.stats = stats;
  setData(data);
  return { code: 200, message: "User stats updated", token: "-1" };
}
/**
 * Updates a playlist in the user's music library.
 * 
 * @param token - The authentication token.
 * @param id - The ID of the playlist to update.
 * @param playlist - The updated playlist model.
 * @returns An HTTP success model if the playlist is successfully updated, or an HTTP error model if there is an error.
 */
export function updatePlaylist(token: string, id: string, playlist: PlaylistModel): HTTPSuccessModel | HTTPErrorModel {
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

  let currentPlaylistIndex = data.musicLibrary.playlists.findIndex(playlist => playlist.id === id);
  if (! data.musicLibrary.playlists[currentPlaylistIndex]) {
    return { code: 400, message: "Playlist not found", userPrompt: "Playlist not found" };
  }

  if (user.id !== playlist.owner.id) {
    return { code: 400, message: "Unauthorized", userPrompt: "User does not own playlist." };
  }

  // UPDATE DETAIL MODEL
  data.musicLibrary.playlists[currentPlaylistIndex] = playlist;

  // UPDATE CONDENSED MODEL
  let condensedModel: PlaylistCondensedModel = { id: playlist.id, name: playlist.name, description: playlist.description ,artwork: playlist.artwork, ownerId: playlist.owner.id, ownerName: playlist.owner.name };

  let userPlaylistIndex = user.userDetails.musicLibrary.playlists.findIndex(playlist => playlist.id === id);
  user.userDetails.musicLibrary.playlists[userPlaylistIndex] = condensedModel;

  // UPDATE SEARCHABLE MODEL
  let searchablePlaylistIndex = data.searchable.musicLibrary.playlists.findIndex(playlist => playlist.id === id);
  data.searchable.musicLibrary.playlists[searchablePlaylistIndex] = condensedModel;
  
  setData(data);
  return { code: 200, message: "Playlist updated", token: "-1" };
}

// #endregion

// #region USER STATS
// #endregion