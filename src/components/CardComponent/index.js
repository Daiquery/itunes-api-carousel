function CardComponent(songUrl, imageUrl, songName, artist) {
  return (
    <a href={songUrl}>
      <div className="Image">
        <img src={`${imageUrl}`} />
      </div>
      <h2>{songName}</h2>
     <h5>{artist}</h5>
    </a>
  );
}

export default CardComponent;
