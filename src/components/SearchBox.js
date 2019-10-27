import React from 'react';
const SearchBox = ({searchChange}) =>{
    return(
        <div>
             <input type ='search' onChange = {searchChange} className ='form-control-lg mt-2' placeholder = 'Search Robots'/>
        </div>
        );
       
}

export default SearchBox;