interface Album {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  rating: number; //maybe we scale to range of 1-10 someday, amiright?
}

//Mate our Album props with useful labels using props as keys
type AlbumLabels = {
  [Property in keyof Album]: string;
};
