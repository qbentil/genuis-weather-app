import './style.css'

import {MdLocationOn, MdOutlineLocationSearching} from 'react-icons/md'

import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

// const bg = require("../../../public/assets/childbg.jpg")
const bgs = [
    "https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960",
    "https://www.leitrimobserver.ie/resizer/800/-1/true/1506501941937.jpg--weekend_weather_forecast___more_rain_on_the_way.jpg?1506501942000",
    "https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960"
];
const Search =({action}) =>{
    const [location, setLocation] = useState('Accra');
    const handleForm = (e) => {
        e.preventDefault();
        action(location)
        console.log(location);
    }
    
    return(
        <div className={`w-[60%] h-full bg-gray-800 rounded-2xl rounded-r-3xl bg-cover bg-center bg-[url('https://www.leitrimobserver.ie/resizer/800/-1/true/1506501941937.jpg--weekend_weather_forecast___more_rain_on_the_way.jpg?1506501942000')]`}>
            {/* Search Nav Bar */}
            <div className='w-full h-[18%] flex justify-between items-center py-3 px-4'>
                <p className='text-lg text-white'>forecast</p>
                <div className='flex justify-between items-center  bg-black-rgba backdrop-blur-sm rounded-2xl w-[40%] px-2'>
                    <MdLocationOn color='#fff' className='font-bold' size={30} />
                    <div className='w-[85%] flex flex-col leading-5'>
                        <p className='text-[0.69rem] -mb-1 text-gray-400'>Current Location</p>
                        <p className='text-lg text-white'>Accra, Ghana</p>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className='h-[70%] w-full items-center flex flex-col justify-center'>
                <h2 className='text-lg text-white font-bold shadow-inner'>Welcome to Genius Weather forecast</h2>
                <div className='h-[0.2rem] w-28 my-4 rounded-full bg-white'></div>
                <form method='post' className='w-[80%] mx-auto flex items-center justify-around' onSubmit={(e) => handleForm(e)}>
                    <div className='flex items-center w-[90%] bg-black-rgba backdrop-blur-[2px] h-12  rounded-lg'>
                        <input 
                            type={'text'} 
                            placeholder = "Enter location" 
                            className='w-[90%] text-white h-full bg-transparent border-0 outline-0 p-2 pl-4' 
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <GoSearch color='#fff' size={24}/>
                    </div>
                    <MdOutlineLocationSearching onClick={(e) => handleForm(e)} color='#fff' className='cursor-pointer' size={24} />
                </form>
            </div>
        </div>
    )
}

export default Search;