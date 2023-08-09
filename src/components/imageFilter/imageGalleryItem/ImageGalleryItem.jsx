import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from '../styled-component/ImageGalleryItemStyles';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <Image src={imageUrl} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
