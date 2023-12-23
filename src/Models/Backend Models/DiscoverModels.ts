import { AlbumCondensedModel } from "../albumModels";
import { ArtistCondensedModel } from "../artistModels";
import { MusicVideoCondensedModel } from "../musicVideoModels";
import { PlaylistCondensedModel } from "../playlistModels";
import { TrackCondensedModel } from "../trackModels";
import { UserCondensedModel } from "../userModels";
import { ArtworkModel } from "./HelperModels";

// DISCOVER MODELS
export interface DiscoverableObject {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];
  
  artistOrOwnerId: string;
  artistOrOwnerName: string;

  enclosingId: string;  // Playlist or Album id
  enclosingName: string; // Playlist or Album name
  type: DiscoverableType;
}

export enum DiscoverableType {
  Artist = 'Artist',
  Album = 'Album',
  Track = 'Track',
  MusicVideo = 'MusicVideo',
  Playlist = 'Playlist',
  User = 'User'
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];
  sections: CategorySection[];
}

export interface CategorySection {
  name: string;
  description: string;
  artwork: ArtworkModel[];
  items: DiscoverableObject[];
}

// SEARCH RESPONSE MODELS
export interface SearchResponseModel {
  artists: ArtistCondensedModel[];
  albums: AlbumCondensedModel[];
  tracks: TrackCondensedModel[];
  musicVideos: MusicVideoCondensedModel[];
  playlists: PlaylistCondensedModel[];
  users: UserCondensedModel[];
}