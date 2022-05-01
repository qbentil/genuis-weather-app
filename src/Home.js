import './Home.css';

import SearchBar from './components/SearchBar';
import { Waether } from './components/Weather';

function Home() {
  return (
    <div className="body">
        <SearchBar />
        <Waether />
    </div>
  );
}

export default Home;
