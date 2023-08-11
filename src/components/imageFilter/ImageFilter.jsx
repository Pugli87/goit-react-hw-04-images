import React, { useState } from 'react';
//import axios from 'axios';
import SearchBar from './searchBar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchArticlesWithQuery } from '../../api/Api';

//const API_KEY = '37119471-67d3015a83a24c7694e1d7310';
//const IMAGES_PER_PAGE = 12;

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

    const data = await fetchArticlesWithQuery(searchQuery, 1);

      Notify.success(`Hooray! We found ${data.totalHits} images.`);
      setImages(data.hits);
      setCurrentPAge(1); // Reseteamos la página actual a 1

      setLoading(false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
  
      const nextPage = currentPage + 1;
      const data = await fetchArticlesWithQuery(query,nextPage)
      if (data.hits.length > 0) {
        setImages(prevImages => [...prevImages, ...data.hits]); // Corregido aquí
        setCurrentPAge(nextPage);
      } else {
        Notify.warning('No more images to load.');
      }
    
      setLoading(false);
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
      {images.length !== 0 && <Button onClick={handleLoadMore} id="load-more"/>}

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
