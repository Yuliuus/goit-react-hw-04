import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import axios from "axios";

function App() {
  const [pictures, setPictures] = useState([]);

  // useEffect(() => {
  //   async function fetchPictures() {
  //     const responce = await axios.get(
  //       "https://api.unsplash.com/photos/?client_id=2v-3VDmPRDhk6q-mtAinGvXCqV_J9cy1VgSnNGEjX7s"
  //     );
  //     setPictures(responce.data)
  //     console.log(responce.data);
  //   }
  //   fetchPictures();
  // }, []);

  return (
    <div className={css.galleryWrap}>
      <SearchBar />
      {pictures.length > 0 && <ImageGallery items={pictures} />}
    </div>
  );
}

export default App;
