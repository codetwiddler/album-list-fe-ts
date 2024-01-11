import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { endpoints } from "../endpoints";

type AlbumAddNewProps = {
  labels: AlbumLabels;
  onAddNewAlbum: (newAlbum: Album) => void;
};

const AlbumAddNew = ({ labels, onAddNewAlbum }: AlbumAddNewProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseYear, setReleaseYear] = useState<number>(new Date().getFullYear());
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState<number>(0);

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newAlbum = {
      title,
      artist,
      releaseYear,
      genre,
      rating,
    };

    try {
      const response = await axios.post(
        endpoints.allAlbums,
        newAlbum
      );
      
      onAddNewAlbum(response.data);
      navigate(endpoints.appBase);

    } catch (error) {
      //TODO: Handle errors in a more user-interactive fashion (modal?)
      console.error("Error adding album", error);
      
    }
  };

  return (
    <div className="albumAddNew__Container">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="albumAddNew__lbl">{labels.title}</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div>
          <label className="albumAddNew__lbl">{labels.artist}</label>
          <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div>
          <label className="albumAddNew__lbl">{labels.releaseYear}</label>
          <input type="text" value={releaseYear} onChange={(event) => setReleaseYear(parseInt(event.target.value))}/>
        </div>
        <div>
          <label className="albumAddNew__lbl">{labels.genre}</label>
          <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
        </div>
        <div>
          <label className="albumAddNew__lbl">{labels.rating}</label>
          <input type="text" value={rating} onChange={(event) => setRating(parseInt(event.target.value))}/>
        </div>
        <div >
          <button type="submit">Add Album</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AlbumAddNew;
