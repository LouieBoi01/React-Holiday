import React from 'react';
import { useEffect } from 'react';
import { SearchPackages }  from '../components/SearchHandler/SearchPackages'

const Search = () => {
    useEffect(() => {
        document.title = "Active Life | Search"
    });
    return(
        <div style={{backgroundColor: '#F0ead6'}}>
        <div style={{padding:'2rem'}}>
            <SearchPackages/>
        </div>  
        </div>
        
    );
};




export default Search;