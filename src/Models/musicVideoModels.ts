import { ArtworkModel } from "./Backend Models/HelperModels";
import { AlbumCondensedModel } from "./albumModels";
import { ArtistCondensedModel } from "./artistModels";
import { CreditModel, TrackStatsModel } from "./trackModels";

// MUSIC VIDEO MODELS
export interface MusicVideoModel {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];
  
  artist: ArtistCondensedModel[];
  album: AlbumCondensedModel;
  genre: string[];
  lyrics: string;
  duration: number;
  stats: TrackStatsModel;

  relatedTrackId: string;
  isLyricVideo: Boolean;

  tags: string[];
  path: string;
  license: string;

  credits: CreditModel;
}

export interface MusicVideoCondensedModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
  tags: string[];
  duration: number;

  relatedTrackId: string;
  isLyricVideo: Boolean;

  artistName: string;
  artistId: string;
  
  albumName: string;
  albumId: string;
}