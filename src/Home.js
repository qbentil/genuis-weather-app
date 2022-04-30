import './App.css';
import SearchBar from './components/SearchBar';


import logo from './logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
        <p>
          Welcome to Team Genius Weather App
        </p>

      </header>
    </div>
  );
}

export default Home;
