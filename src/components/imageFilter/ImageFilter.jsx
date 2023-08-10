import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './searchBar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '37119471-67d3015a83a24c7694e1d7310';
const IMAGES_PER_PAGE = 12;

const ImageFilter = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentPage, setCurrentPAge] = useState(1); // Nuevo contador para la página actual

  const handleSearch = async searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
      );
      Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
      setImages(response.data.hits);
      setCurrentPAge(1); // Reseteamos la página actual a 1
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
  
    try {
      const nextPage = currentPage + 1;
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
      );
  
      if (response.data.hits.length > 0) {
        setImages(prevImages => [...prevImages, ...response.data.hits]); // Corregido aquí
        setCurrentPAge(nextPage);
      } else {
        Notify.warning('No more images to load.');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleImageClick = imageUrl => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            alt={image.tags}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      {loading && <Loader />}
      {images.length !== 0 && <Button onClick={handleLoadMore} />}

      {modalImage && (
        <Modal
          imageUrl={modalImage}
          alt="Modal Image"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ImageFilter;
