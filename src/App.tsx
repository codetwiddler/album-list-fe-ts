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
