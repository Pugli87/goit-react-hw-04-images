import React from 'react';
import PropTypes from 'prop-types';
import { GalleryWrapper } from '../styled-component/ImageGalleryStyles';

const ImageGallery = ({ children }) => {
  return <GalleryWrapper>{children}</GalleryWrapper>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;
