import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './styles/app.css';
import AlbumList from "./components/AlbumList";
import { endpoints } from "./endpoints";
import axios from 'axios';

//Expressing everything as const is a convention designed to make things safer and/or more predictable
//because the functions are immutable (although the values they hold probably won't be). Also prevents
//anything weird happening from hoisting. Also no more 'this' complications.
const App = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  //TODO: deal with paginating via the API
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(endpoints.allAlbums);
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
        //Handle errors (ex: show an error message)
      }
    };

    fetchAlbums();
  }, []);

  return (
  <div className="App">
      <div className="linkContainer">
        <nav>
          <Link to="/add-album">Add New Album</Link>
        </nav>
      </div>
      <Outlet /> {/****Renders the matching child route****/}
      <div className="albumList__Container">
        <AlbumList albums={albums} />
      </div>
  </div>
  );
};

export default App;
