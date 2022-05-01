import './style.css'

import { FaSearchLocation } from 'react-icons/fa';
import {MdOutlineLocationSearching} from 'react-icons/md'
import { useState } from 'react';

const SearchBar =({action}) =>{
    const [location, setLocation] = useState();
    const handleSearch = (e) => {
        setLocation(e.target.value);
        action(location)
    }
    return(
        <div className="container">
            <div className='icon'>
            <FaSearchLocation   />
            </div>
            <input type='text' value={location} placeholder="Enter City to search" onChange={(e) => handleSearch(e)} />
            <div className='icon'>
                <MdOutlineLocationSearching />
            </div>
        </div>
    )
}

export default SearchBar;