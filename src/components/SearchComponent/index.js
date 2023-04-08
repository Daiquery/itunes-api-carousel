import "./styles.css";
import { useState } from "react";
import CardComponent from "../CardComponent";
import CarouselComponent from "../CarouselComponent";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  const searchSong = (searchTerm) => {
    if (localStorage.getItem(searchTerm)) {
      setResults(JSON.parse(localStorage.getItem(searchTerm)).results)
    } else {
      fetch("https://itunes.apple.com/search?term=" + searchTerm + "&media=music")
      .then((response) => {
        return response.json();
      })
      .then((data) => 
      {
        localStorage.setItem(searchTerm, JSON.stringify(data));

        setResults(data.results)
      });
    }
  
  };

  return (
    <div className="search-component">
      <input
        className="search"
        placeholder="Twista"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => searchSong(searchTerm)}>Search</button>

      <CarouselComponent results={results} />
    </div>
  );
}

export default SearchComponent;
