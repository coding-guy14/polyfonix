import { TrackCondensedModel } from "../trackModels";
import { ArtworkModel } from "./HelperModels";

// PLAYBACK STATE MODELS
export interface PlaybackStateModel {
  id: string;
  userId: string;

  playbackQueue: TrackCondensedModel[];
  upNextQueue: TrackCondensedModel[];
  playbackHistory: TrackCondensedModel[];
  currentTrack?: TrackCondensedModel;
  currentTimeStamp: number;

  playbackSource: PlaybackSourceModel;
  isPlaying: Boolean;
  playbackMode: PlaybackModeModel;
  repeatMode: RepeatModeModel;
  speed: number;

  lastUpdated: Date;
}

export interface PlaybackSourceModel {
  id: string;
  name: string;
  artwork: ArtworkModel[];
  type: PlaybackSourceType;
}

// PLAYBACK SOURCE TYPES
export enum PlaybackSourceType {
  album,
  playlist,
  search,
  other
}

export enum PlaybackModeModel {
  sequential,
  shuffle,
}

export enum RepeatModeModel {
  none,
  queue,
  track,
}