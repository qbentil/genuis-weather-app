import "./style.css";

import iconify from "../../assets/iconify.png";
import moment from "moment";

export const Weather = ({ data }) => {
  // searchWeather(location);
  const { main, description, icon } = data?.weather[0] || {main: "Clouds",description: "overcast clouds",icon: '04d'};
  const {temp,feels_like,temp_min,temp_max,pressure,humidity,sea_level,grnd_level,} = data?.main ||  {
    temp: 78.4,
    feels_like: 80.04,
    temp_min: 78.4,
    temp_max: 78.4,
    pressure: 1011,
    humidity: 87,
    sea_level: 1011,
    grnd_level: 1007
  };
  const { speed } = data?.wind || { speed: 4.56, deg: 260, gust: 6.38 };
  const { country } = data?.sys || { country: 'GH', sunrise: 1651816048, sunset: 1651860479 };
  const { timezone } = data?.timezone || {timezone: 1};
  const { city } = data?.name || {city: 'Accra'};
  // alert(data.name)
  
  const getTime = (offset) => {
    // return offset;
    let d = new Date();

    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    let nd = new Date(utc + (3600*offset));

    // return  nd.toLocaleString();
    return  moment(nd.toLocaleString()).format('LLLL');
    

  }
  return (
    <div className="w-[40%] h-full bg-transparent rounded-r-2xl">
      {/* Search Nav Bar */}
      <div className="w-full h-[10%] flex justify-between items-center py-3 px-4">
        <div className="w-[40%]"></div>
        <div className="w-[60%] flex justify-around items-center">
          <p className="text-sm text-gray-800 cursor-pointer pb-1 border-b-2 border-blue-900">
           Weather
          </p>
          <p className="text-sm text-gray-800 cursor-pointer pb-1">Map</p>
          <p className="text-sm text-gray-800 cursor-pointer pb-1">News</p>
        </div>
      </div>

      {/*  */}
      <div className="w-[85%] mx-auto items-center">
        <h1 className="text-[2rem] font-bold font-sans">Today</h1>
      </div>

      {/* Main Weather Info */}
      <div className="w-[95%] text-white mt-2 flex items-center h-60 mx-auto rounded-xl shadow-inner bg-cover bg-center bg-[url('https://www.leitrimobserver.ie/resizer/800/-1/true/1506501941937.jpg--weekend_weather_forecast___more_rain_on_the_way.jpg?1506501942000')]">
        <div className="flex items-center h-full w-full bg-black-rgba backdrop-blur-sm rounded-xl">
        <div className="flex flex-col  justify-around w-[82%] h-[50%] pl-5">
          <div className="flex items-center">
            <p className="text-[4rem] font-bold">{temp}</p>
            <sup className="text-sm font-bold">O</sup>
          </div>
          <div className="flex justify-around items-center">
            <p className="text-[2.1rem]">{main}</p>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather-icon" className="-ml-2 w-16 h-16 shadow-2xl" />
          </div>
          <p className="text-[0.8rem] text-gray-300">
            {getTime(data?.timezone || 0)}
          </p>
          <p className="text-[1rem] text-gray-300">
            <span>{data?.name || "Accra"}</span> - {country}
          </p>
        </div>
        <div className="w-[0.1rem] h-[75%] bg-gray-400"></div>
        <div className="flex flex-col  justify-around w-[50%] h-[60%] pl-5">
          <p className="text-[1rem] my-1 text-gray-200 capitalize">
            {description}
          </p>
          <p className="text-[0.83rem] text-gray-300">
            RealFeel {feels_like} <sup>o</sup>
          </p>
          <p className="text-[0.83rem] text-gray-300">
            Humidity: {humidity}%
          </p>
          <p className="text-[0.83rem] text-gray-300">
            Min Temp: {temp_min}<sup>o</sup>,
          </p>
          <p className="text-[0.83rem] text-gray-300">
          Max Temp: {temp_max}<sup>o</sup>,
          </p>
          <p className="text-[0.83rem] text-gray-300">
            Wind Speed: {speed} km/h
          </p>
          <p className="text-[0.83rem] text-gray-300">
            Pressure: {pressure} Pa
          </p>
        </div>
        </div>
      </div>

      {/*  */}
      <div className="w-[80%] mx-auto items-center mt-1">
        <h1 className="text-[1.7rem] font-bold font-sans">Extras</h1>
      </div>

      {/* Tabs */}
      <div className="w-[85%] h-[25%] flex justify-around items-center  mx-auto">
        <div className="flex flex-col px-[0.2rem] pb-1 justify-around w-[45%] h-full pl-5 bg-transparent shadow-inner rounded-xl shadow-gray-300 border-0 border-gray-300">
          <div className="flex items-center">
            <p className="text-[3rem] font-bold">32</p>
            <sup className="text-sm font-bold">O</sup>
          </div>
          <div className="flex justify-around items-center mt--1">
            <p className="text-[2rem]">Sunny</p>
            <img src={iconify} alt="weather-icon" className="w-12 h-12" />
          </div>
          <p className="text-[0.75rem] text-gray-500">
            Monday 22 November, 1999
          </p>
        </div>
        <div className="flex flex-col px-[0.2rem] pb-1 justify-around w-[45%] h-full pl-5 bg-transparent shadow-inner rounded-xl shadow-gray-300 border-0 border-gray-300">
          <div className="flex items-center">
            <p className="text-[3rem] font-bold">32</p>
            <sup className="text-sm font-bold">O</sup>
          </div>
          <div className="flex justify-around items-center mt--1">
            <p className="text-[2rem]">Sunny</p>
            <img src={iconify} alt="weather-icon" className="w-12 h-12" />
          </div>
          <p className="text-[0.75rem] text-gray-500">
            Monday 22 November, 1999
          </p>
        </div>
      </div>
    </div>
  );
};

