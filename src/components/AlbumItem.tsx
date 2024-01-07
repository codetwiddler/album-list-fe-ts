import React from "react";

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