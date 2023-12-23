import config from "../config.json";
import { ArtworkType, Category } from "../Models/discoverModels";
import { getData, setData } from "../dataStore";
import { nineteenEightyNineCondensed } from "./Albums/1989";

const baseURL = config.access_URL

export const chartsCategory: Category = {
  id: "01",
  name: "Charts",
  artwork: [{ type: ArtworkType.isDefault, url: "chartsArtwork", isAnimated: false }],
  description: "Top songs, and albums, updated daily",
  sections: [
    {
      id: "0101",
      name: "Featured",
      description: "Top songs today",
      type: "albums",
      items: [ {
        id: "05",
        name: "1989",
        description: "The new album",
        artwork: [{ type: ArtworkType.isDefault, url: baseURL + "samples/albums/1989/1989albumArt.png", isAnimated: false }],
        artistOrOwnerId: "01",
        artistOrOwnerName: "Taylor Swift",
        type: "album"
      }]
    },
    {
      id: "0102",
      name: "Top Songs",
      description: "Top songs today",
      type: "tracks",
      items: []
    },
    {
      id: "0103",
      name: "Top New Albums",
      description: "Newly released albums.",
      type: "albums",
      items: []
    },
    
  ]
}

export const popCategory: Category = {
  id: "02",
  name: "Pop",
  artwork: [{ type: ArtworkType.isDefault, url: "popArtwork", isAnimated: false }],
  description: "Top songs, and albums, updated daily",
  sections: [
    {
      id: "0201",
      name: "Top Songs",
      description: "Top songs today",
      type: "tracks",
      items: []
    },
    {
      id: "0202",
      name: "Top New Albums",
      description: "Newly released albums.",
      type: "albums",
      items: []
    },
    
  ]
}


export const RockCategory: Category = {
  id: "03",
  name: "Rock",
  artwork: [{ type: ArtworkType.isDefault, url: "rockArtwork", isAnimated: false }],
  description: "Top songs, and albums, updated daily",
  sections: [
    {
      id: "0201",
      name: "Top Songs",
      description: "Top songs today",
      type: "tracks",
      items: []
    },
    {
      id: "0202",
      name: "Top New Albums",
      description: "Newly released albums.",
      type: "albums",
      items: []
    },
    
  ]
}


export const AlternativeCategory: Category = {
  id: "04",
  name: "Alternative",
  artwork: [{ type: ArtworkType.isDefault, url: "altArtwork", isAnimated: false }],
  description: "Top songs, and albums, updated daily",
  sections: [
    {
      id: "0201",
      name: "Top Songs",
      description: "Top songs today",
      type: "tracks",
      items: []
    },
    {
      id: "0202",
      name: "Top New Albums",
      description: "Newly released albums.",
      type: "albums",
      items: []
    },
    
  ]
}
