import './Home.css';

import SearchBar from './components/SearchBar';
import { Waether } from './components/Weather';

function Home() {
  const searchWeather = (location) => {
    // alert(location)
  }
  return (
    <div className="body">
        <SearchBar action = {searchWeather} />
        <Waether />
    </div>
  );
}

export default Home;
