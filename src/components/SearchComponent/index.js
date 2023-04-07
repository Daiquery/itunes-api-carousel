import './styles.css'
import { useState } from 'react';
import CardComponent from '../CardComponent';
import CarouselComponent from '../CarouselComponent';

function SearchComponent(){ 
    const searchSong = (searchTerm) => {
        fetch('https://itunes.apple.com/search?term=' + searchTerm + '&media=music')
        .then(response => response.json())
        .then(data => setResults(data.results));
    }
    
const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);
console.log(results);

  return (
    <div className="search-component">
      <input className="search" placeholder='Twista' onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={() => searchSong(searchTerm)}>Search</button>

      <CarouselComponent results={results}/>




      
 
    </div>
  );
    }


export default SearchComponent;
