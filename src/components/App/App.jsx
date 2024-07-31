import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import { fetchPictures } from "../../articles-api";

function App() {
  const [pictures, setPictures] = useState([]);


  useEffect(() => {
    async function getPictures() {
      const data = await fetchPictures();
      setPictures(data);
      console.log(data);
    }
    getPictures();
  }, []);

  const handleSearch = (newTopic) => {
    console.log(newTopic);
  };

  return (
    <div className={css.galleryWrap}>
      <SearchBar onSearch={handleSearch} />
      {pictures.length > 0 && <ImageGallery items={pictures} />}
    </div>
  );
}

export default App;
