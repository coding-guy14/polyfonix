import { AlbumCondensedModel, AlbumModel, AlbumType } from "../Models/albumModels";
import config from '../../config.json';
import { ArtistCondensedModel, ArtistModel, TourModel  } from "../Models/artistModels";
import { ArtworkType, ArtworkModel, DataStore } from "../Models/Backend Models/HelperModels";
import { CreditDetailModel, CreditModel, TrackCondensedModel, TrackModel, TrackStatsModel } from "../Models/trackModels";
import { UserCondensedModel, UserStatsModel } from "../Models/userModels";
import { AuthUser } from "../Models/Backend Models/APIModels";
import { MusicVideoCondensedModel, MusicVideoModel } from "../Models/musicVideoModels";
import { PlaylistCondensedModel, PlaylistModel } from "../Models/playlistModels";
import { CategoryItem } from "../Models/Backend Models/DiscoverModels";
import { hashPassword } from "../Managers/authentication";

const baseURL = `http://${config.host}:${config.port}`;

// TODO: ADD SONGS IN FOLDER - ONLY ARTWORK AVAILABLE - 08/12/2023


// #region SAMPLE ARTISTS
const taylorSwiftCondensed: ArtistCondensedModel = {
  id: "01",
  name: "Taylor Swift",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/profile.jpg", type: ArtworkType.isDefault}
  ]
}

const edSheeranCondensed: ArtistCondensedModel = {
  id: "02",
  name: "Ed Sheeran",
  artwork: [
    { url: baseURL + "/samples/artists/edSheeran/profile.jpg", type: ArtworkType.isDefault}
  ]
}

const imagineDragonsCondensed: ArtistCondensedModel = {
  id: "03",
  name: "Imagine Dragons",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/profile.jpeg", type: ArtworkType.isDefault}
  ]
}

const taylorSwift: ArtistModel= {
  id: "01",
  name: "Taylor Swift",
  description: "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her narrative songwriting, which often centers around her personal life, has received widespread critical plaudits and media coverage.",
  artwork: [
    { url: baseURL + "/images/artists/taylorSwift/profile.jpg", type: ArtworkType.isDefault}
  ],
  genre: ["Pop", "Country"],
  born: new Date("1989-12-13"),
  hometown: "Reading, Pennsylvania, U.S.",
  stats: {
    rank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    playsPerDay: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerMonth: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerYear: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    topAlbums: [],
    topTracks: [],
    awards: []
  },
  tours: [],
  albums: [],
  tracks: [],
  features: [],
  musicVideos: [],
  playlists: []
}

const edSheeran: ArtistModel = {
  id: "03",
  name: "Ed Sheeran",
  description: "Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer, songwriter, musician, record producer, and actor. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. After signing with Asylum Records, his debut album, + (pronounced \"plus\"), was released in September 2011.",
  artwork: [
    { url: baseURL + "/samples/artists/edSheeran/profile.jpg", type: ArtworkType.isDefault}
  ],
  genre: ["Pop", "Folk", "Hip Hop"],
  born: new Date("1991-02-17"),
  hometown: "Halifax, West Yorkshire, England",
  stats: {
    rank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    playsPerDay: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerMonth: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerYear: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    topAlbums: [],
    topTracks: [],
    awards: []
  },
  tours: [],
  albums: [],
  tracks: [],
  features: [],
  musicVideos: [],
  playlists: []
}

const imagineDragons: ArtistModel = {
  id: "02",
  name: "Imagine Dragons",
  description: "Imagine Dragons is an American pop rock band from Las Vegas, Nevada, consisting of lead singer Dan Reynolds, lead guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman. The band first gained exposure with the release of their single \"It's Time\", followed by their award-winning debut studio album Night Visions (2012), which resulted in the chart-topping singles \"Radioactive\" and \"Demons\".",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/profile.jpeg", type: ArtworkType.isDefault}
  ],
  genre: ["Pop", "Rock"],
  born: new Date("2008-01-01"),
  hometown: "Las Vegas, Nevada, U.S.",
  stats: {
    rank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    playsPerDay: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerMonth: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    playsPerYear: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    topAlbums: [],
    topTracks: [],
    awards: []
  },
  tours: [],
  albums: [],
  tracks: [],
  features: [],
  musicVideos: [],
  playlists: []
}
// #endregion

// #region CONDENSED ALBUMS
const debutAlbumCondensed: AlbumCondensedModel = {
  id: "0101",
  name: "Taylor Swift",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Taylor Swift is the debut studio album by American singer-songwriter Taylor Swift, released on October 24, 2006, by Big Machine Records. Swift was 16 years old at the time of the album's release and wrote its songs during her freshman year of high school.",
  year: 2006
}

const fearlessCondensed: AlbumCondensedModel = {
  id: "0102",
  name: "Fearless",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/03.jpg", type: ArtworkType.isAlternate },
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. As with her first album, Taylor Swift, Swift wrote or co-wrote all thirteen tracks on Fearless.",
  year: 2008
}

const speakNowCondensed: AlbumCondensedModel = {
  id: "0103",
  name: "Speak Now",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Speak Now is the third studio album by American singer-songwriter Taylor Swift. It was released on October 25, 2010, by Big Machine Records. Production for the album took place during 2009 to 2010 at several recording studios, and was handled by Swift and Nathan Chapman.",
  year: 2010
}

const redCondensed: AlbumCondensedModel = {
  id: "0104",
  name: "Red",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records. Inspired by past romantic relationships evoking intense, tumultuous \"red\" emotions that Swift was experiencing during conception of the project, Red touches on Swift's recurring themes of romance and heartbreak, but represents a more mature perspective, while exploring other themes such as fame and the pressure of being in the limelight.",
  year: 2012
}

const _1989Condensed: AlbumCondensedModel = {
  id: "0105",
  name: "1989",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014, through Big Machine Records. Following the release of her fourth studio album Red (2012), which critics considered Swift's emergence from her trademark country styles to straightforward pop, Swift sought to completely move away from country on her next record.",
  year: 2014
}

const reputationCondensed: AlbumCondensedModel = {
  id: "0106",
  name: "Reputation",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Reputation is the sixth studio album by American singer-songwriter Taylor Swift. It was released on November 10, 2017, through Big Machine Records. The record was primarily produced by Jack Antonoff, Max Martin, Shellback and Swift herself, who also serves as the executive producer.",
  year: 2017
}

const loverCondensed: AlbumCondensedModel = {
  id: "0107",
  name: "Lover",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Lover is the seventh studio album by American singer-songwriter Taylor Swift, released on August 23, 2019, through Republic Records. As the executive producer, Swift enlisted producers Jack Antonoff, Louis Bell, Frank Dukes and Joel Little for the project.",
  year: 2019
}

const folkloreCondensed: AlbumCondensedModel = {
  id: "0108",
  name: "Folklore",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Folklore (stylized in all lowercase) is the eighth studio album by American singer-songwriter Taylor Swift. It was a surprise album, released through Republic Records on July 24, 2020, eleven months after its predecessor, Lover (2019).",
  year: 2020
}

const evermoreCondensed: AlbumCondensedModel = {
  id: "0109",
  name: "Evermore",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  type: AlbumType.Album,
  description: "Evermore (stylized in all lowercase) is the ninth studio album by American singer-/songwriter Taylor Swift. It was released on December 11, 2020, through Republic Records, less than five months after Swift's eighth studio album, Folklore (2020).",
  year: 2020
}

const evolveCondensed: AlbumCondensedModel = {
  id: "0201",
  name: "Evolve",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
  ],
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  type: AlbumType.Album,
  description: "Evolve is the third studio album by American pop rock band Imagine Dragons, released on June 23, 2017 by Kidinakorner and Interscope Records. After the release of their previous album Smoke + Mirrors (2015) and its respective world tour, a self-imposed hiatus for 2016 and cryptic messages from the band through their social media gained anticipation for their third album.",
  year: 2017

}
// #endregion

// #region CONDENSED TRACKS
// #region TAYLOR SWIFT - DEBUT ALBUM
const timMcGrawCondensed: TrackCondensedModel = {
  id: "010101",
  name: "Tim McGraw",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 232,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const pictureToBurnCondensed: TrackCondensedModel = {
  id: "010102",
  name: "Picture to Burn",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 172,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const teardropsOnMyGuitarCondensed: TrackCondensedModel = {
  id: "010103",
  name: "Teardrops on My Guitar",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 228,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const aPlaceInThisWorldCondensed: TrackCondensedModel = {
  id: "010104",
  name: "A Place in This World",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 202,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const coldAsYouCondensed: TrackCondensedModel = {
  id: "010105",
  name: "Cold as You",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 240,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const theOutsideCondensed: TrackCondensedModel = {
  id: "010106",
  name: "The Outside",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name,
  albumId: debutAlbumCondensed.id,
  duration: 234,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const tiedTogetherWithASmileCondensed: TrackCondensedModel = {
  id: "010107",
  name: "Tied Together with a Smile",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 243,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const stayBeautifulCondensed: TrackCondensedModel = {
  id: "010108",
  name: "Stay Beautiful",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 218,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const shouldveSaidNoCondensed: TrackCondensedModel = {
  id: "010109",
  name: "Should've Said No",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 244,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const marysSongOhMyMyMyCondensed: TrackCondensedModel = {
  id: "010110",
  name: "Mary's Song (Oh My My My)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 219,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const ourSongCondensed: TrackCondensedModel = {
  id: "010111",
  name: "Our Song",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 191,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const imOnlyMeWhenImWithYouCondensed: TrackCondensedModel = {
  id: "010112",
  name: "I'm Only Me When I'm with You",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 205,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const invisibleCondensed: TrackCondensedModel = {
  id: "010113",
  name: "Invisible",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 227,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const aPerfectlyGoodHeartCondensed: TrackCondensedModel = {
  id: "010114",
  name: "A Perfectly Good Heart",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: debutAlbumCondensed.name, 
  albumId: debutAlbumCondensed.id,
  duration: 213,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const debutAlbumCondensedTracks = [timMcGrawCondensed, pictureToBurnCondensed, teardropsOnMyGuitarCondensed, aPlaceInThisWorldCondensed, coldAsYouCondensed, theOutsideCondensed, tiedTogetherWithASmileCondensed, stayBeautifulCondensed, shouldveSaidNoCondensed, marysSongOhMyMyMyCondensed, ourSongCondensed, imOnlyMeWhenImWithYouCondensed, invisibleCondensed, aPerfectlyGoodHeartCondensed]
// #endregion

// #region TAYLOR SWIFT - FEARLESS
const jumpThenFallCondensed: TrackCondensedModel = {
  id: "010201",
  name: "Jump Then Fall",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 217,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const untoubhableCondensed: TrackCondensedModel = {
  id: "010202",
  name: "Untouchable",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 331,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const foreverAndAlwaysPianoVersionCondensed: TrackCondensedModel = {
  id: "010203",
  name: "Forever & Always (Piano Version)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 285,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const comeInWithTheRainCondensed: TrackCondensedModel = {
  id: "010204",
  name: "Come in with the Rain",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 227,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const superstarCondensed: TrackCondensedModel = {
  id: "010205",
  name: "Superstar",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 237,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const theOtherSideOfTheDoorCondensed: TrackCondensedModel = {
  id: "010206",
  name: "The Other Side of the Door",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Country", "Pop"],
}

const fearlessCondensedTrack: TrackCondensedModel = {
  id: "010207",
  name: "Fearless",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 246,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const fifthteenCondensed: TrackCondensedModel = {
  id: "010208",
  name: "Fifteen",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 284,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const loveStoryCondensed: TrackCondensedModel = {
  id: "010209",
  name: "Love Story",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 235,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const heyStephenCondensed: TrackCondensedModel = {
  id: "010210",
  name: "Hey Stephen",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 249,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const whiteHorseCondensed: TrackCondensedModel = {
  id: "010211",
  name: "White Horse",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 228,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const youBelongWithMeCondensed: TrackCondensedModel = {
  id: "010212",
  name: "You Belong with Me",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name,
  albumId: fearlessCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const breatheCondensed: TrackCondensedModel = {
  id: "010213",
  name: "Breathe (feat. Colbie Caillat)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 254,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const tellMeWhyCondensed: TrackCondensedModel = {
  id: "010214",
  name: "Tell Me Why",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 220,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const youreNotSorryCondensed: TrackCondensedModel = {
  id: "010215",
  name: "You're Not Sorry",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 246,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const theWayILovedYouCondensed: TrackCondensedModel = {
  id: "010216",
  name: "The Way I Loved You",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 251,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const foreverAndAlwaysCondensed: TrackCondensedModel = {
  id: "010217",
  name: "Forever & Always",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 236,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const theBestDayCondensed: TrackCondensedModel = {
  id: "010218",
  name: "The Best Day",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 249,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const changeCondensed: TrackCondensedModel = {
  id: "010219",
  name: "Change",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: fearlessCondensed.name, 
  albumId: fearlessCondensed.id,
  duration: 264,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const fearlessCondensedTracks: TrackCondensedModel[] = [
jumpThenFallCondensed, untoubhableCondensed, foreverAndAlwaysPianoVersionCondensed, comeInWithTheRainCondensed, superstarCondensed, theOtherSideOfTheDoorCondensed, fearlessCondensedTrack, fifthteenCondensed, loveStoryCondensed, heyStephenCondensed, whiteHorseCondensed, youBelongWithMeCondensed, breatheCondensed, tellMeWhyCondensed, youreNotSorryCondensed, theWayILovedYouCondensed, foreverAndAlwaysCondensed, theBestDayCondensed, changeCondensed]
// #endregion

// #region TAYLOR SWIFT - SPEAK NOW
const mineCondensed: TrackCondensedModel = {
  id: "010301",
  name: "Mine",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 230,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const sparksFlyCondensed: TrackCondensedModel = {
  id: "010302",
  name: "Sparks Fly",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 243,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const backToDecemberCondensed: TrackCondensedModel = {
  id: "010303",
  name: "Back to December",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 256,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const speakNowCondensedTrack: TrackCondensedModel = {
  id: "010304",
  name: "Speak Now",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 248,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const dearJohnCondensed: TrackCondensedModel = {
  id: "010305",
  name: "Dear John",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 376,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop"],
}

const meanCondensed: TrackCondensedModel = {
  id: "010306",
  name: "Mean",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Country", "Pop", "Folk"],
}

const theStoryOfUsCondensed: TrackCondensedModel = {
  id: "010307",
  name: "The Story of Us",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 249,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const neverGrowUpCondensed: TrackCondensedModel = {
  id: "010308",
  name: "Never Grow Up",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 252,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const enchantedCondensed: TrackCondensedModel = {
  id: "010309",
  name: "Enchanted",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 303,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const betterThanRevengeCondensed: TrackCondensedModel = {
  id: "010310",
  name: "Better Than Revenge",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 201,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const innocentCondensed: TrackCondensedModel = {
  id: "010311",
  name: "Innocent",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 303,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const hauntedCondensed: TrackCondensedModel = {
  id: "010312",
  name: "Haunted",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 237,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const lastKissCondensed: TrackCondensedModel = {
  id: "010313",
  name: "Last Kiss",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 339,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const longLiveCondensed: TrackCondensedModel = {
  id: "010314",
  name: "Long Live",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name, 
  albumId: speakNowCondensed.id,
  duration: 300,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const oursCondensed: TrackCondensedModel =  {
  id: "010315",
  name: "Ours",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 229,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const ifThisWasAMovieCondensed: TrackCondensedModel = {
  id: "010316",
  name: "If This Was a Movie",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 227,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const supermanCondensed: TrackCondensedModel = {
  id: "010317",
  name: "Superman",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: speakNowCondensed.name,
  albumId: speakNowCondensed.id,
  duration: 279,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Country", "Pop"],
}

const speakNowCondensedTracks: TrackCondensedModel[] = [
mineCondensed, sparksFlyCondensed, backToDecemberCondensed, speakNowCondensedTrack, dearJohnCondensed, meanCondensed, theStoryOfUsCondensed, neverGrowUpCondensed, enchantedCondensed, betterThanRevengeCondensed, innocentCondensed, hauntedCondensed, lastKissCondensed, longLiveCondensed, oursCondensed, ifThisWasAMovieCondensed, supermanCondensed]
// #endregion

// #region TAYLOR SWIFT - RED
const stateOfGraceCondensed: TrackCondensedModel = {
  id: "010401",
  name: "State of Grace",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 301,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  tags: ["Country", "Pop"],
}

const redCondensedTrack: TrackCondensedModel = {
  id: "010402",
  name: "Red",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Country", "Pop"],
}

const treacherousCondensed: TrackCondensedModel = {
  id: "010403",
  name: "Treacherous",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 243,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const iKnewYouWereTroubleCondensed: TrackCondensedModel = {
  id: "010404",
  name: "I Knew You Were Trouble.",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const allTooWellCondensed: TrackCondensedModel = {
  id: "010405",
  name: "All Too Well",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 329,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  tags: ["Pop"],
}

const _22Condensed: TrackCondensedModel = {
  id: "010406",
  name: "22",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const iAlmostDoCondensed: TrackCondensedModel = {
  id: "010407",
  name: "I Almost Do",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 241,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const weAreNeverEverGettingBackTogetherCondensed: TrackCondensedModel = {
  id: "010408",
  name: "We Are Never Ever Getting Back Together",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 193,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const stayStayStayCondensed: TrackCondensedModel = {
  id: "010409",
  name: "Stay Stay Stay",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 187,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const theLastTimeCondensed: TrackCondensedModel = {
  id: "010410",
  name: "The Last Time (feat. Gary Lightbody)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 287,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const holyGroundCondensed: TrackCondensedModel = {
  id: "010411",
  name: "Holy Ground",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 200,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const sadBeautifulTragicCondensed: TrackCondensedModel = {
  id: "010412",
  name: "Sad Beautiful Tragic",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 268,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const theLuckyOneCondensed: TrackCondensedModel = {
  id: "010413",
  name: "The Lucky One",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 259,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const everythingHasChangedCondensed: TrackCondensedModel = {
  id: "010414",
  name: "Everything Has Changed (feat. Ed Sheeran)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 245,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const starlightCondensed: TrackCondensedModel = {
  id: "010415",
  name: "Starlight",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const beginAgainCondensed: TrackCondensedModel = {
  id: "010416",
  name: "Begin Again",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 239,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const theMomentIKnewCondensed: TrackCondensedModel =  {
  id: "010417",
  name: "The Moment I Knew",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name,
  albumId: redCondensed.id,
  duration: 285,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const comeBackBeHereCondensed: TrackCondensedModel = {
  id: "010418",
  name: "Come Back... Be Here",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 230,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const girlAtHomeCondensed: TrackCondensedModel = {
  id: "010419",
  name: "Girl At Home",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: redCondensed.name, 
  albumId: redCondensed.id,
  duration: 200,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  tags: ["Pop"],
}

const redCondensedTracks: TrackCondensedModel[] = [stateOfGraceCondensed, redCondensedTrack, treacherousCondensed, iKnewYouWereTroubleCondensed, allTooWellCondensed, _22Condensed, iAlmostDoCondensed, weAreNeverEverGettingBackTogetherCondensed, stayStayStayCondensed, theLastTimeCondensed, holyGroundCondensed, sadBeautifulTragicCondensed, theLuckyOneCondensed, everythingHasChangedCondensed, starlightCondensed, beginAgainCondensed, theMomentIKnewCondensed, comeBackBeHereCondensed, girlAtHomeCondensed]
// #endregion

// #region TAYLOR SWIFT - 1989
const welcomeToNewYorkCondensed: TrackCondensedModel = {
  id: "010501",
  name: "Welcome to New York",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 212,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const blankSpaceCondensed: TrackCondensedModel = {
  id: "010502",
  name: "Blank Space",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const styleCondensed: TrackCondensedModel = {
  id: "010503",
  name: "Style",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const outOfTheWoodsCondensed: TrackCondensedModel = {
  id: "010504",
  name: "Out of the Woods",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const allYouHadToDoWasStayCondensed: TrackCondensedModel = {
  id: "010505",
  name: "All You Had to Do Was Stay",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const shakeItOffCondensed: TrackCondensedModel = {
  id: "010506",
  name: "Shake It Off",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const iWishYouWouldCondensed: TrackCondensedModel = {
  id: "010507",
  name: "I Wish You Would",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name, 
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const badBloodCondensed: TrackCondensedModel = {
  id: "010508",
  name: "Bad Blood",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name, 
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const wildestDreamsCondensed: TrackCondensedModel = {
  id: "010509",
  name: "Wildest Dreams",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name, 
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const howYouGetTheGirlCondensed: TrackCondensedModel  = {
  id: "010510",
  name: "How You Get the Girl",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const thisLoveCondensed: TrackCondensedModel = {
  id: "010511",
  name: "This Love",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const iKnowPlacesCondensed: TrackCondensedModel = {
  id: "010512",
  name: "I Know Places",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const clean: TrackCondensedModel = {
  id: "010513",
  name: "Clean",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const wonderlandCondensed: TrackCondensedModel = {
  id: "010514",
  name: "Wonderland",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name,
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const youAreInLoveCondensed: TrackCondensedModel = {
  id: "010515",
  name: "You Are In Love",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name, 
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const newRomanticsCondensed: TrackCondensedModel = {
  id: "010516",
  name: "New Romantics",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: _1989Condensed.name, 
  albumId: _1989Condensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  tags: ["Pop"],
}

const _1989CondensedTracks: TrackCondensedModel[] = [welcomeToNewYorkCondensed, blankSpaceCondensed, styleCondensed, outOfTheWoodsCondensed, allYouHadToDoWasStayCondensed, shakeItOffCondensed, iWishYouWouldCondensed, badBloodCondensed, wildestDreamsCondensed, howYouGetTheGirlCondensed, thisLoveCondensed, iKnowPlacesCondensed, clean, wonderlandCondensed, youAreInLoveCondensed, newRomanticsCondensed]
// #endregion

// #region TAYLOR SWIFT - REPUTATION
const readyForItCondensed: TrackCondensedModel = {
  id: "010601",
  name: "...Ready For It?",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const endGameCondensed: TrackCondensedModel = {
  id: "010602",
  name: "End Game (feat. Ed Sheeran & Future)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const iDidSomethingBadCondensed: TrackCondensedModel = {
  id: "010603",
  name: "I Did Something Bad",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const dontBlameMeCondensed: TrackCondensedModel = {
  id: "010604",
  name: "Don't Blame Me",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const delicateCondensed: TrackCondensedModel = {
  id: "010605",
  name: "Delicate",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const lookWhatYouMadeMeDoCondensed: TrackCondensedModel = {
  id: "010606",
  name: "Look What You Made Me Do",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop", "Rap"],
}

const soItGoesCondensed: TrackCondensedModel = {
  id: "010607",
  name: "So It Goes...",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const gorgeousCondensed: TrackCondensedModel = {
  id: "010608",
  name: "Gorgeous",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const getawayCarCondensed: TrackCondensedModel = {
  id: "010609",
  name: "Getaway Car",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const kingOfMyHeartCondensed: TrackCondensedModel = {
  id: "010610",
  name: "King of My Heart",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const dancingWithOurHandsTiedCondensed: TrackCondensedModel = {
  id: "010611",
  name: "Dancing With Our Hands Tied",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const dressCondensed: TrackCondensedModel = {
  id: "010612",
  name: "Dress",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name,
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const thisIsWhyWeCantHaveNiceThingsCondensed: TrackCondensedModel = {
  id: "010613",
  name: "This Is Why We Can't Have Nice Things",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const callItWhatYouWantCondensed: TrackCondensedModel = {
  id: "010614",
  name: "Call It What You Want",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const newYearsDayCondensed: TrackCondensedModel = {
  id: "010615",
  name: "New Year's Day",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: reputationCondensed.name, 
  albumId: reputationCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const reputationCondensedTracks: TrackCondensedModel[] = [readyForItCondensed, endGameCondensed, iDidSomethingBadCondensed, dontBlameMeCondensed, delicateCondensed, lookWhatYouMadeMeDoCondensed, soItGoesCondensed, gorgeousCondensed, getawayCarCondensed, kingOfMyHeartCondensed, dancingWithOurHandsTiedCondensed, dressCondensed, thisIsWhyWeCantHaveNiceThingsCondensed, callItWhatYouWantCondensed, newYearsDayCondensed]
// #endregion

// #region TAYLOR SWIFT - LOVER
const iforgotThatYouExistedCondensed: TrackCondensedModel = {
  id: "010701",
  name: "I Forgot That You Existed",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const cruelSummerCondensed: TrackCondensedModel = {
  id: "010702",
  name: "Cruel Summer",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const loverCondensedTrack: TrackCondensedModel = {
  id: "010703",
  name: "Lover",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const theManCondensed: TrackCondensedModel = {
  id: "010704",
  name: "The Man",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const theArcherCondensed: TrackCondensedModel = {
  id: "010705",
  name: "The Archer",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const iThinkHeKnowsCondensed: TrackCondensedModel = {
  id: "010706",
  name: "I Think He Knows",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const missAmericanaAndTheHeartbreakPrinceCondensed: TrackCondensedModel = {
  id: "010707",
  name: "Miss Americana & The Heartbreak Prince",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const paperRingsCondensed: TrackCondensedModel = {
  id: "010708",
  name: "Paper Rings",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const corneliaStreetCondensed: TrackCondensedModel = {
  id: "010709",
  name: "Cornelia Street",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const deathByAThousandCutsCondensed: TrackCondensedModel = {
  id: "010710",
  name: "Death By A Thousand Cuts",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const londonBoyCondensed: TrackCondensedModel = {
  id: "010711",
  name: "London Boy",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const soonYoullGetBetterCondensed: TrackCondensedModel = {
  id: "010712",
  name: "Soon You'll Get Better (feat. Dixie Chicks)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const falseGodCondensed: TrackCondensedModel = {
  id: "010713",
  name: "False God",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const youNeedToCalmDownCondensed: TrackCondensedModel = {
  id: "010714",
  name: "You Need To Calm Down",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const afterglowCondensed: TrackCondensedModel = {
  id: "010715",
  name: "Afterglow",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name, 
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const meCondensed: TrackCondensedModel = {
  id: "010716",
  name: "ME! (feat. Brendon Urie of Panic! At The Disco)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const itsNiceToHaveAFriendCondensed: TrackCondensedModel = {
  id: "010717",
  name: "It's Nice To Have A Friend",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const daylightCondensed: TrackCondensedModel = {
  id: "010718",
  name: "Daylight",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: loverCondensed.name,
  albumId: loverCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const loverCondensedTracks = [iforgotThatYouExistedCondensed, cruelSummerCondensed, loverCondensedTrack, theManCondensed, theArcherCondensed, iThinkHeKnowsCondensed, missAmericanaAndTheHeartbreakPrinceCondensed, paperRingsCondensed, corneliaStreetCondensed, deathByAThousandCutsCondensed, londonBoyCondensed, soonYoullGetBetterCondensed, falseGodCondensed, youNeedToCalmDownCondensed, afterglowCondensed, meCondensed, itsNiceToHaveAFriendCondensed, daylightCondensed]

// #endregion

// #region TAYLOR SWIFT - FOLKLORE
const the1Condensed: TrackCondensedModel = {
  id: "010801",
  name: "the 1",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const cardiganCondensed: TrackCondensedModel = {
  id: "010802",
  name: "cardigan",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Explicit", "Pop"],
}

const theLastGreatAmericanDynastyCondensed: TrackCondensedModel = {
  id: "010803",
  name: "the last great american dynasty",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Explicit", "Pop"],
}

const exileCondensed: TrackCondensedModel = {
  id: "010804",
  name: "exile (feat. Bon Iver)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const myTearsRicochetCondensed: TrackCondensedModel = {
  id: "010805",
  name: "my tears ricochet",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const mirrorballCondensed: TrackCondensedModel = {
  id: "010806",
  name: "mirrorball",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const sevenCondensed: TrackCondensedModel = {
  id: "010807",
  name: "seven",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const augustCondensed: TrackCondensedModel = {
  id: "010808",
  name: "august",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name, 
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const thisIsMeTryingCondensed: TrackCondensedModel = {
  id: "010809",
  name: "this is me trying",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const illicitAffairsCondensed: TrackCondensedModel = {
  id: "010810",
  name: "illicit affairs",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name, 
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const invisibleStringCondensed: TrackCondensedModel = {
  id: "010811",
  name: "invisible string",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name, 
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const madWomanCondensed: TrackCondensedModel = {
  id: "010812",
  name: "Mad Women",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit", "Pop"],
}

const epiphanyCondensed: TrackCondensedModel = {
  id: "010813",
  name: "epiphany",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name, 
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const bettyCondensed: TrackCondensedModel = {
  id: "010814",
  name: "betty",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name, 
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit", "Pop"],
}

const peaceCondensed: TrackCondensedModel = {
  id: "010815",
  name: "peace",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit", "Pop"],
}

const hoaxCondensed: TrackCondensedModel = {
  id: "010816",
  name: "hoax",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const theLakesCondensed: TrackCondensedModel = {
  id: "010817",
  name: "the lakes",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: folkloreCondensed.name,
  albumId: folkloreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const folkloreCondensedTracks = [the1Condensed, cardiganCondensed, theLastGreatAmericanDynastyCondensed, exileCondensed, myTearsRicochetCondensed, mirrorballCondensed, sevenCondensed, augustCondensed, thisIsMeTryingCondensed, illicitAffairsCondensed, invisibleStringCondensed, madWomanCondensed, epiphanyCondensed, bettyCondensed, peaceCondensed, hoaxCondensed, theLakesCondensed]
// #endregion

// #region TAYLOR SWIFT - EVERMORE
const willowCondensed: TrackCondensedModel = {
  id: "010901",
  name: "willow",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const champagneProblemsCondensed: TrackCondensedModel = {
  id: "010902",
  name: "champagne problems",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Explicit", "Pop"],
}

const goldRushCondensed: TrackCondensedModel = {
  id: "010903",
  name: "gold rush",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Explicit", "Pop"],
}

const tisTheDamnSeasonCondensed: TrackCondensedModel = {
  id: "010904",
  name: "'tis the damn season",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Pop"],
}

const tolerateItCondensed: TrackCondensedModel = {
  id: "010905",
  name: "tolerate it",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  tags: ["Explicit", "Pop"],
}

const noBodyNoCrimeCondensed: TrackCondensedModel = {
  id: "010906",
  name: "no body, no crime (feat. HAIM)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const happinessCondensed: TrackCondensedModel = {
  id: "010907",
  name: "happiness",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit","Pop"],
}

const dorotheaCondensed: TrackCondensedModel = {
  id: "010908",
  name: "dorothea",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const coneyIslandCondensed: TrackCondensedModel = {
  id: "010909",
  name: "coney island (feat. The National)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const ivyCondensed: TrackCondensedModel = {
  id: "010910",
  name: "ivy",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit", "Pop"],
}

const cowboyLikeMeCondensed: TrackCondensedModel = {
  id: "010911",
  name: "cowboy like me",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Explicit", "Pop"],
}

const longStoryShortCondensed: TrackCondensedModel = {
  id: "010912",
  name: "long story short",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const marjorieCondensed: TrackCondensedModel = {
  id: "010913",
  name: "marjorie",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const closureCondensed: TrackCondensedModel = {
  id: "010914",
  name: "closure",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const evermoreCondensedTrack: TrackCondensedModel = {
  id: "010915",
  name: "evermore (feat. Bon Iver)",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name, 
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const rightWhereYouLeftMeCondensed: TrackCondensedModel = {
  id: "010916",
  name: "right where you left me",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const itsTimeToGoCondensed: TrackCondensedModel = {
  id: "010917",
  name: "it's time to go",
  artistName: taylorSwiftCondensed.name,
  artistId: taylorSwiftCondensed.id,
  albumName: evermoreCondensed.name,
  albumId: evermoreCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/04.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const evermoreCondensedTracks = [willowCondensed, champagneProblemsCondensed, goldRushCondensed, tisTheDamnSeasonCondensed, tolerateItCondensed, noBodyNoCrimeCondensed, happinessCondensed, dorotheaCondensed, coneyIslandCondensed, ivyCondensed, cowboyLikeMeCondensed, longStoryShortCondensed, marjorieCondensed, closureCondensed, evermoreCondensedTrack, rightWhereYouLeftMeCondensed, itsTimeToGoCondensed]
// #endregion

// #region IMAGINE DRAGONS - EVOLVE
const nextToMeCondensed: TrackCondensedModel = {
  id: "020101",
  name: "Next To Me",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const iDontKnowWhyCondensed: TrackCondensedModel = {
  id: "020102",
  name: "I Don't Know Why",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const whateverItTakesCondensed: TrackCondensedModel = {
  id: "020103",
  name: "Whatever It Takes",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const believerCondensed: TrackCondensedModel = {
  id: "020104",
  name: "Believer",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const walkingTheWireCondensed: TrackCondensedModel = {
  id: "020105",
  name: "Walking The Wire",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const riseUpCondensed: TrackCondensedModel = {
  id: "020106",
  name: "Rise Up",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  tags: ["Pop"],
}

const illmakeituptoyouCondensed: TrackCondensedModel = {
  id: "020107",
  name: "I'll Make It Up To You",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const yesterdayCondensed: TrackCondensedModel = {
  id: "020108",
  name: "Yesterday",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name, 
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const mouthOfTheRiverCondensed: TrackCondensedModel = {
  id: "020109",
  name: "Mouth Of The River",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const thunderCondensed: TrackCondensedModel = {
  id: "020110",
  name: "Thunder",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name, 
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const startOverCondensed: TrackCondensedModel = {
  id: "020111",
  name: "Start Over",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name,
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const dancingIntheDarkCondensed: TrackCondensedModel = {
  id: "020112",
  name: "Dancing In the Dark",
  artistName: imagineDragonsCondensed.name,
  artistId: imagineDragonsCondensed.id,
  albumName: evolveCondensed.name, 
  albumId: evolveCondensed.id,
  duration: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/02.jpg", type: ArtworkType.isDefault }
  ],
  tags: ["Pop"],
}

const evolveCondensedTracks: TrackCondensedModel[] = [nextToMeCondensed, iDontKnowWhyCondensed, whateverItTakesCondensed, believerCondensed, walkingTheWireCondensed, riseUpCondensed, illmakeituptoyouCondensed, yesterdayCondensed, mouthOfTheRiverCondensed, thunderCondensed, startOverCondensed, dancingIntheDarkCondensed]
// #endregion

// #endregion

// #region DETAILED TRACKS
// #region GENERICS
const genericCredits: CreditModel = {
  writers: [{ artist: taylorSwiftCondensed, credit: "Lyricist" }],
  producers: [{ artist: taylorSwiftCondensed, credit: "Producer" }],
  engineers: [{ artist: taylorSwiftCondensed, credit: "Engineer" }],
  mixers: [{ artist: taylorSwiftCondensed, credit: "Mixer" }],
  features: []
}

const genericStats: TrackStatsModel = {
  playCount: 1000000, 
  likedCount: 500000, 
  playsPerDay: [100, 123, 435, 123], 
  playsPerMonth: [0, 123, 1232, 123,123123,], 
  playsPerYear: [123, 432,745,123,654,1232,67], 
  awards: [{
    name: "Grammy Award for Best New Artist",
    description: "The Grammy Award for Best New Artist has been awarded since 1959. Years reflect the year in which the Grammy Awards were handed out, for records released in the previous year. The award was not presented in 1967. The official guidelines are as follows: \"For a new artist who releases, during the Eligibility Year, the first recording which establishes the public identity of that artist.\" Note that this is not necessarily the first album released by an artist.",
    year: 2008,
    artwork: [{ url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }],
  }] 
}
// #endregion

// #region TAYLOR SWIFT - DEBUT ALBUM
const timMcGraw: TrackModel = {
  id: "010101",
  name: "Tim McGraw",
  description: "Tim McGraw is the debut single and first published song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on June 19, 2006 by Big Machine Records as Swift's debut single and the lead single from Swift's eponymous debut album. Swift wrote \"Tim McGraw\" during her freshman year of high school, knowing that she and her senior boyfriend would break up at the end of the year when he left for college. The song was written about all the different things that would remind the subject of Swift and their time spent together, once he departed.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/timMcGraw.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/timMcGraw.mp3",
  license: "",
  credits: genericCredits
}

const pictureToBurn: TrackModel = {
  id: "010102",
  name: "Picture To Burn",
  description: "Picture to Burn is a song recorded by American singer-songwriter Taylor Swift. It was co-written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on February 3, 2008 by Big Machine Records as the fourth single from Swift's eponymous studio album, Taylor Swift (2006). Swift solely composed \"Picture to Burn\" as a teenager while living with her parents in Wyomissing, Pennsylvania. After completing the song, Swift showed it to her then-label, RCA Records, but was rejected. She considered giving the song to another artist, but instead made it a last-minute addition to her self-titled debut album, Taylor Swift (2006).",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/pictureToBurn.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/pictureToBurn.mp3",
  license: "",
  credits: genericCredits
}

const teardropsOnMyGuitar: TrackModel = {
  id: "010103",
  name: "Teardrops On My Guitar",
  description: "Teardrops on My Guitar is a song by American singer-songwriter Taylor Swift. The song was written by Swift and Liz Rose, and produced by Nathan Chapman. \"Teardrops on My Guitar\" was released on February 19, 2007 by Big Machine Records, as the second single from Swift's eponymous debut album (2006). The song was later included on the international release of Swift's second studio album, Fearless (2008), and released as the second single from the album in the United Kingdom.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/teardropsOnMyGuitar.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/teardropsOnMyGuitar.mp3",
  license: "",
  credits: genericCredits
}

const aPlaceInThisWorld: TrackModel = {
  id: "010104",
  name: "A Place In This World",
  description: "A Place in This World is a song recorded by American singer-songwriter Taylor Swift. It was written by Swift, Robert Ellis Orrall and Angelo Petraglia, and produced by Nathan Chapman. It was released on October 7, 2007 by Big Machine Records as the third single from Swift's eponymous debut album, Taylor Swift (2006). Swift was inspired to write \"A Place in This World\" after listening to the song \"Vacancy\" by Marc Cohn, which she considered similar to her life story.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/aPlaceInThisWorld.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/aPlaceInThisWorld.mp3",
  license: "",
  credits: genericCredits
}

const coldAsYou: TrackModel = {
  id: "010105",
  name: "Cold As You",
  description: "Cold as You is a song recorded by American singer-songwriter Taylor Swift for her eponymous debut album, Taylor Swift (2006). It was written by Swift and Liz Rose, and produced by Nathan Chapman. The song was released on June 19, 2006 by Big Machine Records as the album's fourth single. Swift wrote \"Cold as You\" about a boyfriend who she thought was the one, but ended the relationship when he was still hung up on an ex-girlfriend.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/coldAsYou.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/coldAsYou.mp3",
  license: "",
  credits: genericCredits
}

const theOutside: TrackModel = {
  id: "010106",
  name: "The Outside",
  description: "The Outside is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on September 20, 2004 by Big Machine Records as Swift's debut single and the lead single from Swift's eponymous debut album, Taylor Swift (2006). Swift was 12 years old when she first performed the song for RCA Records, who then had Swift fly to Nashville, Tennessee to work with her. She then signed to Big Machine Records and the song was released as her debut single.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/theOutside.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/theOutside.mp3",
  license: "",
  credits: genericCredits
}

const tiedTogetherWithASmile: TrackModel = {
  id: "010107",
  name: "Tied Together With A Smile",
  description: "Tied Together with a Smile is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on September 12, 2006 by Big Machine Records as the third single from Swift's eponymous debut album, Taylor Swift (2006). Swift was inspired to write \"Tied Together with a Smile\" after she learned that her close friend had been diagnosed with an eating disorder. The song is dedicated to her friend, whose identity she chose not to reveal.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/tiedTogetherWithASmile.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/tiedTogetherWithASmile.mp3",
  license: "",
  credits: genericCredits
}

const stayBeautiful: TrackModel = {
  id: "010108",
  name: "Stay Beautiful",
  description: "Stay Beautiful is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 24, 2006 by Big Machine Records as the sixth and final single from Swift's eponymous debut album, Taylor Swift (2006). Swift wrote the song when she was in ninth grade and chose to include the song on her debut album because she felt it fit the concept of the album. \"Stay Beautiful\" was inspired by Swift's high school boyfriend, who she dated for six months before he left her.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/stayBeautiful.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/stayBeautiful.mp3",
  license: "",
  credits: genericCredits
}

const shouldveSaidNo: TrackModel = {
  id: "010109",
  name: "Should've Said No",
  description: "Should've Said No is a song written and recorded by American singer-songwriter Taylor Swift. The song was produced by Nathan Chapman. It was released on May 19, 2008 by Big Machine Records as the fifth and final single from Swift's eponymous debut album, Taylor Swift (2006). Swift wrote \"Should've Said No\" in regard to her ex-boyfriend, Sam Armstrong, who was in a relationship with fellow country singer Kelsea Ballerini at the time. The song is a country song with rock influences and lyrics depicting Swift's ex-boyfriend asking forgiveness for cheating on her.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/shouldveSaidNo.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/shouldveSaidNo.mp3",
  license: "",
  credits: genericCredits
}

const marysSongOhMyMyMy: TrackModel =  {
  id: "010110",
  name: "Mary's Song (Oh My My My)",
  description: "Mary's Song (Oh My My My) is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on December 25, 2007 by Big Machine Records as the fourth single from Swift's eponymous debut album, Taylor Swift (2006). Swift solely composed \"Mary's Song (Oh My My My)\" in regard to her neighbors, the Hendersons, who she became acquainted with while in preschool. The song is a country song with lyrics about Swift's childhood memories with her next-door neighbors.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/marysSongOhMyMyMy.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/marysSongOhMyMyMy.mp3",
  license: "",
  credits: genericCredits
}

const ourSong: TrackModel = {
  id: "010111",
  name: "Our Song",
  description: "Our Song is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on September 9, 2007 by Big Machine Records as the third single from Swift's eponymous debut album, Taylor Swift (2006). Swift solely composed \"Our Song\" for the talent show of her freshman year in high school, about her boyfriend at the time, Drew Dunlap, who also produced her self-titled debut album, Taylor Swift (2006).",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/ourSong.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/ourSong.mp3",
  license: "",
  credits: genericCredits
}

const invisible: TrackModel = {
  id: "010112",
  name: "Invisible",
  description: "Invisible is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on June 6, 2006 by Big Machine Records as the seventh and final single from Swift's eponymous debut album, Taylor Swift (2006). Swift wrote \"Invisible\" in regard to her high school crush, who was completely unaware of her feelings for him. The song is a country song with lyrics expressing unrequited love and how difficult it can be to move on from a crush.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/invisible.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/invisible.mp3",
  license: "",
  credits: genericCredits
}

const aPerfectlyGoodHeart: TrackModel = {
  id: "010113",
  name: "A Perfectly Good Heart",
  description: "A Perfectly Good Heart is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on November 6, 2006 by Big Machine Records as the fifth and final single from Swift's eponymous debut album, Taylor Swift (2006). Swift wrote \"A Perfectly Good Heart\" in regard to her high school boyfriend, who she dated for a year before he left her. The song is a country song with lyrics expressing indignation over the breakup.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/debut/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: debutAlbumCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/debut/lyrics/aPerfectlyGoodHeart.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/debut/tracks/aPerfectlyGoodHeart.mp3",
  license: "",
  credits: genericCredits
}

const debutAlbumTracks: TrackModel[] = [timMcGraw, pictureToBurn, teardropsOnMyGuitar, aPlaceInThisWorld, coldAsYou, theOutside, tiedTogetherWithASmile, stayBeautiful, shouldveSaidNo, marysSongOhMyMyMy, ourSong, invisible, aPerfectlyGoodHeart]

// #endregion

// #region TAYLOR SWIFT - FEARLESS
const jumpThenFall: TrackModel = {
  id: "010201",
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

const untouchable: TrackModel = {
  id: "010202",
  name: "Untouchable",
  description: "Untouchable is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 14, 2008 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Untouchable\" in regard to the relationship she had with her former crush, Stephen Barker Liles, who was the lead singer of the country music band Love and Theft. The song is a country song with pop influences and lyrics depicting Swift's love for Liles.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/untouchable.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/untouchable.mp3",
  license: "",
  credits: genericCredits
}

const foreverAndAlwaysPinaoVersion: TrackModel = {
  id: "010203",
  name: "Forever & Always (Piano Version)",
  description: "Forever & Always is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on November 24, 2008 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Forever & Always\" in regard to her relationship with Joe Jonas, whom she dated from July to October 2008. The song is a country song with pop influences and lyrics depicting Swift's feelings for Jonas.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/foreverAndAlwaysPianoVersion.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/foreverAndAlwaysPianoVersion.mp3",
  license: "",
  credits: genericCredits
}

const comeInWithTheRain: TrackModel = {
  id: "010204",
  name: "Come In With The Rain",
  description: "Come In with the Rain is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Come In with the Rain\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/comeInWithTheRain.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/comeInWithTheRain.mp3",
  license: "",
  credits: genericCredits
}

const superStar: TrackModel = {
  id: "010205",
  name: "Super Star",
  description: "SuperStar is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"SuperStar\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/superStar.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/superStar.mp3",
  license: "",
  credits: genericCredits
}

const theOtherSideOfTheDoor: TrackModel = {
  id: "010206",
  name: "The Other Side Of The Door",
  description: "The Other Side of the Door is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"The Other Side of the Door\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/theOtherSideOfTheDoor.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/theOtherSideOfTheDoor.mp3",
  license: "",
  credits: genericCredits
}

const fearlessTrack: TrackModel = {
  id: "010207",
  name: "Fearless",
  description: "Fearless is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Fearless\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
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
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/fearless.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/fearless.mp3",
  license: "",
  credits: genericCredits
}

const fifteen: TrackModel  = {
  id: "010208",
  name: "Fifteen",
  description: "Fifteen is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Fifteen\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/fifteen.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/fifteen.mp3",
  license: "",
  credits: genericCredits
}

const loveStory: TrackModel = {
  id: "010209",
  name: "Love Story",
  description: "Love Story is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift and produced by Nathan Chapman. It was released on October 27, 2009 by Big Machine Records as a promotional single from Swift's second studio album, Fearless (2008). Swift wrote \"Love Story\" in regard to a boyfriend of hers who was in the military. The song is a country song with pop influences and lyrics depicting Swift's feelings for her boyfriend.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/loveStory.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/loveStory.mp3",
  license: "",
  credits: genericCredits
}

const heyStephen: TrackModel = {
  id: "010210",
  name: "Hey Stephen",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/heyStephen.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/heyStephen.mp3",
  license: "",
  credits: genericCredits
}

const whiteHorse: TrackModel = {
  id: "010211",
  name: "White Horse",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/heyStephen.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/heyStephen.mp3",
  license: "",
  credits: genericCredits
}

const youBelongWithMe: TrackModel = {
  id: "010212",
  name: "You Belong With Me",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/youBelongWithMe.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/youBelongWithMe.mp3",
  license: "",
  credits: genericCredits
}

const breathe: TrackModel = {
  id: "010213",
  name: "Breathe (feat. Colbie Caillat)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/breathe.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/breathe.mp3",
  license: "",
  credits: genericCredits
}

const tellMeWhy: TrackModel = {
  id: "010214",
  name: "Tell Me Why",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/tellMeWhy.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/tellMeWhy.mp3",
  license: "",
  credits: genericCredits
}

const youreNotSorry: TrackModel = {
  id: "010215",
  name: "You're Not Sorry",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/youreNotSorry.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/youreNotSorry.mp3",
  license: "",
  credits: genericCredits
}

const theWayILovedYou: TrackModel = {
  id: "010216",
  name: "The Way I Loved You",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/theWayILovedYou.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/theWayILovedYou.mp3",
  license: "",
  credits: genericCredits
}

const foreverAndAlways: TrackModel = {
  id: "010217",
  name: "Forever & Always",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/foreverAndAlways.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/foreverAndAlways.mp3",
  license: "",
  credits: genericCredits
}

const theBestDay: TrackModel = {
  id: "010218",
  name: "The Best Day",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/theBestDay.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/theBestDay.mp3",
  license: "",
  credits: genericCredits
}

const change: TrackModel = {
  id: "010219",
  name: "Change",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: fearlessCondensed,
  genre: ["Country"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/fearless/lyrics/change.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/fearless/tracks/change.mp3",
  license: "",
  credits: genericCredits
}

const fearlessAlbumTracks: TrackModel[] = [jumpThenFall, untouchable, foreverAndAlwaysPinaoVersion, comeInWithTheRain, superStar, theOtherSideOfTheDoor, fearlessTrack, fifteen, loveStory, heyStephen, whiteHorse, youBelongWithMe, breathe, tellMeWhy, youreNotSorry, theWayILovedYou, foreverAndAlways, theBestDay, change]
// #endregion

// #region TAYLOR SWIFT - SPEAK NOW
const mine: TrackModel = {
  id: "010301",
  name: "Mine",
  description: "Mine is a song written and performed by American singer-songwriter Taylor Swift. Produced by Swift along with Nathan Chapman, it was released as the lead single from Swift's third studio album, Speak Now (2010) by Big Machine Records. Following an unauthorized internet leak, the song was released on August 4, 2010, two weeks earlier than the intended release date. Swift was inspired to write \"Mine\" after reflecting on one of her unnamed crushes and explained that the song is about her tendency to run from love. The song contains elements of power pop and its lyrics speak of the ups and downs of a young love.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/mine.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/mine.mp3",
  license: "",
  credits: genericCredits
}

const sparksFly: TrackModel = {
  id: "010302",
  name: "Sparks Fly",
  description: "Sparks Fly is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). Swift wrote the song when she was 16 years old, prior to the release of her debut single \"Tim McGraw\" in 2006. Following a 2007 live performance of the song, which received a standing ovation from the crowd, Swift included the song on her set list for her first headlining tour, the Fearless Tour (2009–10). A recorded live performance of \"Sparks Fly\" at one of Swift's concerts at the Staples Center in Los Angeles was featured on the album Speak Now World Tour Live (2011).",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/sparksFly.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/sparksFly.mp3",
  license: "",
  credits: genericCredits
}

const backToDecember: TrackModel = {
  id: "010303",
  name: "Back to December",
  description: "Back to December is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). The song was sent to country radio in the United States on November 15, 2010, as the second single from Speak Now. According to Swift, \"Back to December\" is the first time she ever apologizes to someone in a song. Critics speculate that the song is about Taylor Lautner, Swift's ex-boyfriend, which was later acknowledged by Lautner.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/backToDecember.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/backToDecember.mp3",
  license: "",
  credits: genericCredits
}

const speakNowTrack: TrackModel = {
  id: "010304",
  name: "Speak Now",
  description: "Speak Now is a song by American singer-songwriter Taylor Swift. The song, written and produced by Swift with Nathan Chapman, was released as a promotional single on October 5, 2010, by Big Machine Records from her 2010 album of the same name. The song was written about Swift's appearance at the 2009 MTV Video Music Awards, when she interrupted an acceptance speech by American rapper Kanye West to give her own speech. Swift wrote the song on the same night of the event.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/speakNow.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/speakNow.mp3",
  license: "",
  credits: genericCredits
}

const dearJohn: TrackModel = {
  id: "010305",
  name: "Dear John",
  description: "Dear John is a song written and recorded by American singer-songwriter Taylor Swift. The song was written by Swift following her breakup with John Mayer, who she dated from December 2009 to February 2010. Mayer said in an interview with Rolling Stone that he was \"really humiliated\" by the song and that Swift had embarrassed him. The song is rumored to be about Mayer's relationship with Swift.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/dearJohn.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/dearJohn.mp3",
  license: "",
  credits: genericCredits
}

const mean: TrackModel = {
  id: "010306",
  name: "Mean",
  description: "Mean is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album, Speak Now (2010). Produced by Swift alongside Nathan Chapman, the song was sent to country radio in the United States on March 13, 2011, as the third single from Speak Now. \"Mean\" garnered mixed reviews from critics for its lyrical detail and profound country sound. The song received commercial success in the United States and Canada, peaking at numbers 11 and 10 respectively. In the United States, the song also peaked at number 45 on the Billboard Hot 100 and was certified quadruple-platinum by the Recording Industry Association of America (RIAA).",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/mean.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/mean.mp3",
  license: "",
  credits: genericCredits
}

const theStoryOfUs: TrackModel = {
  id: "010307",
  name: "The Story of Us",
  description: "The Story of Us is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album, Speak Now (2010). Produced by Swift alongside Nathan Chapman, the song was sent to mainstream radio in the United States on April 19, 2011, as the fourth single from Speak Now. Swift composed \"The Story of Us\" regarding the time when she encountered an ex-boyfriend of hers at the 2010 CMT Music Awards. At the event, the two attempted to ignore each other, which inspired Swift to compose the song.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/theStoryOfUs.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/theStoryOfUs.mp3",
  license: "",
  credits: genericCredits
}

const neverGrowUp: TrackModel = {
  id: "010308",
  name: "Never Grow Up",
  description: "Never Grow Up is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album, Speak Now (2010). Produced by Swift and Nathan Chapman, the song was sent to country radio in the United States on December 21, 2011, as the sixth and final single from Speak Now. \"Never Grow Up\" is a country song with pop and folk influences, which sees Swift reflecting on the concept of growing older.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/neverGrowUp.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/neverGrowUp.mp3",
  license: "",
  credits: genericCredits
}

const enchanted: TrackModel = {
  id: "010309",
  name: "Enchanted",
  description: "Enchanted is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). The song was inspired by a previous relationship with a person who was not Swift's usual type, and by the enchanted feeling she experienced during their relationship. Swift wrote the song on her personal time while she was touring for her second studio album, Fearless (2008).",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Love"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/enchanted.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/enchanted.mp3",
  license: "",
  credits: genericCredits
}

const betterThanRevenge: TrackModel = {
  id: "010310",
  name: "Better Than Revenge",
  description: "Better Than Revenge is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). Swift co-produced the song with Nathan Chapman. The song was inspired by a friend of Swift's who was cheated on by his girlfriend. Swift wrote the song in order to mock her friend's ex-girlfriend, whom Swift disliked. The song has been described as a country song with pop punk influences, and as a revenge song.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/03.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/betterThanRevenge.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/betterThanRevenge.mp3",
  license: "",
  credits: genericCredits
}

const innocent: TrackModel = {
  id: "010311",
  name: "Innocent",
  description: "Innocent is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). The song was written by Swift as a part of her acceptance speech for the MTV Video Music Awards, where she was scheduled to give an apology to Kanye West regarding the events that occurred on the previous year's show. Swift performed the song live for the first time at the 2010 VMAs. The song was later released as a single on October 25, 2010, serving as the final promotional single from Speak Now. Musically, \"Innocent\" is a country and folk song, which has been compared to works by John Mayer, Joni Mitchell, and Simon & Garfunkel.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/innocent.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/innocent.mp3",
  license: "",
  credits: genericCredits
}

const haunted: TrackModel = {
  id: "010312",
  name: "Haunted",
  description: "Haunted is a song written and recorded by American singer-songwriter Taylor Swift from her third studio album, Speak Now (2010). Swift wrote the song on her own while she was alone in a studio, later saying \"I just put my guitar down and sat there and played it by myself, and it just came to me. So I pretty much got my guitar out and started playing it and singing, 'Come on, come on, don't leave me like this.' It just happened so fast. It was definitely a different way for me to write a song.\"",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/haunted.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/haunted.mp3",
  license: "",
  credits: genericCredits
}

const lastKiss: TrackModel = {
  id: "010313",
  name: "Last Kiss",
  description: "Last Kiss is a song recorded by American singer-songwriter Taylor Swift. The song was written by Swift, who produced the song alongside Nathan Chapman. It was released on October 25, 2010, by Big Machine Records as a promotional single from Swift's third studio album, Speak Now. Swift was inspired to write \"Last Kiss\" after she encountered a former boyfriend of hers at the 2010 CMT Music Awards. A live performance of the song was released on November 10, 2010, as a part of the album Speak Now: World Tour Live CD/DVD by Big Machine Records.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/lastKiss.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/lastKiss.mp3",
  license: "",
  credits: genericCredits
}

const longLive: TrackModel = {
  id: "010314",
  name: "Long Live",
  description: "Long Live is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). The original version of the song was written by Swift, and produced by Nathan Chapman with Swift's assistance, and served as Speak Now's closing number. On the strength of digital downloads following the album's release, the song charted at No. 85 on the U.S. Billboard Hot 100. This release was a limited edition release, as it was only released to radio as a promotional single and therefore not eligible to chart. After the release of Speak Now, the song charted at No. 71 on the Canadian Hot 100.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/longLive.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/longLive.mp3",
  license: "",
  credits: genericCredits
}

const ours: TrackModel = {
  id: "010315",
  name: "Ours",
  description: "Ours is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). Produced by Swift and Nathan Chapman, it was later released as a promotional single on November 8, 2011, by Big Machine Records. The song shares its title with the album's closing track. The song was written about a relationship Swift had with a fellow band member, who she felt was criticized by outsiders for their relationship. The song was released as a promotional single due to its popularity among Swift's fans, although it never received an official radio release.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/ours.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/ours.mp3",
  license: "",
  credits: genericCredits
}

const ifThisWasAMovie: TrackModel = {
  id: "010316",
  name: "If This Was A Movie",
  description: "If This Was a Movie is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). Swift co-produced the song with Nathan Chapman. The song was later released to country radio by Big Machine Records on October 17, 2011, as a promotional single from Speak Now, serving as the second official single from the album in the United States, after \"Sparks Fly\". Musically, the song is a ballad with an acoustic arrangement and lyrics that describe wanting to be in a fairy tale romance.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/ifThisWasAMovie.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/ifThisWasAMovie.mp3",
  license: "",
  credits: genericCredits
}

const superman: TrackModel = {
  id: "010317",
  name: "Superman",
  description: "Superman is a song written and recorded by American singer-songwriter Taylor Swift for her third studio album Speak Now (2010). Swift co-produced the song with Nathan Chapman. The song was later released to country radio by Big Machine Records on October 17, 2011, as a promotional single from Speak Now, serving as the second official single from the album in the United States, after \"Sparks Fly\". Musically, the song is a ballad with an acoustic arrangement and lyrics that describe wanting to be in a fairy tale romance.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: speakNowCondensed,
  genre: ["Country", "Pop", "Folk", "Love"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk", "Love"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/speakNow/lyrics/superman.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/speakNow/tracks/superman.mp3",
  license: "",
  credits: genericCredits
}

const speakNowAlbumTracks: TrackModel[] = [mine, sparksFly, backToDecember, speakNowTrack, dearJohn, mean, theStoryOfUs, neverGrowUp, enchanted, betterThanRevenge, innocent, haunted, lastKiss, longLive, ours, ifThisWasAMovie, superman]
// #endregion

// #region TAYLOR SWIFT - RED
const stateOfGrace: TrackModel = {
  id: "010401",
  name: "State of Grace",
  description: "State of Grace is a song recorded by American singer-songwriter Taylor Swift. It was released on October 16, 2012, by Big Machine Records, as the fourth and final promotional single from Swift's fourth studio album, Red (2012). It was written by Swift and produced by Nathan Chapman, with additional production handled by Swift and Dann Huff. Musically, the song is a departure from Swift's typical country pop, using influences of alternative rock while being compared to U2 in the 1980s.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/stateOfGrace.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/stateOfGrace.mp3",
  license: "",
  credits: genericCredits
}

const redTrack: TrackModel = {
  id: "010402",
  name: "Red",
  description: "Red is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album of the same name (2012). It was released on October 2, 2012, in the United States by Big Machine Records as the second promotional single from Red and eventually served as the album's fifth official single on June 21, 2013. It was one of the tracks released during the four weeks preceding the release of the album. Musically, \"Red\" is a country song, and its lyrics use colors and metaphors to describe an intense and tumultuous relationship.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/red.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/red.mp3",
  license: "",
  credits: genericCredits
}

const treacherous: TrackModel = {
  id: "010403",
  name: "Treacherous",
  description: "Treacherous is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album, Red (2012). It was written by Swift, who also co-produced the track with Dan Wilson, and was released as the fourth single from Red on October 27, 2013, by Big Machine Records. The song was inspired by Swift's on-off relationship with British singer Harry Styles, and lyrically speaks of the dangers of falling in love. Musically, \"Treacherous\" is a soft rock ballad with folk rock influences, and features a dynamic bridge section.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/treacherous.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/treacherous.mp3",
  license: "",
  credits: genericCredits
}

const iKnewYouWereTrouble: TrackModel = {
  id: "010404",
  name: "I Knew You Were Trouble",
  description: "I Knew You Were Trouble is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album, Red (2012). It was released on October 9, 2012, in the United States by Big Machine Records as the third promotional single from the album. Later, \"I Knew You Were Trouble\" was released as the third single from Red on November 27, 2012, in the United States. It was written by Swift, Max Martin and Shellback, with the production handled by the latter two.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/iKnewYouWereTrouble.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/iKnewYouWereTrouble.mp3",
  license: "",
  credits: genericCredits
}

const allTooWell: TrackModel = {
  id: "010405",
  name: "All Too Well",
  description: "All Too Well is a song recorded by American singer-songwriter Taylor Swift. It was written by Swift and Liz Rose, and produced by Nathan Chapman. It was released on October 22, 2012, by Big Machine Records, as the fifth and final single from Swift's fourth studio album, Red (2012). \"All Too Well\" is a country song with a length of five minutes and twenty-seven seconds. Lyrically, the track is an extended metaphor about Swift's romantic relationships, with her recalling every detail of a failed relationship.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/allTooWell.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/allTooWell.mp3",
  license: "",
  credits: genericCredits
}

const _22: TrackModel = {
  id: "010406",
  name: "22",
  description: "22 is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album, Red (2012). It was written by Swift along with Max Martin and Shellback. The song was released as the album's fourth single on March 12, 2013. The lyrics describe the joys of being 22 years old. Musically, the song is an uptempo pop song, and its instrumentation consists of heavy bass, drumming and synthesizers.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/22.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/22.mp3",
  license: "",
  credits: genericCredits
}

const iAlmostDo: TrackModel = {
  id: "010407",
  name: "I Almost Do",
  description: "I Almost Do is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album, Red (2012). It was written by Swift along with Liz Rose and produced by Swift and Nathan Chapman. The song was released as the album's sixth promotional single on October 9, 2012, in the United States. Musically, \"I Almost Do\" is a country song with a length of four minutes and five seconds. Lyrically, the track talks about Swift's struggles with a past relationship.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/iAlmostDo.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/iAlmostDo.mp3",
  license: "",
  credits: genericCredits
}

const weAreNeverEverGettingBackTogether: TrackModel = {
  id: "010408",
  name: "We Are Never Ever Getting Back Together",
  description: "We Are Never Ever Getting Back Together is a song recorded by American singer-songwriter Taylor Swift for her fourth studio album, Red (2012). Swift co-wrote the song with its producers, Max Martin and Shellback. The song was released as the lead single from Red on August 13, 2012, by Big Machine Records. Its lyrics depict Swift's frustrations at an ex-lover who wants to re-kindle their relationship. Rolling Stone magazine named the song the second best song of 2012 while it took the fourth spot in Time's end-of-year poll.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/weAreNeverEverGettingBackTogether.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/weAreNeverEverGettingBackTogether.mp3",
  license: "",
  credits: genericCredits
}

const stayStayStay: TrackModel = {
  id: "010409",
  name: "Stay Stay Stay",
  description: "Stay Stay Stay is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift and produced by Swift and Nathan Chapman. The song was released as the sixth and final single from the album on December 4, 2012, by Big Machine Records, after being sent to country radio on November 18, 2012, as the second promotional single from Red. Musically, the song is a bubblegum pop piece, with influences of country music and pop punk.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Punk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Punk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/stayStayStay.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/stayStayStay.mp3",
  license: "",
  credits: genericCredits
}

const theLastTime: TrackModel = {
  id: "010410",
  name: "The Last Time (feat. Gary Lightbody)",
  description: "The Last Time is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was released as the seventh and final single from the album on November 25, 2013, by Big Machine Records. One of two collaborations on the album, the song features singer Gary Lightbody of Snow Patrol. The artists co-wrote the song with its producer, Jacknife Lee. Musically, \"The Last Time\" is a folk rock song with a duration of four minutes and 59 seconds.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
,
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Folk Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Folk Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/theLastTime.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/theLastTime.mp3",
  license: "",
  credits: genericCredits
}

const holyGround: TrackModel = {
  id: "010411",
  name: "Holy Ground",
  description: "Holy Ground is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/holyGround.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/holyGround.mp3",
  license: "",
  credits: genericCredits
}

const sadBeautifulTragic: TrackModel = {
  id: "010412",
  name: "Sad Beautiful Tragic",
  description: "Sad Beautiful Tragic is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/sadBeautifulTragic.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/sadBeautifulTragic.mp3",
  license: "",
  credits: genericCredits
}

const theLuckyOne: TrackModel = {
  id: "010413",
  name: "The Lucky One",
  description: "The Lucky One is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/theLuckyOne.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/theLuckyOne.mp3",
  license: "",
  credits: genericCredits
}

const everythingHasChanged: TrackModel = {
  id: "010414",
  name: "Everything Has Changed (feat. Ed Sheeran)",
  description: "Everything Has Changed is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed, edSheeranCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/everythingHasChanged.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/everythingHasChanged.mp3",
  license: "",
  credits: genericCredits
}

const starlight: TrackModel = {
  id: "010415",
  name: "Starlight",
  description: "Starlight is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/starlight.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/starlight.mp3",
  license: "",
  credits: genericCredits
}

const beginAgain: TrackModel = {
  id: "010416",
  name: "Begin Again",
  description: "Begin Again is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/beginAgain.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/beginAgain.mp3",
  license: "",
  credits: genericCredits
}

const theMomentIKnew: TrackModel = {
  id: "010417",
  name: "The Moment I Knew",
  description: "The Moment I Knew is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.jpg", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/theMomentIKnew.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/theMomentIKnew.mp3",
  license: "",
  credits: genericCredits
}

const comeBackBeHere: TrackModel = {
  id: "010418",
  name: "Come Back... Be Here",
  description: "Come Back... Be Here is a song recorded by American singer-songwriter Taylor Swift, taken from her fourth studio album, Red (2012). It was written by Swift, and produced by Nathan Chapman with Swift's aid. The song was released on October 22, 2012 by Big Machine Records, as the fourth and final promotional single from Red. Musically, \"Holy Ground\" is a country song, with influences of country pop and pop rock. It received generally positive reception from music critics, who praised its upbeat style and lyrical detail.",
  artwork: [

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Pop Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Pop Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/comeBackBeHere.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/comeBackBeHere.mp3",
  license: "",
  credits: genericCredits
}

const girlAtHome: TrackModel = {
  id: "010419",
  name: "Girl At Home",
  description: "",
  artwork: [

  ],
  artist: [taylorSwiftCondensed],
  album: redCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/red/lyrics/girlAtHome.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/red/tracks/girlAtHome.mp3",
  license: "",
  credits: genericCredits
}

const redAlbumTracks: TrackModel[] = [stateOfGrace, redTrack, treacherous, iKnewYouWereTrouble, allTooWell, _22, iAlmostDo, weAreNeverEverGettingBackTogether, stayStayStay, theLastTime, holyGround, sadBeautifulTragic, theLuckyOne, everythingHasChanged, starlight, beginAgain, theMomentIKnew, comeBackBeHere, girlAtHome]
// #endregion

// #region TAYLOR SWIFT - 1989
const welcomeToNewYork: TrackModel = {
  id: "010501",
  name: "Welcome To New York",
  description: "Welcome to New York is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). It was written by Swift, and its producers Max Martin and Shellback. The song was released to digital retailers as the album's promotional single on October 20, 2014, by Big Machine Records. Musically, \"Welcome to New York\" is a synth-pop song that relies heavily on synthesizers and programmed beats. Lyrically, the song is about Swift's move to New York City.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/welcomeToNewYork.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/welcomeToNewYork.mp3",
  license: "",
  credits: genericCredits
}

const blankSpace: TrackModel = {
  id: "010502",
  name: "Blank Space",
  description: "Blank Space is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). It was written by Swift, Max Martin and Shellback. The song was released to the radio by Republic Records on November 10, 2014 as the album's second single, after \"Shake It Off\" and is the second track on the album. Musically, \"Blank Space\" is an electropop song with lyrics that satirize the media's perception of Swift and her relationships.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/blankSpace.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/blankSpace.mp3",
  license: "",
  credits: genericCredits
}

const style: TrackModel = {
  id: "010503",
  name: "Style",
  description: "Style is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). It was written by Swift and its producers Max Martin, Shellback, and Ali Payami. Republic Records released it to radio stations as the album's third single on February 9, 2015. Musically, \"Style\" incorporates disco, funk-pop, pop rock and synth-pop. The lyrics are ambiguous; contemporary publications interpreted the song as being about beauty standards and reflections on past romantic relationships.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/style.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/style.mp3",
  license: "",
  credits: genericCredits
}

const outOfTheWoods: TrackModel = {
  id: "010504",
  name: "Out Of The Woods",
  description: "Out of the Woods is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). The song was written by Swift and its producers Max Martin and Shellback. Having co-written \"All Too Well\" and \"I Almost Do\" for her fourth studio album Red (2012), Swift decided to work with Martin and Shellback for her next album. Musically, \"Out of the Woods\" is a synth-pop song with a pop rock chorus.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/outOfTheWoods.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/outOfTheWoods.mp3",
  license: "",
  credits: genericCredits
}

const allYouHadToDoWasStay: TrackModel = {
  id: "010505",
  name: "All You Had To Do Was Stay",
  description: "All You Had to Do Was Stay is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). Swift co-wrote the song with its producers Max Martin and Shellback. The song was released to contemporary hit radio by Republic Records on March 10, 2015, as the album's fourth single. Musically, \"All You Had to Do Was Stay\" is a synth-pop song that features a departure from Swift's previous country pop musical style.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/allYouHadToDoWasStay.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/allYouHadToDoWasStay.mp3",
  license: "",
  credits: genericCredits
}

const shakeItOff: TrackModel = {
  id: "010506",
  name: "Shake It Off",
  description: "Shake It Off is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). Swift co-wrote the song with its producers Max Martin and Shellback. The song was released to contemporary hit radio by Republic Records on March 10, 2015, as the album's fourth single. Musically, \"All You Had to Do Was Stay\" is a synth-pop song that features a departure from Swift's previous country pop musical style.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/shakeItOff.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/shakeItOff.mp3",
  license: "",
  credits: genericCredits
}

const iWishYouWould: TrackModel = {
  id: "010507",
  name: "I Wish You Would",
  description: "I Wish You Would is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). Swift co-wrote the song with its producers Max Martin and Shellback. The song was released to contemporary hit radio by Republic Records on March 10, 2015, as the album's fourth single. Musically, \"All You Had to Do Was Stay\" is a synth-pop song that features a departure from Swift's previous country pop musical style.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/iWishYouWould.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/iWishYouWould.mp3",
  license: "",
  credits: genericCredits
}

const badBlood: TrackModel = {
  id: "010508",
  name: "Bad Blood",
  description: "Bad Blood is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). Swift co-wrote the song with its producers Max Martin and Shellback. The song was released to contemporary hit radio by Republic Records on March 10, 2015, as the album's fourth single. Musically, \"All You Had to Do Was Stay\" is a synth-pop song that features a departure from Swift's previous country pop musical style.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/badBlood.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/badBlood.mp3",
  license: "",
  credits: genericCredits
}

const wildestDreams: TrackModel = {
  id: "010509",
  name: "Wildest Dreams",
  description: "Wildest Dreams is a song recorded by American singer-songwriter Taylor Swift for her fifth studio album 1989 (2014). Swift co-wrote the song with its producers Max Martin and Shellback. The song was released to contemporary hit radio by Republic Records on March 10, 2015, as the album's fourth single. Musically, \"All You Had to Do Was Stay\" is a synth-pop song that features a departure from Swift's previous country pop musical style.",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/wildestDreams.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/wildestDreams.mp3",
  license: "",
  credits: genericCredits
}

const howYouGetTheGirl: TrackModel = {
  id: "010510",
  name: "How You Get The Girl",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/wildestDreams.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/howYouGetTheGirl.mp3",
  license: "",
  credits: genericCredits
}

const thisLove: TrackModel = {
  id: "010511",
  name: "This Love",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/thisLove.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/thisLove.mp3",
  license: "",
  credits: genericCredits
}

const iKnowPlaces: TrackModel = {
  id: "010512",
  name: "I Know Places",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/iKnowPlaces.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/iKnowPlaces.mp3",
  license: "",
  credits: genericCredits
}

const cleanTrack: TrackModel = {
  id: "010513",
  name: "Clean",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/clean.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/clean.mp3",
  license: "",
  credits: genericCredits
}

const wonderland: TrackModel = {
  id: "010514",
  name: "Wonderland",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/wonderland.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/wonderland.mp3",
  license: "",
  credits: genericCredits
}

const youAreInLove: TrackModel = {
  id: "010515",
  name: "You Are In Love",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/youAreInLove.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/youAreInLove.mp3",
  license: "",
  credits: genericCredits
}

const newRomantics: TrackModel = {
  id: "010516",
  name: "New Romantics",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Country", "Pop", "Synthpop", "Soft Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "Soft Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/newRomantics.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/tracks/newRomantics.mp3",
  license: "",
  credits: genericCredits
}

const _1989Tracks: TrackModel[] = [welcomeToNewYork, blankSpace, style, outOfTheWoods, allYouHadToDoWasStay, shakeItOff, iWishYouWould, badBlood, wildestDreams, howYouGetTheGirl, thisLove, iKnowPlaces, cleanTrack, wonderland, youAreInLove, newRomantics]
// #endregion

// #region TAYLOR SWIFT - REPUTATION
const readyForIt: TrackModel = {
  id: "010601",
  name: "...Ready For It?",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/readyForIt.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/readyForIt.mp3",
  license: "",
  credits: genericCredits
}

const endGame: TrackModel = {
  id: "010602",
  name: "End Game (feat. Ed Sheeran & Future)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed, edSheeranCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/endGame.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/endGame.mp3",
  license: "",
  credits: genericCredits
}

const iDidSomethingBad: TrackModel = {
  id: "010603",
  name: "I Did Something Bad",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/iDidSomethingBad.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/iDidSomethingBad.mp3",
  license: "",
  credits: genericCredits
}

const dontBlameMe: TrackModel = {
  id: "010604",
  name: "Don't Blame Me",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/dontBlameMe.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/dontBlameMe.mp3",
  license: "",
  credits: genericCredits
}

const delicate: TrackModel = {
  id: "010605",
  name: "Delicate",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/delicate.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/delicate.mp3",
  license: "",
  credits: genericCredits
}

const lookWhatYouMadeMeDo: TrackModel = {
  id: "010606",
  name: "Look What You Made Me Do",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/lookWhatYouMadeMeDo.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/lookWhatYouMadeMeDo.mp3",
  license: "",
  credits: genericCredits
}

const soItGoes: TrackModel = {
  id: "010607",
  name: "So It Goes...",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/soItGoes.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/soItGoes.mp3",
  license: "",
  credits: genericCredits
}

const gorgeous: TrackModel = {
  id: "010608",
  name: "Gorgeous",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/gorgeous.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/gorgeous.mp3",
  license: "",
  credits: genericCredits
}

const getawayCar: TrackModel = {
  id: "010609",
  name: "Getaway Car",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/getawayCar.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/getawayCar.mp3",
  license: "",
  credits: genericCredits
}

const kingOfMyHeart: TrackModel = {
  id: "010610",
  name: "King Of My Heart",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/kingOfMyHeart.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/kingOfMyHeart.mp3",
  license: "",
  credits: genericCredits
}

const dancingWithOurHandsTied: TrackModel = {
  id: "010611",
  name: "Dancing With Our Hands Tied",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/dancingWithOurHandsTied.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/dancingWithOurHandsTied.mp3",
  license: "",
  credits: genericCredits
}

const dress: TrackModel = {
  id: "010612",
  name: "Dress",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/dress.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/dress.mp3",
  license: "",
  credits: genericCredits
}

const thisIsWhyWeCantHaveNiceThings: TrackModel = {
  id: "010613",
  name: "This Is Why We Can't Have Nice Things",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/thisIsWhyWeCantHaveNiceThings.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/thisIsWhyWeCantHaveNiceThings.mp3",
  license: "",
  credits: genericCredits
}

const callItWhatYouWant: TrackModel = {
  id: "010614",
  name: "Call It What You Want",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop", "Electropop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Electropop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/callItWhatYouWant.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/callItWhatYouWant.mp3",
  license: "",
  credits: genericCredits
}

const newYearsDay: TrackModel = {
  id: "010615",
  name: "New Year's Day",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/newYearsDay.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/tracks/newYearsDay.mp3",
  license: "",
  credits: genericCredits
}

const reputationTracks: TrackModel[] = [readyForIt, endGame, iDidSomethingBad, dontBlameMe, delicate, lookWhatYouMadeMeDo, soItGoes, gorgeous, getawayCar, kingOfMyHeart, dancingWithOurHandsTied, dress, thisIsWhyWeCantHaveNiceThings, callItWhatYouWant, newYearsDay]
// #endregion

// #region TAYLOR SWIFT - LOVER
const iForgotThatYouExisted: TrackModel = {
  id: "010701",
  name: "I Forgot That You Existed",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/iForgotThatYouExisted.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/iForgotThatYouExisted.mp3",
  license: "",
  credits: genericCredits
}

const cruelSummer: TrackModel = {
  id: "010702",
  name: "Cruel Summer",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/cruelSummer.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/cruelSummer.mp3",
  license: "",
  credits: genericCredits
}

const loverTrack: TrackModel = {
  id: "010703",
  name: "Lover",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/lover.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/lover.mp3",
  license: "",
  credits: genericCredits
}

const theMan: TrackModel = {
  id: "010704",
  name: "The Man",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/theMan.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/theMan.mp3",
  license: "",
  credits: genericCredits
}

const theArcher: TrackModel = {
  id: "010705",
  name: "The Archer",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/theArcher.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/theArcher.mp3",
  license: "",
  credits: genericCredits
}

const iThinkHeKnows: TrackModel = {
  id: "010706",
  name: "I Think He Knows",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/iThinkHeKnows.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/iThinkHeKnows.mp3",
  license: "",
  credits: genericCredits
}

const missAmericanaAndTheHeartbreakPrince: TrackModel = {
  id: "010707",
  name: "Miss Americana & The Heartbreak Prince",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/missAmericanaAndTheHeartbreakPrince.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/missAmericanaAndTheHeartbreakPrince.mp3",
  license: "",
  credits: genericCredits
}

const paperRings: TrackModel = {
  id: "010708",
  name: "Paper Rings",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/paperRings.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/paperRings.mp3",
  license: "",
  credits: genericCredits
}

const corneliaStreet: TrackModel = {
  id: "010709",
  name: "Cornelia Street",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/corneliaStreet.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/corneliaStreet.mp3",
  license: "",
  credits: genericCredits
}

const deathByAThousandCuts: TrackModel = {
  id: "010710",
  name: "Death By A Thousand Cuts",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/deathByAThousandCuts.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/deathByAThousandCuts.mp3",
  license: "",
  credits: genericCredits
}

const londonBoy: TrackModel = {
  id: "010711",
  name: "London Boy",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "Synthpop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Synthpop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/londonBoy.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/londonBoy.mp3",
  license: "",
  credits: genericCredits
}

const soonYoullGetBetter: TrackModel = {
  id: "010712",
  name: "Soon You'll Get Better (feat. Dixie Chicks)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/soonYoullGetBetter.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/soonYoullGetBetter.mp3",
  license: "",
  credits: genericCredits
}

const falseGod: TrackModel = {
  id: "010713",
  name: "False God",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault }
  ], 
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/falseGod.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/falseGod.mp3",
  license: "",
  credits: genericCredits
}

const youNeedToCalmDown: TrackModel = {
  id: "010714",
  name: "You Need To Calm Down",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/youNeedToCalmDown.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/youNeedToCalmDown.mp3",
  license: "",
  credits: genericCredits
}

const afterglow: TrackModel = {
  id: "010715",
  name: "Afterglow",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/afterglow.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/afterglow.mp3",
  license: "",
  credits: genericCredits
}

const me: TrackModel = {
  id: "010716",
  name: "ME! (feat. Brendon Urie)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/me.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/me.mp3",
  license: "",
  credits: genericCredits
}

const itsNiceToHaveAFriend: TrackModel = {
  id: "010717",
  name: "It's Nice To Have A Friend",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/itsNiceToHaveAFriend.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/itsNiceToHaveAFriend.mp3",
  license: "",
  credits: genericCredits
}

const daylight: TrackModel = {
  id: "010718",
  name: "Daylight",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: loverCondensed,
  genre: ["Country", "Pop", "R&B"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "R&B"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/lover/lyrics/daylight.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/lover/tracks/daylight.mp3",
  license: "",
  credits: genericCredits
}

const loverTracks: TrackModel[] = [iForgotThatYouExisted, cruelSummer, loverTrack, theMan, theArcher, iThinkHeKnows, missAmericanaAndTheHeartbreakPrince, paperRings, corneliaStreet, deathByAThousandCuts, londonBoy, soonYoullGetBetter, falseGod, youNeedToCalmDown, afterglow, me, itsNiceToHaveAFriend, daylight]

// #endregion

// #region TAYLOR SWIFT - FOLKLORE
const the1: TrackModel = {
  id: "010801",
  name: "the 1",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/the1.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/the1.mp3",
  license: "",
  credits: genericCredits
}

const cardigan: TrackModel = {
  id: "010802",
  name: "cardigan",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/cardigan.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/cardigan.mp3",
  license: "",
  credits: genericCredits
}

const theLastGreatAmericanDynasty: TrackModel = {
  id: "010803",
  name: "the last great american dynasty",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/theLastGreatAmericanDynasty.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/theLastGreatAmericanDynasty.mp3",
  license: "",
  credits: genericCredits
}

const exile: TrackModel = {
  id: "010804",
  name: "exile (feat. Bon Iver)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/exile.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/exile.mp3",
  license: "",
  credits: genericCredits
}

const myTearsRicochet: TrackModel = {
  id: "010805",
  name: "my tears ricochet",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/myTearsRicochet.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/myTearsRicochet.mp3",
  license: "",
  credits: genericCredits
}

const mirrorball: TrackModel = {
  id: "010806",
  name: "mirrorball",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/mirrorball.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/mirrorball.mp3",
  license: "",
  credits: genericCredits
}

const seven: TrackModel = {
  id: "010807",
  name: "seven",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/seven.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/seven.mp3",
  license: "",
  credits: genericCredits
}

const august: TrackModel = {
  id: "010808",
  name: "august",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/august.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/august.mp3",
  license: "",
  credits: genericCredits
}

const thisIsMeTrying: TrackModel = {
  id: "010809",
  name: "this is me trying",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/thisIsMeTrying.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/thisIsMeTrying.mp3",
  license: "",
  credits: genericCredits
}

const illicitAffairs: TrackModel = {
  id: "010810",
  name: "illicit affairs",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/illicitAffairs.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/illicitAffairs.mp3",
  license: "",
  credits: genericCredits
}

const invisibleString: TrackModel = {
  id: "010811",
  name: "invisible string",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Synthpop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Synthpop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/invisibleString.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/invisibleString.mp3",
  license: "",
  credits: genericCredits
}

const madWoman: TrackModel = {
  id: "010812",
  name: "Mad Women",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/madWoman.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/madWoman.mp3",
  license: "",
  credits: genericCredits
}

const epiphany: TrackModel = {
  id: "010813",
  name: "epiphany",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/epiphany.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/epiphany.mp3",
  license: "",
  credits: genericCredits
}

const betty: TrackModel = {
  id: "010814",
  name: "betty",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/betty.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/betty.mp3",
  license: "",
  credits: genericCredits
}

const peace: TrackModel = {
  id: "010815",
  name: "peace",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/peace.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/peace.mp3",
  license: "",
  credits: genericCredits
}

const hoax: TrackModel = {
  id: "010816",
  name: "hoax",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/hoax.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/hoax.mp3",
  license: "",
  credits: genericCredits
}

const theLakes: TrackModel = {
  id: "010817",
  name: "the lakes",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: folkloreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/folklore/lyrics/theLakes.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/folklore/tracks/theLakes.mp3",
  license: "",
  credits: genericCredits
}

const folkloreTracks: TrackModel[] = [the1, cardigan, theLastGreatAmericanDynasty, exile, myTearsRicochet, mirrorball, seven, august, thisIsMeTrying, illicitAffairs, invisibleString, madWoman, epiphany, betty, peace, hoax, theLakes]
// #endregion

// #region TAYLOR SWIFT - EVERMORE
const willow: TrackModel = {
  id: "010901",
  name: "willow",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/willow.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/willow.mp3",
  license: "",
  credits: genericCredits
}

const champagneProblems: TrackModel = {
  id: "010902",
  name: "champagne problems",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/champagneProblems.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/champagneProblems.mp3",
  license: "",
  credits: genericCredits
}

const goldRush: TrackModel = {
  id: "010903",
  name: "gold rush",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/goldRush.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/goldRush.mp3",
  license: "",
  credits: genericCredits
}

const tisTheDamnSeason: TrackModel = {
  id: "010904",
  name: "'tis the damn season",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/tisTheDamnSeason.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/tisTheDamnSeason.mp3",
  license: "",
  credits: genericCredits
}

const tolerateIt: TrackModel = {
  id: "010905",
  name: "tolerate it",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Ambient"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Ambient"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/tolerateIt.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/tolerateIt.mp3",
  license: "",
  credits: genericCredits
}

const noBodyNoCrime: TrackModel = {
  id: "010906",
  name: "no body, no crime (feat. HAIM)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/noBodyNoCrime.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/noBodyNoCrime.mp3",
  license: "",
  credits: genericCredits
}


const happiness: TrackModel = {
  id: "010907",
  name: "happiness",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/happiness.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/happiness.mp3",
  license: "",
  credits: genericCredits
}

const dorothea: TrackModel = {
  id: "010908",
  name: "dorothea",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/dorothea.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/dorothea.mp3",
  license: "",
  credits: genericCredits
}

const coneyIsland: TrackModel = {
  id: "010909",
  name: "coney island (feat. The National)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/coneyIsland.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/coneyIsland.mp3",
  license: "",
  credits: genericCredits
}

const ivy: TrackModel = {
  id: "010910",
  name: "ivy",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/ivy.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/ivy.mp3",
  license: "",
  credits: genericCredits
}

const cowboyLikeMe: TrackModel = {
  id: "010911",
  name: "cowboy like me (feat. Marcus Mumford)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/cowboyLikeMe.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/cowboyLikeMe.mp3",
  license: "",
  credits: genericCredits
}

const longStoryShort: TrackModel = {
  id: "010912",
  name: "long story short",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/longStoryShort.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/longStoryShort.mp3",
  license: "",
  credits: genericCredits
}

const marjorie: TrackModel = {
  id: "010913",
  name: "marjorie",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/marjorie.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/marjorie.mp3",
  license: "",
  credits: genericCredits
}

const closure: TrackModel = {
  id: "010914",
  name: "closure",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/closure.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/closure.mp3",
  license: "",
  credits: genericCredits
}

const evermoreTrack: TrackModel = {
  id: "010915",
  name: "evermore (feat. Bon Iver)",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop", "Indie Folk", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/evermore.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/evermore.mp3",
  license: "",
  credits: genericCredits
}

const rightWhereYouLeftMe: TrackModel = {
  id: "010916",
  name: "right where you left me",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/rightWhereYouLeftMe.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/rightWhereYouLeftMe.mp3",
  license: "",
  credits: genericCredits
}

const itsTimeToGo: TrackModel = {
  id: "010917",
  name: "it's time to go",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated },
  ],
  artist: [taylorSwiftCondensed],
  album: evermoreCondensed,
  genre: ["Country", "Pop"],
  duration: 231,
  stats: genericStats,
  tags: ["Country", "Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/evermore/lyrics/itsTimeToGo.lrc",
  path: baseURL + "/samples/artists/taylorSwift/albums/evermore/tracks/itsTimeToGo.mp3",
  license: "",
  credits: genericCredits
}

const evermoreTracks: TrackModel[] = [willow, champagneProblems, goldRush, tisTheDamnSeason, tolerateIt, noBodyNoCrime, happiness, dorothea, coneyIsland, ivy, cowboyLikeMe, longStoryShort, marjorie, closure, evermoreTrack, rightWhereYouLeftMe, itsTimeToGo]
// #endregion

// #region IMAGINE DRAGONS - EVOLVE
const nextToMe: TrackModel =  {
  id: "020101",
  name: "Next To Me",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/nextToMe.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/nextToMe.mp3",
  license: "",
  credits: genericCredits
}

const iDontKnowWhy: TrackModel =  {
  id: "020102",
  name: "I Don't Know Why",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/iDontKnowWhy.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/iDontKnowWhy.mp3",
  license: "",
  credits: genericCredits
}

const whateverItTakes: TrackModel =  {
  id: "020103",
  name: "Whatever It Takes",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/whateverItTakes.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/whateverItTakes.mp3",
  license: "",
  credits: genericCredits
}

const believer: TrackModel =  {
  id: "020104",
  name: "Believer",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/believer.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/believer.mp3",
  license: "",
  credits: genericCredits
}

const walkingTheWire: TrackModel =  {
  id: "020105",
  name: "Walking The Wire",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/walkingTheWire.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/walkingTheWire.mp3",
  license: "",
  credits: genericCredits
}

const riseUp: TrackModel =  {
  id: "020106",
  name: "Rise Up",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/riseUp.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/riseUp.mp3",
  license: "",
  credits: genericCredits
}

const illMakeItUpToYou: TrackModel =  {
  id: "020107",
  name: "I'll Make It Up To You",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    ,
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/illMakeItUpToYou.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/illMakeItUpToYou.mp3",
  license: "",
  credits: genericCredits
}

const yesterday: TrackModel =  {
  id: "020108",
  name: "Yesterday",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
    
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/yesterday.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/yesterday.mp3",
  license: "",
  credits: genericCredits
}

const mouthOfTheRiver: TrackModel =  {
  id: "020109",
  name: "Mouth Of The River",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/mouthOfTheRiver.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/mouthOfTheRiver.mp3",
  license: "",
  credits: genericCredits
}

const thunder: TrackModel =  {
  id: "020110",
  name: "Thunder",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/thunder.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/thunder.mp3",
  license: "",
  credits: genericCredits
}

const startOver: TrackModel =  {
  id: "020111",
  name: "Start Over",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/startOver.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/startOver.mp3",
  license: "",
  credits: genericCredits
}

const dancingInTheDark: TrackModel =  {
  id: "020112",
  name: "Dancing In The Dark",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault }
  ],
  artist: [imagineDragonsCondensed],
  album: evolveCondensed,
  genre: ["Pop", "Rock", "Alternative Rock"],
  duration: 231,
  stats: genericStats,
  tags: ["Pop", "Rock", "Alternative Rock"],
  lyrics: baseURL + "/samples/artists/imagineDragons/albums/evolve/lyrics/dancingInTheDark.lrc",
  path: baseURL + "/samples/artists/imagineDragons/albums/evolve/tracks/dancingInTheDark.mp3",
  license: "",
  credits: genericCredits
}

const evolveTracks: TrackModel[] = [nextToMe, iDontKnowWhy, whateverItTakes, believer, walkingTheWire, riseUp, illMakeItUpToYou, yesterday, mouthOfTheRiver, thunder, startOver, dancingInTheDark]
// #endregion

// #endregion

// #region ALTERNATIVE ALBUMS
const fearlessDLXCondensed: AlbumCondensedModel = {
  id: "010201",
  name: "Fearless (Platinum Edition)",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearlessDLX/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearlessDLX/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: "Taylor Swift",
  artistId: "01",
  type: AlbumType.Album,
  description: "Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. Swift wrote most of the songs during the time when she was promoting her self-titled debut studio album performing as an opening act for other country artists. Of the 13 tracks on the standard edition, eight were solely written by Swift, and the remaining five were co-written with writers Liz Rose, Hillary Lindsey, Colbie Caillat, and John Rich. Swift also made her debut as a record producer, co-producing all songs on the album with Nathan Chapman.",
  year: 2008,
}

const _1989DLXCondensed: AlbumCondensedModel = {
  id: "010202",
  name: "1989 (Deluxe Edition)",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989DLX/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989DLX/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  artistName: "Taylor Swift",
  artistId: "01",
  type: AlbumType.Album,
  description: "1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014, through Big Machine Records. Following the release of her fourth studio album Red (2012), which critics considered Swift's emergence from her trademark country styles to straightforward pop, Swift sought to completely move away from country on her next record. Recording sessions took place from 2013 to 2014 at several studios, including Swift's studio at her homes in Los Angeles and Rhode Island. Additional production was provided by Max Martin, Shellback, Ryan Tedder, and Jack Antonoff.",
  year: 2014,
}


// #endregion

// #region DETAILED ALBUMS
const debutAlbum: AlbumModel = {
  id: "0101",
  name: "Taylor Swift",
  artist: [taylorSwiftCondensed],
  description: "Taylor Swift is the debut studio album by American singer-songwriter Taylor Swift, released on October 24, 2006, by Big Machine Records. Swift was 16 years old at the time of the album's release and wrote its songs during her freshman year of high school. Swift has writing credits on all of the album's songs, including those co-written with Liz Rose. Swift experimented with several producers, ultimately choosing Nathan Chapman, who had produced her demo album. Musically, the album is country music styled, and lyrically it speaks of romantic relationships, a couple of which Swift wrote from observing relationships before being in one. Lyrics also touch on Swift's personal struggles in high school.",
  genre: ["Country"],
  year: 2006,
  releaseDate: new Date("October 24, 2006"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/taylorSwift/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: debutAlbumCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const fearless: AlbumModel = {
  id: "0102",
  name: "Fearless",
  artist: [taylorSwiftCondensed],
  description: "Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. Swift wrote most of the songs during the time when she was promoting her self-titled debut studio album performing as an opening act for other country artists. Of the 13 tracks on the standard edition, eight were solely written by Swift, and the remaining five were co-written with writers Liz Rose, Hillary Lindsey, Colbie Caillat, and John Rich. Swift also made her debut as a record producer, co-producing all songs on the album with Nathan Chapman.",
  genre: ["Country"],
  year: 2008,
  releaseDate: new Date("November 11, 2008"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/02.gif", type: ArtworkType.isAnimated },
    { url: baseURL + "/samples/artists/taylorSwift/albums/fearless/artwork/03.jpg", type: ArtworkType.isAlternate },
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: fearlessCondensedTracks,
  musicVideos: [],
  otherVersions: [fearlessDLXCondensed],
  path: "",
  license: "" 
}

const speakNow: AlbumModel = {
  id: "0103",
  name: "Speak Now",
  artist: [taylorSwiftCondensed],
  description: "Speak Now is the third studio album by American singer-songwriter Taylor Swift. It was released on October 25, 2010, by Big Machine Records. Production for the album took place during 2009 to 2010 at several recording studios, and was handled by Swift and Nathan Chapman. Written entirely by Swift as the follow-up to Fearless, Speak Now expands on the country pop style of her previous work, and features lyrical themes concerning love, romance and heartbreak.",
  genre: ["Country"],
  year: 2010,
  releaseDate: new Date("October 25, 2010"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/speakNow/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: speakNowCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const red: AlbumModel = {
  id: "0104",
  name: "Red",
  artist: [taylorSwiftCondensed],
  description: "Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records. Inspired by past romantic relationships evoking intense, tumultuous 'red' emotions that Swift was experiencing during conception of the album, Red touches on Swift's recurring themes of romance and heartbreak, but represents a more mature perspective, while exploring other themes such as fame and the pressure of being in the limelight.",
  genre: ["Country"],
  year: 2012,
  releaseDate: new Date("October 22, 2012"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/red/artwork/01.png", type: ArtworkType.isDefault },
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: redCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const _1989: AlbumModel = {
  id: "0105",
  name: "1989",
  artist: [taylorSwiftCondensed],
  description: "1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014, through Big Machine Records. Following the release of her fourth studio album Red (2012), which critics considered Swift's emergence from her trademark country styles to straightforward pop, Swift sought to completely move away from country on her next record. Recording sessions took place from 2013 to 2014 at several studios, including Swift's studio at her home in Nashville, Tennessee, and MXM Studios in Stockholm, Sweden.",
  genre: ["Pop"],
  year: 2014,
  releaseDate: new Date("October 27, 2014"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: _1989CondensedTracks,
  musicVideos: [],
  otherVersions: [_1989DLXCondensed],
  path: "",
  license: "" 
}

const reputation: AlbumModel = {
  id: "0106",
  name: "reputation",
  artist: [taylorSwiftCondensed],
  description: "Reputation is the sixth studio album by American singer-songwriter Taylor Swift. It was released on November 10, 2017, through Big Machine Records. The record was primarily produced by Jack Antonoff, Max Martin, Shellback and Swift herself, who also serves as the executive producer. Featured artists included on the album are English singer-songwriter Ed Sheeran and American rapper Future.",
  genre: ["Pop"],
  year: 2017,
  releaseDate: new Date("November 10, 2017"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: reputationCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const lover: AlbumModel = {
  id: "0107",
  name: "Lover",
  artist: [taylorSwiftCondensed],
  description: "Lover is the seventh studio album by American singer-songwriter Taylor Swift. It was released on August 23, 2019, through Republic Records. As the executive producer, Swift enlisted producers Jack Antonoff, Louis Bell, Frank Dukes, and Joel Little for the project. Lover is primarily a pop, synth-pop, electropop, and pop rock record with a retro style, encompassing diverse genres such as country, funk, dream pop, folk, rock and roll, R&B, bubblegum pop, pop punk and indie pop.",
  genre: ["Pop"],
  year: 2019,
  releaseDate: new Date("August 23, 2019"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/lover/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: loverCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const folklore: AlbumModel = {
  id: "0108",
  name: "folklore",
  artist: [taylorSwiftCondensed],
  description: "Folklore is the eighth studio album by American singer-songwriter Taylor Swift. It was a surprise album, released through Republic Records on July 24, 2020, eleven months after its predecessor, Lover (2019). As an indie folk, alternative rock, electro-folk, and chamber pop record, Folklore marks a departure from the upbeat pop sound of Swift's previous four studio albums. Most of the album was written and recorded in isolation during the COVID-19 pandemic, with production from Aaron Dessner, Jack Antonoff, and Swift herself.",
  genre: ["Pop"],
  year: 2020,
  releaseDate: new Date("July 24, 2020"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/folklore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: folkloreCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const evermore: AlbumModel = {
  id: "0109",
  name: "evermore",
  artist: [taylorSwiftCondensed],
  description: "Evermore is the ninth studio album by American singer-songwriter Taylor Swift. It was released on December 11, 2020, through Republic Records, less than five months after Swift's eighth studio album, Folklore (2020). Evermore is a sister record to Folklore, both created in collaboration with Aaron Dessner, Jack Antonoff, and Justin Vernon. Swift described the album as Folklore's 'sister record', further stating that it was 'folklorian woods witch version'.",
  genre: ["Pop"],
  year: 2020,
  releaseDate: new Date("December 11, 2020"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/01.jpg", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/evermore/artwork/02.gif", type: ArtworkType.isAnimated }
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: evermoreCondensedTracks,
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}

const evolve: AlbumModel = {
  id: "0201",
  name: "Evolve",
  artist: [imagineDragonsCondensed],
  description: "Evolve is the third studio album by American pop rock band Imagine Dragons, released on June 23, 2017 by Kidinakorner and Interscope Records. After the release of their previous album Smoke + Mirrors (2015) and its respective world tour, a self-imposed hiatus for 2016 and cryptic messages from the band through their social media gained anticipation for their third album; it was finally announced on May 9, 2017, along with the initiation of its pre-order. In comparison to Night Visions and Smoke + Mirrors, frontman Dan Reynolds explained that the album will be an 'evolution for Imagine Dragons'.",
  genre: ["Pop"],
  year: 2017,
  releaseDate: new Date("June 23, 2017"),
  runtime: 231,
  artwork: [
    { url: baseURL + "/samples/artists/imagineDragons/albums/evolve/artwork/01.jpg", type: ArtworkType.isDefault },
  ],
  isExplicit: false,
  type: AlbumType.Album,
  tracks: [nextToMeCondensed, iDontKnowWhyCondensed, whateverItTakesCondensed, believerCondensed, walkingTheWireCondensed, riseUpCondensed, illmakeituptoyouCondensed, yesterdayCondensed, mouthOfTheRiverCondensed, thunderCondensed, startOverCondensed, dancingIntheDarkCondensed],
  musicVideos: [],
  otherVersions: [],
  path: "",
  license: "" 
}
// #endregion

// #region MUSIC VIDEOS
// #region 1989 MUSIC VIDEOS
const blankSpaceMV: MusicVideoModel = {
  id: "010501",
  name: "Blank Space",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/blankSpace.lrc",
  duration: 231,
  stats: genericStats,
  relatedTrackId: "010501",
  isLyricVideo: false,
  tags: ["Pop"],
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/musicVideos/blankSpace.mp4",
  license: "",
  credits: genericCredits
}

const blankSpaceMVCondensed: MusicVideoCondensedModel = {
  id: "010501",
  name: "Blank Space",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  tags: ["Pop"],
  duration: 231,
  relatedTrackId: "010501",
  isLyricVideo: false,
  artistName: "Taylor Swift",
  artistId: "01",
  albumName: "1989",
  albumId: "0105",
}

const styleMV: MusicVideoModel = {
  id: "010502",
  name: "Style",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/style.lrc",
  duration: 231,
  stats: genericStats,
  relatedTrackId: "010502",
  isLyricVideo: false,
  tags: ["Pop"],
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/musicVideos/style.mp4",
  license: "",
  credits: genericCredits
}

const styleMVCondensed: MusicVideoCondensedModel = {
  id: "010502",
  name: "Style",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  tags: ["Pop"],
  duration: 231,
  relatedTrackId: "010502",
  isLyricVideo: false,
  artistName: "Taylor Swift",
  artistId: "01",
  albumName: "1989",
  albumId: "0105",
}

const outOfTheWoodsMV: MusicVideoModel = {
  id: "010503",
  name: "Out Of The Woods",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  artist: [taylorSwiftCondensed],
  album: _1989Condensed,
  genre: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/1989/lyrics/outOfTheWoods.lrc",
  duration: 231,
  stats: genericStats,
  relatedTrackId: "010503",
  isLyricVideo: false,
  tags: ["Pop"],
  path: baseURL + "/samples/artists/taylorSwift/albums/1989/musicVideos/outOfTheWoods.mp4",
  license: "",
  credits: genericCredits
}

const outOfTheWoodsMVCondensed: MusicVideoCondensedModel = {
  id: "010503",
  name: "Out Of The Woods",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/1989/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  tags: ["Pop"],
  duration: 231,
  relatedTrackId: "010503",
  isLyricVideo: false,
  artistName: "Taylor Swift",
  artistId: "01",
  albumName: "1989",
  albumId: "0105",
}
// #endregion
// #region REPUTATION MUSIC VIDEOS
const lookWhatYouMadeMeDoLyricMV: MusicVideoModel = {
  id: "010601",
  name: "Look What You Made Me Do",
  description: "",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  artist: [taylorSwiftCondensed],
  album: reputationCondensed,
  genre: ["Pop"],
  lyrics: baseURL + "/samples/artists/taylorSwift/albums/reputation/lyrics/lookWhatYouMadeMeDo.lrc",
  duration: 231,
  stats: genericStats,
  relatedTrackId: "010601",
  isLyricVideo: true,
  tags: ["Pop"],
  path: baseURL + "/samples/artists/taylorSwift/albums/reputation/musicVideos/lookWhatYouMadeMeDo.mp4",
  license: "",
  credits: genericCredits
}

const lookWhatYouMadeMeDoLyricMVCondensed: MusicVideoCondensedModel = {
  id: "010601",
  name: "Look What You Made Me Do",
  artwork: [
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/02.jpg", type: ArtworkType.isThumbnail },
    { url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.gif", type: ArtworkType.isAnimatedThumbnail }
  ],
  tags: ["Pop"],
  duration: 231,
  relatedTrackId: "010601",
  isLyricVideo: true,
  artistName: "Taylor Swift",
  artistId: "01",
  albumName: "reputation",
  albumId: "0106",
}
// #endregion

// #endregion 

// #region USERS
// #region CONDENSED USERS
const polyfonixCondensed: UserCondensedModel = {
  id: "00",
  name: "PolyFonix",
  artwork: [
    { url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault },
  ],
}

const sohamCondensed: UserCondensedModel = {
  id: "01",
  name: "Soham",
  artwork: [
    { url: baseURL + "/samples/users/01.png", type: ArtworkType.isDefault },
  ],
}

const arthurMorganCondensed: UserCondensedModel = {
  id: "02",
  name: "Arthur Morgan",
  artwork: [
    { url: baseURL + "/samples/users/02.jpg", type: ArtworkType.isDefault },
  ],
}

const johnMarstonCondensed: UserCondensedModel = {
  id: "07",
  name: "John Marston",
  artwork: [
    { url: baseURL + "/samples/users/07.jpg", type: ArtworkType.isDefault },
  ],
}

const dutchVanDerLindeCondensed: UserCondensedModel = {
  id: "03",
  name: "Dutch van der Linde",
  artwork: [
    { url: baseURL + "/samples/users/03.jpg", type: ArtworkType.isDefault },
  ],
}

const franklinClintonCondensed: UserCondensedModel = {
  id: "04",
  name: "Franklin Clinton",
  artwork: [
    { url: baseURL + "/samples/users/04.jpg", type: ArtworkType.isDefault },
  ],
}

const michaelDeSantaCondensed: UserCondensedModel = {
  id: "05",
  name: "Michael De Santa",
  artwork: [
    { url: baseURL + "/samples/users/05.jpg", type: ArtworkType.isDefault },
  ],
}

const trevorPhilipsCondensed: UserCondensedModel = {
  id: "06",
  name: "Trevor Philips",
  artwork: [
    { url: baseURL + "/samples/users/06.jpg", type: ArtworkType.isDefault },
  ],
}
// #endregion
// #endregion

// #region PLAYLISTS
// #region DETAILED PLAYLISTS
const favourites: PlaylistModel = {
  id: "0001",
  name: "Favourites",
  description: "A playlist of my favourite songs.",
  artwork: [
    { url: baseURL + "/samples/playlists/0001.jpg", type: ArtworkType.isDefault },
  ],
  owner: sohamCondensed,
  tracks: [sadBeautifulTragicCondensed, blankSpaceCondensed, styleCondensed, howYouGetTheGirlCondensed, lookWhatYouMadeMeDoCondensed, delicateCondensed, betterThanRevengeCondensed, shouldveSaidNoCondensed, corneliaStreetCondensed, missAmericanaAndTheHeartbreakPrinceCondensed, mirrorballCondensed, beginAgainCondensed, youAreInLoveCondensed],
  musicVideos: [blankSpaceMVCondensed, styleMVCondensed],
  artists: [taylorSwiftCondensed],
}

const driving: PlaylistModel = {
  id: "0002",
  name: "Driving",
  description: "A playlist of songs to listen to while driving.",
  artwork: [
    { url: baseURL + "/samples/playlists/0002.jpg", type: ArtworkType.isDefault },
  ],
  owner: sohamCondensed,
  tracks: [styleCondensed, lookWhatYouMadeMeDoCondensed, iKnewYouWereTroubleCondensed, weAreNeverEverGettingBackTogetherCondensed, cruelSummerCondensed],
  musicVideos: [],
  artists: [taylorSwiftCondensed],
}

const reputationTourSetlist: PlaylistModel = {
  id: "0003",
  name: "Reputation Tour Setlist",
  description: "The setlist for Taylor Swift's 2018 Reputation Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0003.jpg", type: ArtworkType.isDefault },
  ],
  owner: polyfonixCondensed,
  tracks: [readyForItCondensed, iDidSomethingBadCondensed, gorgeousCondensed, styleCondensed, loveStoryCondensed, youBelongWithMeCondensed, lookWhatYouMadeMeDoCondensed, endGameCondensed, kingOfMyHeartCondensed, delicateCondensed, shakeItOffCondensed, dancingWithOurHandsTiedCondensed, allTooWellCondensed, blankSpaceCondensed, dressCondensed, badBloodCondensed, shouldveSaidNoCondensed, dontBlameMeCondensed, longLiveCondensed, newYearsDayCondensed],
  musicVideos: [],
  artists: [taylorSwiftCondensed],
}

const reputationTourSupriseSongs: PlaylistModel = {
  id: "0004",
  name: "Reputation Tour Surprise Songs",
  description: "The surprise songs for Taylor Swift's 2018 Reputation Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0004.jpg", type: ArtworkType.isDefault },
  ],
  owner: polyfonixCondensed,
  tracks: [holyGroundCondensed, stateOfGraceCondensed, ourSongCondensed, mineCondensed, soItGoesCondensed, wildestDreamsCondensed, iKnewYouWereTroubleCondensed, meanCondensed, dearJohnCondensed, longLiveCondensed, newYearsDayCondensed],
  musicVideos: [],
  artists: [taylorSwiftCondensed],
}

const _1989TourSetlist: PlaylistModel = {
  id: "0005",
  name: "1989 Tour Setlist",
  description: "The setlist for Taylor Swift's 2015 1989 Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0005.jpg", type: ArtworkType.isDefault },
  ],
  owner: polyfonixCondensed,
  tracks: [welcomeToNewYorkCondensed, newRomanticsCondensed, blankSpaceCondensed, iKnewYouWereTroubleCondensed, iWishYouWouldCondensed, howYouGetTheGirlCondensed, iKnowPlacesCondensed, allYouHadToDoWasStayCondensed, youAreInLoveCondensed, loveStoryCondensed, styleCondensed, thisLoveCondensed, badBloodCondensed, weAreNeverEverGettingBackTogetherCondensed, enchantedCondensed, outOfTheWoodsCondensed, shakeItOffCondensed],
  musicVideos: [],
  artists: [taylorSwiftCondensed],
}

const _1989TourSupriseSongs: PlaylistModel = {
  id: "0006",
  name: "1989 Tour Surprise Songs",
  description: "The surprise songs for Taylor Swift's 2015 1989 Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0006.jpg", type: ArtworkType.isDefault },
  ],
  owner: sohamCondensed,
  tracks: [ youBelongWithMeCondensed, meanCondensed, mineCondensed, holyGroundCondensed, longLiveCondensed],
  musicVideos: [],
  artists: [taylorSwiftCondensed],
}
// #endregion

// #region CONDENSED PLAYLISTS
const favouritesCondensed: PlaylistCondensedModel = {
  id: "0001",
  name: "Favourites",
  description: "A playlist of my favourite songs.",
  artwork: [
    { url: baseURL + "/samples/playlists/0001.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "Soham",
  ownerId: "01",
}

const drivingCondensed: PlaylistCondensedModel = {
  id: "0002",
  name: "Driving",
  description: "A playlist of songs to listen to while driving.",
  artwork: [
    { url: baseURL + "/samples/playlists/0002.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "Soham",
  ownerId: "01",
}

const reputationTourSetlistCondensed: PlaylistCondensedModel = {
  id: "0003",
  name: "Reputation Tour Setlist",
  description: "The setlist for Taylor Swift's 2018 Reputation Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0003.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "PolyFonix",
  ownerId: "00",
}

const reputationTourSupriseSongsCondensed: PlaylistCondensedModel = {
  id: "0004",
  name: "Reputation Tour Surprise Songs",
  description: "The surprise songs for Taylor Swift's 2018 Reputation Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0004.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "PolyFonix",
  ownerId: "00",
}

const _1989TourSetlistCondensed: PlaylistCondensedModel = {
  id: "0005",
  name: "1989 Tour Setlist",
  description: "The setlist for Taylor Swift's 2015 1989 Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0005.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "PolyFonix",
  ownerId: "00",
}

const _1989TourSupriseSongsCondensed: PlaylistCondensedModel = {
  id: "0006",
  name: "1989 Tour Surprise Songs",
  description: "The surprise songs for Taylor Swift's 2015 1989 Tour.",
  artwork: [
    { url: baseURL + "/samples/playlists/0006.jpg", type: ArtworkType.isDefault },
  ],
  ownerName: "PolyFonix",
  ownerId: "00",
}
// #endregion

// #endregion

// #region DETAILED USERS
const genericUserStats: UserStatsModel = {
  totalMinutes: 0,
  artistMinutes: [],
  playsPerAlbum: [],
  playsPerTrack: [],
}

const polyfonix:  AuthUser = {
  id: "00",
  userDetails: {
    id: "00",
    playbackStateIds: [],
    name: "PolyFonix",
    description: "PolyFonix is a music streaming service that allows you to listen to your favourite music, discover new artists, and create your own playlists.",
    followers: [sohamCondensed, arthurMorganCondensed, johnMarstonCondensed, dutchVanDerLindeCondensed, franklinClintonCondensed, michaelDeSantaCondensed, trevorPhilipsCondensed],
    friends: [sohamCondensed],
    artwork: [
      { url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "admin.polyfonix.com",
  password: "admin",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: true
}

const arthurMorgan: AuthUser = {
  id: "02",
  userDetails: {
    id: "02",
    playbackStateIds: [],
    name: "Arthur Morgan",
    description: "Arthur Morgan is a fictional character and the playable protagonist of the 2018 video game Red Dead Redemption 2. He is a senior member of the Van der Linde gang, and is widely considered Dutch's most capable enforcer. Arthur is voiced by Roger Clark, who also provided the motion capture for the character.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/02.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "arthur.morgan.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const johnMarston: AuthUser = {
  id: "07",
  userDetails: {
    id: "07",
    playbackStateIds: [],
    name: "John Marston",
    description: "John Marston is a fictional character in the Red Dead video game series by Rockstar Games. He is the main protagonist of the 2010 video game Red Dead Redemption, wherein he must deal with the decline of the Wild West while later being forced to hunt down the last surviving members of his old gang in exchange for his family.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/07.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "john.marston.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const dutchVanDerLinde: AuthUser = {
  id: "03",
  userDetails: {
    id: "03",
    playbackStateIds: [],
    name: "Dutch van der Linde",
    description: "Dutch van der Linde is a fictional character and one of the two main antagonists of the 2010 video game Red Dead Redemption, and a main character in its prequel Red Dead Redemption 2. He is the founder and leader of the Dutch van der Linde gang, and the primary antagonist of the Red Dead Redemption 2's main story.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/03.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "dutch.vanderlinde.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const franklinClinton: AuthUser = {
  id: "04",
  userDetails: {
    id: "04",
    playbackStateIds: [],
    name: "Franklin Clinton",
    description: "Franklin Clinton is a fictional character in Grand Theft Auto series, appearing as one of the three protagonists of Grand Theft Auto V, along with Michael De Santa and Trevor Philips. He is voiced by Shawn Fonteno, who is the cousin of Young Maylay, the voice actor of Carl Johnson, the protagonist of Grand Theft Auto: San Andreas.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/04.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "franklin.clinton.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const michaelDeSanta: AuthUser = {
  id: "05",
  userDetails: {
    id: "05",
    playbackStateIds: [],
    name: "Michael De Santa",
    description: "Michael De Santa, formerly Michael Townley, is one of the three protagonists in Grand Theft Auto V, along with Franklin Clinton and Trevor Philips. Michael's story centers around how his seemingly idyllic and halcyon lifestyle is brought to a halt as his past demons and morally compromising mistakes come back to haunt him. He is voiced by Ned Luke.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/05.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "michael.desanta.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const trevorPhilips: AuthUser = {
  id: "06",
  userDetails: {
    id: "06",
    playbackStateIds: [],
    name: "Trevor Philips",
    description: "Trevor Philips is a fictional character in Grand Theft Auto series, appearing as one of the three protagonists, along with Michael De Santa and Franklin Clinton, in Grand Theft Auto V, and a main character in Grand Theft Auto Online. He is voiced by Steven Ogg.",
    followers: [],
    friends: [],
    artwork: [
      { url: baseURL + "/samples/users/06.jpg", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "PolyFonix",
      artwork: [{ url: baseURL + "/samples/users/00.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#b166ea",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [],
      albums: [],
      tracks: [],
      musicVideos: [],
      playlists: [],
    }
  },
  email: "trevor.philips.polyfonix.com",
  password: "",
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}

const soham: AuthUser = {
  id: "01",
  userDetails: {
    id: "01",
    playbackStateIds: [],
    name: "Soham",
    description: "Soham is a music enthusiast, and the creator of PolyFonix.",
    followers: [],
    friends: [polyfonixCondensed],
    artwork: [
      { url: baseURL + "/samples/users/01.png", type: ArtworkType.isDefault },
    ],
    theme: {
      name: "reputation",
      artwork: [{ url: baseURL + "/samples/artists/taylorSwift/albums/reputation/artwork/01.png", type: ArtworkType.isDefault }],
      colorScheme: {
        primary: "#BABABA",
        secondary: "#171717",
        tertiary: "#4C4C4C",
      }
    },
    stats: genericUserStats,
    musicLibrary: {
      artists: [taylorSwiftCondensed, imagineDragonsCondensed],
      albums: [debutAlbumCondensed, fearlessCondensed, speakNowCondensed, redCondensed, _1989Condensed, reputationCondensed, loverCondensed, folkloreCondensed, evermoreCondensed],
      tracks: [...debutAlbumCondensedTracks, ...fearlessCondensedTracks, ...speakNowCondensedTracks, ...redCondensedTracks, ..._1989CondensedTracks, ...reputationCondensedTracks, ...loverCondensedTracks, ...folkloreCondensedTracks, ...evermoreCondensedTracks,],
      musicVideos: [],
      playlists: [favouritesCondensed, drivingCondensed],
    }
  },
  email: "soham.divekar2@gmail.com",
  password: hashPassword("soham123"),
  oldPasswords: [],
  numSuccessfulLogins: 0,
  numFailedLoginsSinceLastLogin: 0,
  currentlyLoggedIn: false
}
// #endregion
// #endregion

// #region TOURS
const reputationTour: TourModel = {
  name: "Reputation Stadium Tour",
  description: "The Reputation Stadium Tour was the fifth concert tour by American singer-songwriter Taylor Swift, in support of her sixth studio album, Reputation (2017). The tour began on May 8, 2018, in Glendale and concluded on November 21, 2018, in Tokyo, comprising 53 concerts. The tour broke multiple venue attendance and grossing records in North America and Oceania. It became the highest-grossing tour in United States history, surpassing The Rolling Stones' A Bigger Bang Tour (2005–2007), with a gross of $266.1 million, which was later surpassed by Ed Sheeran's ÷ Tour (2017–2019).",
  artwork: [
    { url: baseURL + "/samples/tours/0001.jpg", type: ArtworkType.isDefault },
  ],
  playlists: [reputationTourSetlistCondensed, reputationTourSupriseSongsCondensed],
  film: [],
  dates: [ { country: "United States", city: "Glendale", venue: "University of Phoenix Stadium", date: new Date("May 8, 2018")}, { country: "United States", city: "Santa Clara", venue: "Levi's Stadium", date: new Date("May 11, 2018")}, { country: "United States", city: "Pasadena", venue: "Rose Bowl", date: new Date("May 18, 2018")}, { country: "United States", city: "Seattle", venue: "CenturyLink Field", date: new Date("May 22, 2018")}, { country: "United States", city: "Denver", venue: "Sports Authority Field at Mile High", date: new Date("May 25, 2018")}, { country: "United States", city: "Chicago", venue: "Soldier Field", date: new Date("June 1, 2018")}, { country: "United States", city: "Philadelphia", venue: "Lincoln Financial Field", date: new Date("June 15, 2018")}, { country: "United States", city: "Cleveland", venue: "FirstEnergy Stadium", date: new Date("July 17, 2018")}, { country: "United States", city: "East Rutherford", venue: "MetLife Stadium", date: new Date("July 20, 2018")}, { country: "United States", city: "Foxborough", venue: "Gillette Stadium", date: new Date("July 27, 2018")}, { country: "United States", city: "Minneapolis", venue: "U.S. Bank Stadium", date: new Date("August 31, 2018")}, { country: "United States", city: "Arlington", venue: "AT&T Stadium", date: new Date("October 5, 2018")}, { country: "United States", city: "Atlanta", venue: "Mercedes-Benz Stadium", date: new Date("October 12, 2018")}, { country: "United States", city: "Miami Gardens", venue: "Hard Rock Stadium", date: new Date("October 19, 2018")}, { country: "United States", city: "Tokyo", venue: "Tokyo Dome", date: new Date("November 20, 2018")}, { country: "United States", city: "Tokyo", venue: "Tokyo Dome", date: new Date("November 21, 2018")}],
}

const _1989Tour: TourModel = {
  name: "The 1989 World Tour",
  description: "The 1989 World Tour was the fourth concert tour by American singer-songwriter Taylor Swift, in support of her fifth studio album, 1989 (2014). The tour's European and North American dates, as well as two shows in Japan, were announced in November 2014, followed by the Oceania dates in December 2014. Additional dates for Singapore and Shanghai were announced in June 2015 with a third and final Melbourne show announced in July 2015. The tour began on May 5, 2015, in Tokyo, Japan and concluded on December 12, 2015, in Melbourne, Australia, the day before Swift's 26th birthday. The tour became Swift's highest grossing and most attended tour to date, mobilizing 2,278,647 fans and $250,733,097 in revenue.",
  artwork: [
    { url: baseURL + "/samples/tours/0002.jpg", type: ArtworkType.isDefault },
  ],
  playlists: [_1989TourSetlistCondensed, _1989TourSupriseSongsCondensed],
  film: [],
  dates: []
}
// #endregion

// #region UPDATE MODELS
// ADD ITEMS TO ARTISTS
_1989.musicVideos = [blankSpaceMVCondensed, styleMVCondensed, outOfTheWoodsMVCondensed]
reputation.musicVideos = [lookWhatYouMadeMeDoLyricMVCondensed]

taylorSwift.albums = [
  debutAlbumCondensed, fearlessCondensed, speakNowCondensed, redCondensed, _1989Condensed, reputationCondensed, loverCondensed, folkloreCondensed, evermoreCondensed
]
taylorSwift.tracks = [
  ...debutAlbumCondensedTracks, ...fearlessCondensedTracks, ...speakNowCondensedTracks, ...redCondensedTracks, ..._1989CondensedTracks, ...reputationCondensedTracks, ...loverCondensedTracks, ...folkloreCondensedTracks, ...evermoreCondensedTracks
]
taylorSwift.musicVideos = [
  blankSpaceMVCondensed, styleMVCondensed, outOfTheWoodsMVCondensed, lookWhatYouMadeMeDoLyricMVCondensed
]

taylorSwift.tours = [reputationTour, _1989Tour]

edSheeran.features = [everythingHasChangedCondensed, endGameCondensed]

imagineDragons.albums = [
  evolveCondensed
]
imagineDragons.tracks = [
  nextToMeCondensed, iDontKnowWhyCondensed, whateverItTakesCondensed, believerCondensed, walkingTheWireCondensed, riseUpCondensed, illmakeituptoyouCondensed, yesterdayCondensed, mouthOfTheRiverCondensed, thunderCondensed, startOverCondensed, dancingIntheDarkCondensed
]
// #endregion 

// #region CATEGORIES
const chartsCategory: CategoryItem = {
  id: "0001",
  name: "Charts",
  description: "The most popular songs, albums, and artists.",
  artwork: [
    { url: baseURL + "/samples/categories/0001.jpg", type: ArtworkType.isDefault },
  ],
  sections: [
    {
      name: "Top Artists",
      description: "The most popular artists.",
      artwork: [{ url: baseURL + "/samples/categories/0001.jpg", type: ArtworkType.isDefault }],
      items: []
    },
    {
      name: "Top Songs",
      description: "The most popular songs.",
      artwork: [{ url: baseURL + "/samples/categories/0001.jpg", type: ArtworkType.isDefault }],
      items: []
    },
    {
      name: "Top Albums",
      description: "The most popular albums.",
      artwork: [{ url: baseURL + "/samples/categories/0001.jpg", type: ArtworkType.isDefault }],
      items: []
    }
  ]
}

const newReleasesCategory: CategoryItem = {
  id: "0002",
  name: "New Releases",
  description: "The latest songs, albums, and artists.",
  artwork: [
    { url: baseURL + "/samples/categories/0002.jpg", type: ArtworkType.isDefault },
  ],
  sections: [
    {
      name: "New Songs",
      description: "The latest songs.",
      artwork: [{ url: baseURL + "/samples/categories/0002.jpg", type: ArtworkType.isDefault }],
      items: []
    },
    {
      name: "New Albums",
      description: "The latest albums.",
      artwork: [{ url: baseURL + "/samples/categories/0002.jpg", type: ArtworkType.isDefault }],
      items: []
    }
  ]
}
// #endregion


// #endregion
export const sampleData: DataStore = {
  searchable: {
    users: [polyfonixCondensed, sohamCondensed, arthurMorganCondensed, johnMarstonCondensed, dutchVanDerLindeCondensed, franklinClintonCondensed, michaelDeSantaCondensed, trevorPhilipsCondensed],
    musicLibrary: {
      artists: [taylorSwiftCondensed, edSheeranCondensed, imagineDragonsCondensed],
      albums: [debutAlbumCondensed, fearlessCondensed, speakNowCondensed, redCondensed, _1989Condensed, reputationCondensed, loverCondensed, folkloreCondensed, evermoreCondensed, evolveCondensed],
      tracks: [...debutAlbumCondensedTracks, ...fearlessCondensedTracks, ...speakNowCondensedTracks, ...redCondensedTracks, ..._1989CondensedTracks, ...reputationCondensedTracks, ...loverCondensedTracks, ...folkloreCondensedTracks, ...evermoreCondensedTracks, ...evolveCondensedTracks],
      musicVideos: [blankSpaceMVCondensed, styleMVCondensed, outOfTheWoodsMVCondensed, lookWhatYouMadeMeDoLyricMVCondensed],
      playlists: [favouritesCondensed, drivingCondensed, reputationTourSetlistCondensed, reputationTourSupriseSongsCondensed, _1989TourSetlistCondensed, _1989TourSupriseSongsCondensed],
    }
  },
  users: [polyfonix, soham, arthurMorgan, johnMarston, dutchVanDerLinde, franklinClinton, michaelDeSanta, trevorPhilips],
  musicLibrary: {
    artists: [taylorSwift, edSheeran, imagineDragons],
    albums: [debutAlbum, fearless, speakNow, red, _1989, reputation, lover, folklore, evermore, evolve],
    tracks: [...debutAlbumTracks, ...fearlessAlbumTracks, ...speakNowAlbumTracks, ...redAlbumTracks, ..._1989Tracks, ...reputationTracks, ...loverTracks, ...folkloreTracks, ...evermoreTracks, ...evolveTracks],
    musicVideos: [blankSpaceMV, styleMV, outOfTheWoodsMV, lookWhatYouMadeMeDoLyricMV],
    playlists: [favourites, driving, reputationTourSetlist, reputationTourSupriseSongs, _1989TourSetlist, _1989TourSupriseSongs],
  },
  playbackStates: [],
  sessions: [],
  categories: [chartsCategory, newReleasesCategory],
}