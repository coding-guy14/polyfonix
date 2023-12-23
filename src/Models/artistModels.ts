import { ArtworkModel } from "./Backend Models/HelperModels";
import { AlbumCondensedModel } from "./albumModels";
import { MusicVideoCondensedModel, MusicVideoModel } from "./musicVideoModels";
import { PlaylistCondensedModel } from "./playlistModels";
import { TrackCondensedModel } from "./trackModels";

// ARTISTS MODELS
export interface ArtistModel {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];

  genre: string[];
  born: Date;
  hometown: string;
  stats: ArtistStatsModel;
  tours: TourModel[];

  // Music Library
  albums: AlbumCondensedModel[];
  tracks: TrackCondensedModel[];
  features: TrackCondensedModel[];
  musicVideos: MusicVideoCondensedModel[];
  playlists: PlaylistCondensedModel[];
}

export interface ArtistCondensedModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
}

// ARTIST STATS MODELS
export interface ArtistStatsModel {
  rank: number[];
  playsPerDay: number[];
  playsPerMonth: number[];
  playsPerYear: number[];

  topAlbums: AlbumCondensedModel[];
  topTracks: TrackCondensedModel[];

  awards: AwardModel[];
}

export interface AwardModel {
  name: string;
  description: string;
  year: number;
  artwork: ArtworkModel[];
}

// TOUR MODELS
export interface TourModel {
  name: string;
  description: string;
  artwork: ArtworkModel[];

  playlists: PlaylistCondensedModel[];
  film: Film[];
  dates: TourDateModel[];
}

export interface TourDateModel  {
  country: string;
  city: string;
  venue: string;
  date: Date;
}

export interface Film {
  name: string;
  description: string;
  artwork: ArtworkModel[];
  runtime: number;
  releaseDate: Date;
  path: string;
}