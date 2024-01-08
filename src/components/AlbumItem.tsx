import React from "react";
import AlbumRating from "./AlbumRating";

//Making Props a type for each component explicitly defines the
//kind of data the component is designed to work with. Naming
//per-component arguably enhances understanding.
type AlbumItemProps = {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  rating?: number;
  labels: AlbumLabels; // Adding the labels prop
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
  labels
}: AlbumItemProps) => {
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
    </div>
  );

  return <li className="albumItem">{albumItemViewingTemplate}</li>
};

export default AlbumItem;
