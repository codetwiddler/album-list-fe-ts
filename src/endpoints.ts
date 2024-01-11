const ROOT_PATH  = '/';
const BASE_URL   = "https://localhost:7286/";
const ALBUMS_ALL = BASE_URL + "Album";

//This constant provides a nice way to aggregate the various endpoints the
//application is expected to use throughout. Centralizes endpoint setup.
export const endpoints = {
    appBase:   ROOT_PATH,
    allAlbums: ALBUMS_ALL
};