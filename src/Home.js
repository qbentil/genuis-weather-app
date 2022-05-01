import './Home.css';

import SearchBar from './components/SearchBar';
import { Waether } from './components/Weather';
import axios from 'axios'
import { useState } from 'react';

function Home() {
  const [data, setData] = useState({})
  const searchWeather = async (location) => {
    let url = "https://community-open-weather-map.p.rapidapi.com/weather"
    const options = {
        params: {
          q: location,
          lang: 'null',
          units: 'imperial',
        },
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
    };

    try {
        let res = await axios.get(url, options)
        let data = await res.data
        setData(data)
    } catch (e) {
        console.log(e.response.data.message);
        return;
    }
  }
  return (
    <div className="body">
        <SearchBar action = {searchWeather} />
        <Waether />
    </div>
  );
}

export default Home;
