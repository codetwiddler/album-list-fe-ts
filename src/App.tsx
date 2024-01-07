import React from 'react';
import './styles/app.css';
import AlbumItem from "./components/AlbumItem"; 

//Fake some initial data because we don't have any persistence, yet.
//That will require an API/repo of some flavor.
const albums: Album[] = [
  { id: 1, title: "Reboot", artist: "Robot 1", releaseYear: 1972, genre: "Funk", rating: 3},
  { id: 2, title: "Work", artist: "Robot 2", releaseYear: 1972, genre: "Pop", rating: 4},
  { id: 3, title: "Recharge", artist: "Robot 3", releaseYear: 1972, genre: "Electro-Swing", rating: 5},
  { id: 4, title: "Walk home", artist: "Robot 4", releaseYear: 1972, genre: "Psychedelic Circus", rating: 2},
  { id: 5, title: "Shutdown", artist: "Robot 5", releaseYear: 1972, genre: "Noise", rating: 1},
  { id: 6, title: "Silent Wave", artist: "Sound Bender", releaseYear: 1980, genre: "Ambient", rating: 2 },
  { id: 7, title: "Echoes of the Unknown", artist: "Mystery Band", releaseYear: 1982, genre: "Rock", rating: 4 },
  { id: 8, title: "Neon Dreams", artist: "City Lights", releaseYear: 1978, genre: "Synth-Pop", rating: 5 },
  { id: 9, title: "Retro Future", artist: "Time Traveler", releaseYear: 1990, genre: "RetroWave", rating: 3 },
  { id: 10, title: "Solar Flares", artist: "Star Voyager", releaseYear: 2000, genre: "Electronic", rating: 4 },
  { id: 11, title: "Deep Blue", artist: "Ocean Explorer", releaseYear: 2005, genre: "Chill", rating: 5 },
  { id: 12, title: "Mountain Echo", artist: "Nature's Voice", releaseYear: 2010, genre: "Instrumental", rating: 3 },
  { id: 13, title: "Urban Jungle", artist: "City Roamer", releaseYear: 2015, genre: "Hip-Hop", rating: 4 },
  { id: 14, title: "Desert Mirage", artist: "Sandy Sound", releaseYear: 2018, genre: "World", rating: 2 },
  { id: 15, title: "Frozen Notes", artist: "Winter Melody", releaseYear: 2020, genre: "Acoustic", rating: 5 },
  { id: 16, title: "Festival of Lights", artist: "Cultural Beats", releaseYear: 1995, genre: "Folk", rating: 3 },
  { id: 17, title: "Space Odyssey", artist: "Astro", releaseYear: 1977, genre: "Sci-Fi Rock", rating: 4 },
  { id: 18, title: "Rainy Days", artist: "Cloudy Melancholy", releaseYear: 1985, genre: "Blues", rating: 4 },
  { id: 19, title: "Summer Breeze", artist: "Sunny Tunes", releaseYear: 1992, genre: "Pop", rating: 3 },
  { id: 20, title: "Autumn Leaves", artist: "Golden Era", releaseYear: 2003, genre: "Jazz", rating: 5 },
  { id: 21, title: "Windy Nights", artist: "Gale Force", releaseYear: 1998, genre: "Classical", rating: 2 },
  { id: 22, title: "Stellar Journey", artist: "Galactic Traveler", releaseYear: 1989, genre: "Psychedelic", rating: 4 },
  { id: 23, title: "Underwater Realm", artist: "Aqua World", releaseYear: 2012, genre: "New Age", rating: 5 },
  { id: 24, title: "Dreams", artist: "Illusion", releaseYear: 2011, genre: "Ambient", rating: 3 },
  { id: 25, title: "Rhythm & Blues", artist: "The Classics", releaseYear: 1990, genre: "R&B", rating: 4 },
];

//Expressing everything as const is a convention designed to make things safer and/or more predictable
//because the functions are immutable (although the values they hold probably won't be). Also prevents
//anything weird happening from hoisting. Also no more 'this' complications.
const App = () => {
  
  //Generate an array of AlbumItem components we'll display
  const albumList = albums.map((album) => (
    <AlbumItem
      id={album.id}
      title={album.title}
      artist={album.artist}
      releaseYear={album.releaseYear}
      genre={album.genre}
      rating={album.rating}
    />
  ));

  return (
  <div className="App">
    <ul>
      {albumList}
    </ul>
  </div>
  );
};

export default App;
