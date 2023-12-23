import { ArtworkModel } from './Backend Models/HelperModels';
import { ArtistCondensedModel } from './artistModels';
import { MusicVideoCondensedModel } from './musicVideoModels';
import { TrackCondensedModel } from './trackModels';

// ALBUM MODELS
export interface AlbumModel {
  id: string;
  name: string;
  artist: ArtistCondensedModel[];
  description: string;
  genre: string[];
  year: number;
  releaseDate: Date;
  runtime: number;


  artwork: ArtworkModel[];

  // Flags
  isExplicit: Boolean;
  type: AlbumType;

  tracks: TrackCondensedModel[];
  musicVideos: MusicVideoCondensedModel[];
  otherVersions: AlbumCondensedModel[];

  path: string;
  license: string
}

export interface AlbumCondensedModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
  
  artistName: string;
  artistId: string;

  type: AlbumType;
  description: string;
  year: number;
}

// ALBUM TYPES
export enum AlbumType {
  Album, 
  Single,
  EP,
  Mixtape,
  Compilation,
  Soundtrack,
  Live,
  Remix,
  Other,
}