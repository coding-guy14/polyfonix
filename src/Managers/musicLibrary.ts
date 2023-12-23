import { HTTPErrorModel, HTTPSuccessModel } from "../Models/Backend Models/APIModels";
import { CategoryItem, SearchResponseModel } from "../Models/Backend Models/DiscoverModels";
import { SearchableDataStore } from "../Models/Backend Models/HelperModels";
import { AlbumCondensedModel, AlbumModel } from "../Models/albumModels";
import { ArtistCondensedModel, ArtistModel } from "../Models/artistModels";
import { MusicVideoCondensedModel, MusicVideoModel } from "../Models/musicVideoModels";
import { PlaylistModel } from "../Models/playlistModels";
import { TrackCondensedModel, TrackModel } from "../Models/trackModels";
import { getData, setData } from "../datastore";

// TODO: ERROR HANDLING

// #region ARTIST ENDPOINTS
/**
 * Retrieves an array of condensed artist models from the music library.
 * @param name - Optional. The name of the artist to filter by.
 * @returns An array of ArtistCondensedModel objects.
 */
export function getArtists(name?: string): ArtistCondensedModel[] {
  const artists = getData().searchable.musicLibrary.artists;
  if (name) {
    return artists.filter(artist => artist.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return artists;
  }
}

/**
 * Retrieves an artist from the music library by their ID.
 * @param id The ID of the artist.
 * @returns The artist model matching the given ID, or undefined if not found.
 */
export function getArtistById(id: string): ArtistModel | HTTPErrorModel {
  return getData().musicLibrary.artists.find(artist => artist.id === id);
}
// #endregion

// #region ALBUM ENDPOINTS
/**
 * Retrieves the albums from the music library.
 * @param name - Optional parameter to filter albums by name.
 * @returns An array of AlbumCondensedModel objects.
 */
export function getAlbums(name?: string): AlbumCondensedModel[] {
  const albums = getData().searchable.musicLibrary.albums;
  if (name) {
    return albums.filter(album => album.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return albums;
  }
}

/**
 * Retrieves an album from the music library based on its ID.
 * @param id The ID of the album to retrieve.
 * @returns The album with the specified ID, or undefined if not found.
 */
export function getAlbumById(id: string): AlbumModel {
  return getData().musicLibrary.albums.find(album => album.id === id);
}
// #endregion

// #region TRACK ENDPOINTS
/**
 * Retrieves an array of condensed track models from the music library.
 * @param name - Optional parameter to filter tracks by name.
 * @returns An array of TrackCondensedModel objects.
 */
export function getTracks(name?: string): TrackCondensedModel[] {
  const tracks = getData().searchable.musicLibrary.tracks;
  if (name) {
    return tracks.filter(track => track.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return tracks;
  }
}

/**
 * Retrieves a track from the music library based on its ID.
 * @param id The ID of the track to retrieve.
 * @returns The track with the specified ID, or undefined if not found.
 */
export function getTrackById(id: string): TrackModel {
  return getData().musicLibrary.tracks.find(track => track.id === id);
}
// #endregion

// #region MUSIC VIDEO ENDPOINTS
/**
 * Retrieves an array of music videos from the music library.
 * @param name - Optional. The name to filter the music videos by.
 * @returns An array of TrackCondensedModel objects representing the music videos.
 */
export function getMusicVideos(name?: string): MusicVideoCondensedModel[] {
  const musicVideos = getData().searchable.musicLibrary.musicVideos;
  if (name) {
    return musicVideos.filter(musicVideo => musicVideo.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return musicVideos;
  }
}

/**
 * Retrieves a music video from the music library by its ID.
 * @param id The ID of the music video.
 * @returns The TrackModel representing the music video, or undefined if not found.
 */
export function getMusicVideoById(id: string): MusicVideoModel {
  return getData().musicLibrary.musicVideos.find(musicVideo => musicVideo.id === id);
}
// #endregion

// #region PLAYLIST ENDPOINTS
/**
 * Retrieves the playlists from the music library.
 * 
 * @param name - Optional. The name of the playlist to filter by.
 * @returns An array of playlists. If `name` is provided, only the playlists that match the name will be returned.
 */
export function getPlaylists(name?: string): any {
  const playlists = getData().searchable.musicLibrary.playlists;
  if (name) {
    return playlists.filter(playlist => playlist.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    return playlists;
  }
}

/**
 * Retrieves a playlist from the music library by its ID.
 * @param id - The ID of the playlist to retrieve.
 * @returns The playlist object matching the given ID, or undefined if not found.
 */
export function getPlaylistById(id: string): any {
  return getData().musicLibrary.playlists.find(playlist => playlist.id === id);
}
// #endregion

// #region SEARCH ENDPOINTS
/**
 * Searches the music library for the given text and returns the search results.
 * @param text The text to search for.
 * @returns The search results containing artists, albums, tracks, music videos, playlists, and users.
 */
export function search(text?: string): SearchResponseModel {
  const data = getData();
  
  let searchResults: SearchableDataStore = {
    users: [],
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: []
    }
  }

  if (!text) {
    return {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
      users: []
    };
  }

  // #region Search by Artist
  const artistsByName = data.searchable.musicLibrary.artists.filter(artist => artist.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.artists.push(...artistsByName);

  const albumsByArtist = data.searchable.musicLibrary.albums.filter(album => album.artistName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.albums.push(...albumsByArtist);

  const tracksByArtist = data.searchable.musicLibrary.tracks.filter(track => track.artistName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.tracks.push(...tracksByArtist);

  const musicVideosByArtist = data.searchable.musicLibrary.musicVideos.filter(musicVideo => musicVideo.artistName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.musicVideos.push(...musicVideosByArtist);
  // #endregion

  // #region Search by Album
  const albumsByName = data.searchable.musicLibrary.albums.filter(album => album.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.albums.push(...albumsByName);

  const tracksByAlbum = data.searchable.musicLibrary.tracks.filter(track => track.albumName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.tracks.push(...tracksByAlbum);

  const musicVideosByAlbum = data.searchable.musicLibrary.musicVideos.filter(musicVideo => musicVideo.albumName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.musicVideos.push(...musicVideosByAlbum);

  const artistsByAlbum = data.searchable.musicLibrary.artists.filter(artist => {
    const albumsByArtist = data.searchable.musicLibrary.albums.filter(album => album.artistName.toLowerCase() === artist.name.toLowerCase());
    return albumsByArtist.some(album => album.name.toLowerCase().includes(text.toLowerCase()));
  });
  searchResults.musicLibrary.artists.push(...artistsByAlbum);

  // #endregion

  // #region Search by Track / Music Video
  const tracksByName = data.searchable.musicLibrary.tracks.filter(track => track.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.tracks.push(...tracksByName);

  const musicVideosByName = data.searchable.musicLibrary.musicVideos.filter(musicVideo => musicVideo.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.musicVideos.push(...musicVideosByName);

  const artistsByTrack = data.searchable.musicLibrary.artists.filter(artist => {
    const tracksByArtist = data.searchable.musicLibrary.tracks.filter(track => track.artistName.toLowerCase() === artist.name.toLowerCase());
    return tracksByArtist.some(track => track.name.toLowerCase().includes(text.toLowerCase()));
  });

  const artistsByMusicVideo = data.searchable.musicLibrary.artists.filter(artist => {
    const musicVideosByArtist = data.searchable.musicLibrary.musicVideos.filter(musicVideo => musicVideo.artistName.toLowerCase() === artist.name.toLowerCase());
    return musicVideosByArtist.some(musicVideo => musicVideo.name.toLowerCase().includes(text.toLowerCase()));
  });

  searchResults.musicLibrary.artists.push(...artistsByTrack, ...artistsByMusicVideo);

  const albumsByTrack = data.searchable.musicLibrary.albums.filter(album => {
    const tracksByAlbum = data.searchable.musicLibrary.tracks.filter(track => track.albumName.toLowerCase() === album.name.toLowerCase());
    return tracksByAlbum.some(track => track.name.toLowerCase().includes(text.toLowerCase()));
  });

  const albumsByMusicVideo = data.searchable.musicLibrary.albums.filter(album => {
    const musicVideosByAlbum = data.searchable.musicLibrary.musicVideos.filter(musicVideo => musicVideo.albumName.toLowerCase() === album.name.toLowerCase());
    return musicVideosByAlbum.some(musicVideo => musicVideo.name.toLowerCase().includes(text.toLowerCase()));
  });

  searchResults.musicLibrary.albums.push(...albumsByTrack, ...albumsByMusicVideo);
  // #endregion

  // #region Search by Playlist
  const playlistsByName = data.searchable.musicLibrary.playlists.filter(playlist => playlist.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.playlists.push(...playlistsByName);

  // #endregion

  // #region Search by User
  const usersByName = data.searchable.users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
  searchResults.users.push(...usersByName);

  const playlistsByUser = data.searchable.musicLibrary.playlists.filter(playlist => playlist.ownerName.toLowerCase().includes(text.toLowerCase()));
  searchResults.musicLibrary.playlists.push(...playlistsByUser);

  return {
    artists: removeDuplicatesBy(searchResults.musicLibrary.artists, 'id'),
    albums: removeDuplicatesBy(searchResults.musicLibrary.albums, 'id'),
    tracks: removeDuplicatesBy(searchResults.musicLibrary.tracks, 'id'),
    musicVideos: removeDuplicatesBy(searchResults.musicLibrary.musicVideos, 'id'),
    playlists: removeDuplicatesBy(searchResults.musicLibrary.playlists, 'id'),
    users: removeDuplicatesBy(searchResults.users, 'id')
  }
}

/**
 * Retrieves the categories from the music library.
 * @returns An array of CategoryItem objects if successful, or an HTTPErrorModel object if there was an error.
 */
export function getCategories(): CategoryItem[] | HTTPErrorModel {
  return getData().categories;
}

/** HELPER FUNCTION
 * Removes duplicates from an array of objects based on a specified key.
 * @template T - The type of the objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} key - The key to compare for duplicates.
 * @returns {T[]} - The array with duplicates removed.
 */
export function removeDuplicatesBy<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set();
  return arr.filter(item => {
      const k = item[key];
      return seen.has(k) ? false : seen.add(k);
  });
}
// #endregion


// #region PLAYBACK ENDPOINTS -> MOVE TO SEPERATE FILE
// #endregion


// #endregion