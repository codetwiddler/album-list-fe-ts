import React, { useState } from "react";
import AlbumItem from "./AlbumItem";
import { albumLabelList } from "../modules";

type AlbumListProps = {
  albums: Album[];
};

const AlbumList = ({ albums }: AlbumListProps) => {
  const [currentPage, setCurrentPage] = useState(1); //Start on page one
  const [albumItemsPerPage, setAlbumsPerPage] = useState(5); //Default to five albums per page

  // Calculate indices for slicing the albums array
  const indexOfLastAlbum = currentPage * albumItemsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumItemsPerPage;
  const currentAlbumItemList = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Calculate page count
  const pageCount = Math.ceil(albums.length / albumItemsPerPage);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="albumGroup">
      <ul className="albumList">
        {currentAlbumItemList.map((album) => (
          <AlbumItem
            key={album.id}
            labels={albumLabelList}
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
    </div>
  );
};

export default AlbumList;
