import { useState } from 'react';

function SearchComponent(){ 
    const searchSong = (searchTerm) => {
        fetch('https://itunes.apple.com/search?term=' + searchTerm)
        .then(response => response.json())
        .then(data => setResults(data.results));
    }
    
const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);

  return (
    <div className="Search">
      <input className="search" placeholder='Twista' onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={() => searchSong(searchTerm)}>Search</button>



      
 
    </div>
  );
    }


export default SearchComponent;
