import './style.css'

import { FaSearchLocation } from 'react-icons/fa';
import {MdOutlineLocationSearching} from 'react-icons/md'
import { useState } from 'react';

const SearchBar =({action}) =>{
    const [location, setLocation] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        action(location)
    }
    
    return(
        <form onSubmit={(e) => handleSearch(e)} className="container">
            <div className='icon'>
                <MdOutlineLocationSearching />
            </div>
            <input type='text' value={location} placeholder="Accra" onChange={(e) => setLocation(e.target.value)} />
            <button className='icon'>
                <FaSearchLocation   />
            </button>
        </form>
    )
}

export default SearchBar;