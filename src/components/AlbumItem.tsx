import React, { useEffect, useState } from "react";
import AlbumRating from "./AlbumRating";
import AlbumDeleteModal from "./AlbumDeleteModal";

//Making Props a type for each component explicitly defines the
//kind of data the component is designed to work with. Naming
//per-component arguably enhances understanding.
type AlbumItemProps = {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  rating: number;
  labels: AlbumLabels; // Adding the labels prop
  onDeleteAlbum: () => void;
  onUpdateAlbum: (updatedAlbum: Album) => void;
};

//We no longer want to use React.FC<Props>. React 18 removes { children: ReactNode | ReactNode[] }
//as an inherent input because components should accept any type of children. Thus, it is important
//to be explicit about the input types we're using from now on.
const AlbumItem = ({
  id,
  title,
  artist,
  releaseYear,
  genre,
  rating,
  labels,
  onDeleteAlbum,
  onUpdateAlbum
}: AlbumItemProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedAlbum, setEditedAlbum] = useState({ id, title, artist, releaseYear, genre, rating });

  //TODO: need some kind of validation here since I added it on the model in the API
  const handleSave = () => {
    onUpdateAlbum(editedAlbum);
    setIsEditMode(false);
  };

  useEffect(() => {
    setEditedAlbum({ id, title, artist, releaseYear, genre, rating });
  }, [id, title, artist, releaseYear, genre, rating]);

  const albumItemViewingTemplate = (
    <div className="albumItemDetails">
      <div className="albumItemDetails__row">
        <span className="albumItemDetails__row__lbl">{labels.artist}</span>
        <span className="albumItemDetails__row__txt">{artist}</span>
      </div>
      <div className="albumItemDetails__row">
        <span className="albumItemDetails__row__lbl">{labels.title}</span>
        <span className="albumItemDetails__row__txt">{title}</span>
      </div>
      <div className="albumItemDetails__row">
        <span className="albumItemDetails__row__lbl">{labels.releaseYear}</span>
        <span className="albumItemDetails__row__txt">{releaseYear}</span>
      </div>
      <div className="albumItemDetails__row">
        <span className="albumItemDetails__row__lbl">{labels.genre}</span>
        <span className="albumItemDetails__row__txt">{genre}</span>
      </div>
      <AlbumRating rating={rating}/>
      <div className="albumItemDetails__btn__edit-container">
        <button className="albumItemDetails__btn__edit" onClick={() => setIsEditMode(true)}>Edit</button>
      </div>
      <div className="albumItemDetails__btn__del-container">
        <button className="albumItemDetails__btn__delete" onClick={toggleModal}>X</button>
      </div>
      <AlbumDeleteModal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            onConfirm={onDeleteAlbum}
            albumTitle={title}
            albumArtist={artist}
        />
    </div>
  );

  const albumItemEditingTemplate = (
    <div className="albumItemDetails">
      <div className="albumItemDetails__row">
        <label className="albumItemDetails__row__lbl">{labels.artist}</label>
        <input type="text" value={editedAlbum.artist} onChange={(e) => setEditedAlbum({ ...editedAlbum, artist: e.target.value })}
        />
      </div>
      <div className="albumItemDetails__row">
        <label className="albumItemDetails__row__lbl">{labels.title}</label>
        <input type="text" value={editedAlbum.title} onChange={(e) => setEditedAlbum({ ...editedAlbum, title: e.target.value })}
        />
      </div>
      <div className="albumItemDetails__row">
        <label className="albumItemDetails__row__lbl">{labels.releaseYear}</label>
        <input type="number" value={editedAlbum.releaseYear} onChange={(e) => setEditedAlbum({ ...editedAlbum, releaseYear: parseInt(e.target.value) })}
        />
      </div>
      <div className="albumItemDetails__row">
        <label className="albumItemDetails__row__lbl">{labels.genre}</label>
        <input type="text" value={editedAlbum.genre} onChange={(e) => setEditedAlbum({ ...editedAlbum, genre: e.target.value })}
        />
      </div>
      <div className="albumItemDetails__row">
        <label className="albumItemDetails__row__lbl">{labels.rating}</label>
        <input type="number" value={editedAlbum.rating} onChange={(e) => setEditedAlbum({ ...editedAlbum, rating: parseInt(e.target.value) })}
        />
      </div>
      <div className="albumItemDetails__btn__edit-container">
        <button className="albumItemDetails__btn" onClick={handleSave}>Confirm</button>
        <button className="albumItemDetails__btn" onClick={() => setIsEditMode(false)}>Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="albumItem">
      {isEditMode ? albumItemEditingTemplate : albumItemViewingTemplate}
    </div>
  );
};

export default AlbumItem;
