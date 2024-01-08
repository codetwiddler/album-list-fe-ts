import React, { useState } from 'react';

type AlbumAddNewProps = {
    labels: AlbumLabels;
    onAddNewAlbum: (newAlbum: Album) => void;
}

const AlbumAddNew = ({ labels, onAddNewAlbum }: AlbumAddNewProps) => {
    const [title, setTitle]             = useState("");
    const [artist, setArtist]           = useState("");
    const [releaseYear, setReleaseYear] = useState<number>(new Date().getFullYear());
    const [genre, setGenre]             = useState("");
    const [rating, setRating]           = useState<number>(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newAlbum = {
          id: Math.random(), // You might want a more robust method for generating IDs
          title,
          artist,
          releaseYear,
          genre,
          rating,
        };
        
        onAddNewAlbum(newAlbum);
        
        // Clear the form or provide further instructions
      };
    
      return (
        <form onSubmit={handleSubmit}>        
          <div>
            <label>{labels.title}</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div>
            <label>{labels.artist}</label>
            <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
          </div>
          <div>
            <label>{labels.releaseYear}</label>
            <input type="text" value={releaseYear} onChange={(event) => setReleaseYear(parseInt(event.target.value))} />
          </div>
          <div>
            <label>{labels.genre}</label>
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
          </div>
          <div>
            <label>{labels.rating}</label>
            <input type="text" value={rating} onChange={(event) => setRating(parseInt(event.target.value))} />
          </div>
          <button type="submit">Add Album</button>
        </form>
      );
    };

export default AlbumAddNew;
