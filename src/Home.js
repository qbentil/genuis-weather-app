import './Home.css';

import Search from './components/Search';
import { Weather } from './components/Weather';
import axios from "axios";
import { useState } from 'react';

function Home() {
  const [getDefault, setGetDefault] = useState(true)
  const [data, setData] = useState();
  const searchWeather = async (location) => {
    setGetDefault(false)
    let url = "https://community-open-weather-map.p.rapidapi.com/weather";
    const options = {
      params: {
        q: location,
        lang: "null",
        units: "imperial",
      },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    };

    try {
      let res = await axios.get(url, options);
      let data = await res.data;
      setData(data);
    } catch (e) {
      console.log(e.response.data.message);
      return;
    }
  };
  
  // Fetch Default Data
  if(getDefault)
  {
    searchWeather("Accra")
  }
  return (

    <div className="w-screen h-screen bg-gray-600 items-center flex justify-center">

      <div className='w-[80%] h-[80%] bg-white mx-auto items-center flex  rounded-2xl'>
          <Search action = {searchWeather} />
          <Weather data = {data} />
      </div>

    </div>
  );
}

export default Home;
