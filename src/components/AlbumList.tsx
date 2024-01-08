import React, { useState } from "react";
import AlbumItem from "./AlbumItem";
import { albumLabelList } from "../modules";

type AlbumListProps = {
  albums: Album[];
};

const AlbumList = ({ albums }: AlbumListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [albumsPerPage, setAlbumsPerPage] = useState(5); // Default 5 albums per page

  // Calculate the indexes for slicing the albums array
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Calculate page count
  const pageCount = Math.ceil(albums.length / albumsPerPage);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="albumGroup">
      <ul className="albumList">
        {currentAlbums.map((album) => (
          <AlbumItem
            key={album.id}
            labels={albumLabelList}
            {...album} // spreading the album properties as props
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
