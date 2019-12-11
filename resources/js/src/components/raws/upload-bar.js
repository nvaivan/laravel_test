import React from 'react';

const UploadBar = ({onChangeFile}) => {
  const openUpload = () => {
    document.getElementById('upload').click();
    return false;
  }
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChangeFile(file);
  }
  return (
    <div className="upload-bar">
      <span className="upload-bar-title">Files</span>
        <span className="upload-bar-btn" onClick={openUpload}>
            <span class="upload-bar-text">Upload</span> 
            <i className="fas fa-upload"></i></span>
        <form encType="multipart/form-data">
            <input type="file" name="file" className="upload-bar-iput" id="upload" onChange={handleChange} accept=".txt, .html, text/html"/>
        </form>
    </div>
  );
}

export default UploadBar;