import React from "react";

type AlbumItemProps = {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  rating?: number;
};

const AlbumItem = ({
  id,
  title,
  artist,
  releaseYear,
  genre,
  rating,
}: AlbumItemProps) => {
  const albumItemViewingTemplate = (
    <div className="albumItemDetails">
      <div>
        <span>{artist}</span>
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{releaseYear}</span>
      </div>
      <div>
        <span>{genre}</span>
      </div>
      {/* gonna put a star calc component here? */}
    </div>
  );
  

  return <li className="albumItem">{albumItemViewingTemplate}</li>;
};

export default AlbumItem;