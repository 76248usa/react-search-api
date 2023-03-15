import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import { useEffect } from 'react';
import searchImages from './api';
import {useState} from 'react'

function App() {
  const [images, setImages] = useState([])
  
  const handleSubmit = async (term) => {
    const result = await searchImages(term); 
    setImages(result)
  }

  return (
    <div className="App">
      <h2>Find beautiful Pictures: </h2>
     <SearchBar onSubmit = {handleSubmit} />
     <ImageList images = {images} />
    </div>
  );
}

export default App;
