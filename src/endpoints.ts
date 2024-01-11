const ROOT_PATH  = '/';
const ALBUM_ADD  = ROOT_PATH + "add-album";
const BASE_API_URL   = "https://localhost:7286/";
const ALBUMS_ALL = BASE_API_URL + "Album";

//This constant provides a nice way to aggregate the various endpoints the
//application is expected to use throughout. Centralizes endpoint setup.
export const endpoints = {
    appBase:   ROOT_PATH,
    addAlbum:  ALBUM_ADD,
    allAlbums: ALBUMS_ALL,
};