
import fs from 'fs';
import { DataStore } from './Models/Backend Models/HelperModels';

// Default
let data: DataStore = {
  searchable: {
    users: [],
    musicLibrary: {
      tracks: [],
      musicVideos: [],
      albums: [],
      artists: [],
      playlists: []
    }
  }, 
  users: [],
  playbackStates: [],
  sessions: [],
  musicLibrary: {
    tracks: [],
    musicVideos: [],
    albums: [],
    artists: [],
    playlists: []
  }, 
  categories: []
}



export function getData(): DataStore {
  if (fs.existsSync('persistent.json')) {
    const jsonString = fs.readFileSync('persistent.json');
    data = JSON.parse(String(jsonString));
  } else {
    fs.writeFileSync('persistent.json', JSON.stringify(data), { flag: 'wx' });
  }
  return data;
}

export function setData(newData: DataStore) {
  data = newData;
  fs.writeFileSync('./persistent.json', JSON.stringify(data));
}


export function resetMusicLibrary() {
  let data = getData()
  data.musicLibrary = {
    tracks: [],
    musicVideos: [],
    albums: [],
    artists: [],
    playlists: []
  }

  data.searchable.musicLibrary = {
    tracks: [],
    musicVideos: [],
    albums: [],
    artists: [],
    playlists: []
  }
  setData(data)
}

export function resetUsers() {
  let data = getData()
  data.users = []
  data.searchable.users = []
  setData(data)
}

export function resetDataStore() {
  let data = getData()
  data = {
    searchable: {
      users: [],
      musicLibrary: {
        tracks: [],
        musicVideos: [],
        albums: [],
        artists: [],
        playlists: []
      }
    }, 
    users: [],
    playbackStates: [],
    sessions: [],
    musicLibrary: {
      tracks: [],
      musicVideos: [],
      albums: [],
      artists: [],
      playlists: []
    },
    categories: []
  }
  setData(data)
}
