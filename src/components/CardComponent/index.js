function CardComponent({ imageUrl, songName, artistName, linkUrl }){
    return (
      <div className="card-component">
        <a href={linkUrl}>
          <img src={imageUrl} alt={songName} />
          <div>
            <h2>{songName}</h2>
            <p>{artistName}</p>
          </div>
        </a>
      </div>
    );
  };

export default CardComponent;
