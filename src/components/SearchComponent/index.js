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

      {/* <CardComponent songUrl={"https://www.google.com/"} imageUrl={"https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"} songName={"Cool Song"} artist={"Cool Ass Dog"}/> */}


      {/* {results ? */}


      {results.length
        ? results.map((value, i) => {
            return <h1>{results[i].collectionName}</h1>
        })
        : <h1>No songs yet!</h1>
      }



      
 
    </div>
  );
    }


export default SearchComponent;
