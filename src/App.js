import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="App">
    <SearchComponent />
      <div className="cardHolder">
        <h1>card here</h1>
        <h1>card here</h1>
        <h1>card here</h1>
      </div>

      <div className="controlButtons">
        <h1>button left</h1>
        <h1>button right</h1>
      </div>

      <button>play button</button>
{/* 
      {songs.map(()=> {
        dynamically render cards from songs
      })} */}


      
 
    </div>
  );
}

export default App;
