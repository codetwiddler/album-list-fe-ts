import React, { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom';

type AlbumAddNewProps = {
  labels: AlbumLabels;
};

const AlbumAddNew = ({ labels }: AlbumAddNewProps) => {
  const navigate = useNavigate();
  const context = useOutletContext<{ addAlbum: (newAlbum: NewAlbum) => Promise<void> }>();
  const addAlbum = context.addAlbum;

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

    const newAlbum: NewAlbum = {
      title,
      artist,
      releaseYear,
      genre,
      rating,
    };

    try {
      await addAlbum(newAlbum);
      navigate('/');
    } catch (error) {
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
