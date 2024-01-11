import React, { useState } from "react";
import AlbumItem from "./AlbumItem";
import { albumLabelList } from "../modules";

type AlbumListProps = {
  albums: Album[];
  onDeleteAlbum: (albumId: number) => void;
  onUpdateAlbum: (albumId: number, album: Album) => void;
};

const AlbumList = ({ albums, onDeleteAlbum, onUpdateAlbum  }: AlbumListProps) => {
  const [currentPage, setCurrentPage] = useState(1); //Start on page one
  //TODO: add in some buttons for setting Albums per page
  const [albumItemsPerPage, setAlbumsPerPage] = useState(5);

  //Calculate indices for slicing the albums array
  const indexOfLastAlbum = currentPage * albumItemsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumItemsPerPage;
  const currentAlbumItemList = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  //Calculate page count
  const pageCount = Math.ceil(albums.length / albumItemsPerPage);

  //Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handleAlbumsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlbumsPerPage(Number(event.target.value));
    setCurrentPage(1); //Reset to page 1 after changing Albums per page
  };

  return (
    <div className="albumGroup">
      <div className="albumPagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <ul className="albumList">
        {currentAlbumItemList.map((album) => (
          <AlbumItem
            key={album.id}
            labels={albumLabelList}
            onDeleteAlbum={() => onDeleteAlbum(album.id)}
            onUpdateAlbum={(updatedAlbum) => onUpdateAlbum(album.id, updatedAlbum)}
            {...album} //Spread operator props the rest of the album's data
          />
        ))}
      </ul>
      <div className="albumPagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="albumPerPageSelector">
        <label htmlFor="albumsPerPage">Albums per page: </label>
        <select id="albumsPerPage" onChange={handleAlbumsPerPageChange} value={albumItemsPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AlbumList;
