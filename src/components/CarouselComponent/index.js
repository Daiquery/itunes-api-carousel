import './styles.css';
import React, { useState } from 'react';
import CardComponent from '../CardComponent';

const CarouselComponent = ({ results }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? results.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === results.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__cards">
        {results.slice(currentSlide, currentSlide + 3).map((song, index) => (
          <div>
            <CardComponent
              imageUrl={song.artworkUrl100}
              songName={song.collectionName}
              artistName={song.artistName}
              linkUrl={song.collectionViewUrl}
            />
          </div>
        ))}
      </div>

{
    results.length ? (
        <div className="controls">
        <button onClick={handlePrevSlide}>
        ←
      </button>
      <button onClick={handleNextSlide}>
      →
      </button>
      </div>
    ) : null
}

      

    </div>
  );
};

export default CarouselComponent;
