interface Album {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  rating?: number | undefined; //maybe we scale to range of 1-10 someday, amiright?
}
