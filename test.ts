import { AlbumCondensedModel, AlbumModel, AlbumType } from "./src/Models/albumModels";
import config from './config.json';
import { ArtistCondensedModel, ArtistModel  } from "./src/Models/artistModels";
import { ArtworkType, ArtworkModel } from "./src/Models/Backend Models/HelperModels";
import { CreditDetailModel, CreditModel, TrackCondensedModel, TrackModel, TrackStatsModel } from "./src/Models/trackModels";

const baseURL = `http://${config.host}:${config.port}`;

// #region GENERICS
const genericCredits: CreditModel = {
  writers: [{ artist: taylorSwift, credit: "Lyricist" }],
  producers: [{ artist: taylorSwift, credit: "Producer" }],
  engineers: [{ artist: taylorSwift, credit: "Engineer" }],
  mixers: [{ artist: taylorSwift, credit: "Mixer" }],
  features: []
}

const taylorSwiftCondensed: ArtistCondensedModel = {
  id: "01",
  name: "Taylor Swift",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/profile.jpg", type: ArtworkType.isDefault}
  ]
}


const jumpThenFall: TrackModel = {
  id: "010301",
  name: "Jump Then Fall",
  description: "Jump Then Fall is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 18, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Jump Then Fall\" while on tour with the Fearless Tour (2009–10), basing the song on a previous relationship she had been in. The song is a country song with pop influences and lyrics describing the joy of falling in love and taking a risk.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/jumpThenFall.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/jumpThenFall.mp3",
  license: "",
  credits: genericCredits
}


const genericStats: TrackStatsModel = {
  playCount: 1000000, 
  likedCount: 500000, 
  playsPerDay: [100, 123, 435, 123], 
  playsPerMonth: [0, 123, 1232, 123,123123,], 
  playsPerYear: [,123, 432,745,123,654,1232,67], 
  awards: [{
    name: "Grammy Award for Best New Artist",
    description: "The Grammy Award for Best New Artist has been awarded since 1959. Years reflect the year in which the Grammy Awards were handed out, for records released in the previous year. The award was not presented in 1967. The official guidelines are as follows: \"For a new artist who releases, during the Eligibility Year, the first recording which establishes the public identity of that artist.\" Note that this is not necessarily the first album released by an artist.",
    year: 2008,
    artwork: [{ url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }],
  }] 
}
// #endregion



