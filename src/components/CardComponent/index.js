import './styles.css'

function CardComponent({ imageUrl, songName, artistName, linkUrl }){
    return (
      <div className="card-component">
        <a className="card__link-container" href={linkUrl}>
          <img className='card-component__image' src={imageUrl} alt={songName} />
          <div >
            <h2>{songName}</h2>
            <p>{artistName}</p>
          </div>
        </a>
      </div>
    );
  };

export default CardComponent;
