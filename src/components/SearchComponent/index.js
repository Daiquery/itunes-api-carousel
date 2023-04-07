import { useState } from 'react';
import CardComponent from '../CardComponent';

function SearchComponent(){ 
    const searchSong = (searchTerm) => {
        fetch('https://itunes.apple.com/search?term=' + searchTerm)
        .then(response => response.json())
        .then(data => setResults(data.results));
    }
    
const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);
console.log(results);

  return (
    <div className="Search">
      <input className="search" placeholder='Twista' onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={() => searchSong(searchTerm)}>Search</button>


      {results.length
        ? results.map((value, i) => {
            return <CardComponent imageUrl={value.artworkUrl100} songName={value.collectionName} artistName={value.artistName} linkUrl={value.collectionViewUrl}/>
        })
        : <h1>No songs yet!</h1>
      }



      
 
    </div>
  );
    }


export default SearchComponent;
