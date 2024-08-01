import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import { fetchPictures } from "../../articles-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newTopic) => {
    setPictures([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPictures() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPictures(topic, page);
        setPictures((prevPictures) => {
          return [...prevPictures, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPictures();
  }, [topic, page]);

  return (
    <>
      <div className={css.galleryWrap}>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {pictures.length > 0 && (
          <ImageGallery items={pictures} onModalOpen={handleOpenModal} />
        )}
        {pictures.length > 0 && !loading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
      <ImageModal
        item={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
