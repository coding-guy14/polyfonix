import { ArtworkModel } from "./Backend Models/HelperModels";
import { AlbumCondensedModel } from "./albumModels";
import { ArtistCondensedModel, AwardModel } from "./artistModels";

// TRACK MODELS
export interface TrackModel {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];
  
  artist: ArtistCondensedModel[];
  album: AlbumCondensedModel;
  genre: string[];
  duration: number;
  stats: TrackStatsModel;
  
  tags: string[];
  lyrics: string;
  path: string;
  license: string;

  credits: CreditModel;
}

export interface TrackCondensedModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
  tags: string[];
  duration: number;

  artistName: string;
  artistId: string;
  
  albumName: string;
  albumId: string;
}

// TRACK STATS MODELS
export interface TrackStatsModel {
  playCount: number;
  likedCount: number;

  playsPerDay: number[];
  playsPerMonth: number[];
  playsPerYear: number[];

  awards: AwardModel[];
}

// CREDITS MODELS
export interface CreditModel {
  writers: CreditDetailModel[];
  producers: CreditDetailModel[];
  engineers: CreditDetailModel[];
  mixers: CreditDetailModel[];
  features: CreditDetailModel[];
}

export interface CreditDetailModel {
  artist: ArtistCondensedModel;
  credit: string;
}