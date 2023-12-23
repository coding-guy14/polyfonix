import express, { json, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "../config.json";

import { sampleData } from "./Samples/samples";
import { getData, setData } from "./datastore";
import { LoginUserConstructor, NewUserConstructor } from "./Models/Backend Models/APIModels";

import * as MusicLibraryManager from "./Managers/musicLibrary";
import * as AuthenticationManager from "./Managers/authentication";
import * as UserManager from "./Managers/users";
import * as PlaybackManager from "./Managers/playback";

// #region SERVER SETUP
const app = express();
app.use(json());

// Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(morgan("dev"));

const PORT: number = config.port || 3000;
const HOST: string = config.host || "0.0.0.0";
// #endregion

// #region HOME
app.get("/", (req: Request, res: Response) => {
  res.send("<html><head><title>PolyFonix</title></head><body><h1>PolyFonix</h1></body></html>");
});
// #endregion

// #region API ROUTES

// #region USER  + AUTHENTICATION ENDPOINTS
// #region AUTHENTICATION ENDPOINTS
app.post("/user/register", (req: Request, res: Response) => {
  const newUser: NewUserConstructor = req.body;
  const result = AuthenticationManager.userRegister(newUser);
  res.status(result.code).send(result);
});

app.post("/user/login", (req: Request, res: Response) => {
  const user: LoginUserConstructor = req.body;
  const result = AuthenticationManager.userLogin(user);
  res.status(result.code).send(result);
});

app.post("/user/logout", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const result = AuthenticationManager.userLogout(token);
  res.status(result.code).send(result);
});
// #endregion

// #region USER ENDPOINTS
app.get("/user", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const result = UserManager.getUserDetails(token);
  if ("code" in result) {
    res.status(result.code).send(result);
  } else {
    res.status(200).send(result);
  }  
});

app.patch("/user/theme", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const theme = req.body;
  const result = UserManager.updateUserTheme(token, theme);
  res.status(result.code).send(result);
});

app.patch("/user/stats", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const stats = req.body;
  const result = UserManager.updateUserStats(token, stats);
  res.status(result.code).send(result);
})
// #endregion

// #region USER MUSIC LIBRARY ENDPOINTS
app.patch("/user/musicLibrary/artists", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const artists = req.body;
  const result = UserManager.updateUserArtists(token, artists);
  res.status(result.code).send(result);
});

app.patch("/user/musicLibrary/albums", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const albums = req.body;
  const result = UserManager.updateUserAlbums(token, albums);
  res.status(result.code).send(result);
});

app.patch("/user/musicLibrary/playlists", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const playlists = req.body;
  const result = UserManager.updateUserPlaylists(token, playlists);
  res.status(result.code).send(result);
});

// UPDATE PLAYLISTS
app.patch("/user/musicLibrary/playlist/:id", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const id = req.params.id;
  const playlist = req.body;
  const result = UserManager.updatePlaylist(token, id, playlist);
  console.log(result.message)
  res.status(result.code).send(result);
});
// #endregion
// #endregion

// #region DISCOVER ENDPOINTS
app.get("/search/:text", (req: Request, res: Response) => {
  const searchText = req.params.text;
  res.send(MusicLibraryManager.search(searchText));
});

app.get("/categories", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getCategories());
});
// #endregion

// #region CONDENSED MODEL ENDPOINTS
// #region ARTIST ENDPOINTS
app.get("/artists", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getArtists());
});

app.get("/artists/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(MusicLibraryManager.getArtists(name));
});
// #endregion

// #region ALBUM ENDPOINTS
app.get("/albums", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getAlbums());
});

app.get("/albums/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(MusicLibraryManager.getAlbums(name));
})
// #endregion

// #region TRACK ENDPOINTS
app.get("/tracks", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getTracks());
});

app.get("/tracks/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(MusicLibraryManager.getTracks(name));
});
// #endregion

// #region MUSIC VIDEO ENDPOINTS
app.get("/musicvideos", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getMusicVideos());
});

app.get("/musicvideos/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(MusicLibraryManager.getMusicVideos(name));
});
// #endregion

// #region PLAYLIST ENDPOINTS
app.get("/playlists", (req: Request, res: Response) => {
  res.send(MusicLibraryManager.getPlaylists());
});

app.get("/playlists/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(MusicLibraryManager.getPlaylists(name));
});
// #endregion

// #region DETAILED MODEL ENDPOINTS
app.get("/artist/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(MusicLibraryManager.getArtistById(id));
});

app.get("/album/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(MusicLibraryManager.getAlbumById(id));
})

app.get("/track/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(MusicLibraryManager.getTrackById(id));
});

app.get("/musicVideo/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(MusicLibraryManager.getMusicVideoById(id));
});

app.get("/playlist/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(MusicLibraryManager.getPlaylistById(id));
});
// #endregion

// #endregion

// #region PLAYBACK ENDPOINTS
app.get("/playbackstate/:id", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const id = req.params.id;
  const result = PlaybackManager.getPlaybackStateById(token, id);
  console.log(id)
  if ("code" in result) {
    res.status(result.code).send(result);
  } else {
    res.status(200).send(result);
  }
});

app.patch("/playbackstate/:id", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const id = req.params.id;
  const playbackState = req.body;
  const result = PlaybackManager.udpatePlaybackState(token, id, playbackState);
  res.status(result.code).send(result);
});

app.get("/playbackstates", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const result = PlaybackManager.getPlaybackStates(token);
  if ("code" in result) {
    res.status(result.code).send(result);
  } else {
    res.status(200).send(result);
  }
});

app.post("/playbackstate", (req: Request, res: Response) => {
  const token = req.headers['authorization'];
  const playbackState = req.body;
  const result = PlaybackManager.createPlaybackState(token, playbackState);
  res.status(result.code).send(result);
});
// #endregion


// #endregion

// #region DEBUG ROUTES
app.get("/debug/sessions", (req: Request, res: Response) => {
  res.send(getData().sessions);
});

app.get("/debug/users", (req: Request, res: Response) => {
  res.send(getData().users);
  res.send(getData().searchable.users);
});

app.get("/debug/musicLibrary/reset", (req: Request, res: Response) => {
  let data = getData();
  // find user
  const user = data.users.find((user) => user.id === "01");
  if (user) {
    user.userDetails.musicLibrary = sampleData.users.find((user) => user.id === "01").userDetails.musicLibrary;
  }
  setData(data);
  res.send(data);
});

app.get("/debug/playbackstates", (req: Request, res: Response) => {
  res.send(getData().playbackStates);
});

app.get("/debug/reload", (req: Request, res: Response) => {
  let data = getData();
  if (data != sampleData) {
    data = sampleData;
  }
  setData(data);
  res.send(data);
});

// #endregion

// #region SERVER RUNTIMES
const server = app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Shutting down server gracefully."));
});
// #endregion
