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

  const addAlbum = async (newAlbum: NewAlbum) => {
    try {
      const response = await axios.post(endpoints.allAlbums, newAlbum);
      setAlbums(prevAlbums => [...prevAlbums, response.data]);
    } catch (error) {
      console.error('Error adding album:', error);
      //Handle errors...
    }
  };

  const updateAlbum = async (albumId: number, updatedAlbum: Album) => {
    try {
      const response = await axios.patch(`${endpoints.allAlbums}/${albumId}`, updatedAlbum);
      setAlbums(prevAlbums => prevAlbums.map(album => album.id === albumId ? response.data : album));
    } catch (error) {
      console.error('Error updating album:', error);
      //Handle errors...
    }
  };

  const deleteAlbum = async (albumId: number) => {
    try {
      await axios.delete(`${endpoints.allAlbums}/${albumId}`);
      setAlbums(prevAlbums => prevAlbums.filter(album => album.id !== albumId));
    } catch (error) {
      console.error('Error deleting album:', error);
      //Handle errors...
    }
  };

  return (
  <div className="App">
      <div className="linkContainer">
        <nav>
          <Link to="/add-album">Add New Album</Link>
        </nav>
      </div>
      <Outlet context={{ addAlbum }} /> {/****Renders the matching child route****/}
      <div className="albumList__Container">
        <AlbumList albums={albums} onDeleteAlbum={deleteAlbum} onUpdateAlbum={updateAlbum}/>
      </div>
  </div>
  );
};

export default App;
