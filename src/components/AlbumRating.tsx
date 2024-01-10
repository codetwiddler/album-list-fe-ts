import React from "react";

type AlbumRatingProps = {
  rating?: number | undefined;
};

const AlbumRating = ({ rating }: AlbumRatingProps) => {
  const totalStars = 5;

  //Generate an array of stars from the given rating compared to the
  //totalStars value. We could theoretically adjust later in life
  //to a 10 star rating system this way more easily.
  const getStars = (rating: number | undefined) => {
    
    //No rating? We'll just say that
    if (rating === undefined || rating === 0) {
      return <span className="noRatingTxt">...no rating...</span>;
    } else {
      //Or, we generate an array of stars based on the rating
      return Array.from({ length: totalStars }, (_, i) => {
        const key = i + 1;
        return key <= rating ? (
          <span key={key} className="filledStar">★</span>
        ) : (
          <span key={key} className="emptyStar">☆</span>
        );
      });
    }
  };

  //Get the star rating or the no rating element
  const ratingElement = getStars(rating);

  return (
    <div className="albumItemDetails__row">
      <div className="albumRating">{ratingElement}</div>
    </div>
  );
};

export default AlbumRating;
