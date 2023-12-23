import { ArtworkModel } from "./Backend Models/HelperModels";
import { ArtistCondensedModel } from "./artistModels";
import { MusicVideoCondensedModel } from "./musicVideoModels";
import { TrackCondensedModel } from "./trackModels";
import { UserCondensedModel } from "./userModels";

// PLAYLIST MODELS

// TODO - Add public / private flag
export interface PlaylistModel {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];

  owner: UserCondensedModel;
  tracks: TrackCondensedModel[];
  musicVideos: MusicVideoCondensedModel[];
  artists: ArtistCondensedModel[];
  // TODO - ADD LAST UPDATED
  // TODO - ADD CREATED DATE
  // TODO - ADD Runtime
}

export interface PlaylistCondensedModel {
  id: string;
  name: string;
  description: string;
  artwork: ArtworkModel[];

  ownerName: string;
  ownerId: string;
}