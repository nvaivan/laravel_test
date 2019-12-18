import React from 'react';

const SearchBar = ({searchFileReader}) => {
  
    const openUpload = () => {
        
        const search = document.getElementById('search').value ;
        console.log(search);
        searchFileReader(search);
      }

    const handleChange = (event) => {

        const search = event.target.value;
        
        if (event.key === 'Enter') {
            console.log(search);
            searchFileReader(search);
                    }
        
    }
    return (
        <div class="search-bar">
            <span> Search: </span>
            <input type="text" name="search" id="search" onKeyPress={handleChange} className="upload-bar-iput" /> &nbsp;
            <i class="fas fa-search" id="btn-search" onClick={openUpload}></i>
            
        </div>
  );
}

export default SearchBar;