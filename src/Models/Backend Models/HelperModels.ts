import { AlbumCondensedModel, AlbumModel } from "../albumModels";
import { ArtistCondensedModel, ArtistModel } from "../artistModels";
import { MusicVideoCondensedModel, MusicVideoModel } from "../musicVideoModels";
import { PlaylistCondensedModel, PlaylistModel } from "../playlistModels";
import { TrackCondensedModel, TrackModel } from "../trackModels";
import { UserCondensedModel } from "../userModels";
import { AuthUser, Session } from "./APIModels";
import { CategoryItem } from "./DiscoverModels";
import { PlaybackStateModel } from "./playbackStateModels";

// ARTWORK MODEL
export interface ArtworkModel {
  url: string;
  type: ArtworkType;
}

// ARTWORK TYPE
export enum ArtworkType {
  isDefault,
  isAlternate,
  isBanner,
  isThumbnail,
  isBackground,

  isAnimated,
  isAnimatedBanner,
  isAnimatedThumbnail,
  isAnimatedBackground,
}

// COLORSCHEME MODELS
export interface ColorSchemeModel {
  primary: string;
  secondary: string;
  tertiary: string;
}

// MUSIC LIBRARY MODELS
export interface MusicLibraryModel {
  artists: ArtistModel[];
  albums: AlbumModel[];
  tracks: TrackModel[];
  musicVideos: MusicVideoModel[];
  playlists: PlaylistModel[];
} 

export interface MusicLibraryCondensedModel {
  artists: ArtistCondensedModel[];
  albums: AlbumCondensedModel[];
  tracks: TrackCondensedModel[];
  musicVideos: MusicVideoCondensedModel[];
  playlists: PlaylistCondensedModel[];
}

// DATASTORE MODELS
export interface DataStore {
  searchable: SearchableDataStore
  users: AuthUser[]
  playbackStates: PlaybackStateModel[]
  sessions: Session[]
  musicLibrary: MusicLibraryModel
  categories: CategoryItem[]

}

export interface SearchableDataStore {
  users: UserCondensedModel[]
  musicLibrary: MusicLibraryCondensedModel
}