import React, { Component } from 'react';
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
export default class ImageFilter extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    modalImage: null,
    currentPage: 1, // Nuevo contador para la página actual
  };

  handleSearch = async searchQuery => {
    this.setState({ query: searchQuery, images: [], loading: true });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
      );
      Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
      this.setState({ images: response.data.hits, currentPage: 1 }); // Reseteamos la página actual a 1
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = async () => {
    const { query, currentPage } = this.state;
    this.setState({ loading: true });

    try {
      const nextPage = currentPage + 1; // Incrementamos el contador de página en 1
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
      );

      if (response.data.hits.length > 0) {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: nextPage, // Actualizamos la página actual en el estado
        }));
      } else {
        alert('No more images to load.');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleImageClick = imageUrl => {
    this.setState({ modalImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ modalImage: null });
  };

  render() {
    const { images, loading, modalImage } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              imageUrl={image.webformatURL}
              alt={image.tags}
              onClick={() => this.handleImageClick(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {loading && <Loader />}
        {images.length !== 0 && <Button onClick={this.handleLoadMore} />}

        {modalImage && (
          <Modal
            imageUrl={modalImage}
            alt="Modal Image"
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
