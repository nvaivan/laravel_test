import React from 'react';

const SearchBar = ({onChangeLogin}) => {
  const openUpload = () => {
    document.getElementById('upload').click();
    return false;
  }
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChangeFile(file);
  }
  return (
    <div class="search-bar">
        <form >
            <span> Search: </span>
            <input type="text" name="search" className="upload-bar-iput" /> &nbsp;<i class="fas fa-search"></i>
        </form>
        
    </div>
  );
}

export default SearchBar;