import { ArtworkModel, ColorSchemeModel, MusicLibraryCondensedModel } from "./Backend Models/HelperModels";
import { AlbumCondensedModel } from "./albumModels";
import { ArtistCondensedModel } from "./artistModels";
import { TrackCondensedModel } from "./trackModels";

// USER MODELS
export interface UserModel {
  id: string;
  playbackStateIds: string[];

  name: string;
  description: string;
  
  followers: UserCondensedModel[];
  friends: UserCondensedModel[];

  artwork: ArtworkModel[];
  theme: ThemeModel;
  stats: UserStatsModel;
  musicLibrary: MusicLibraryCondensedModel;
}

export interface UserCondensedModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
}

// THEME MODELS
export interface ThemeModel {
  name: string;
  artwork: ArtworkModel[];
  colorScheme: ColorSchemeModel;
}

// USER STATS MODELS
export interface UserStatsModel {
  totalMinutes: number;
  artistMinutes: ArtistMinutesModel[];
  playsPerAlbum: PlaysPerAlbumModel[];
  playsPerTrack: PlaysPerTrackModel[];
}

export interface ArtistMinutesModel {
  artist: ArtistCondensedModel;
  minutes: number;
}

export interface PlaysPerAlbumModel {
  album: AlbumCondensedModel;
  plays: number;
}

export interface PlaysPerTrackModel {
  track: TrackCondensedModel;
  plays: number;
}