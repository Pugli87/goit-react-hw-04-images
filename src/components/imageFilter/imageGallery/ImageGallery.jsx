import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GalleryWrapper = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 12px;
  margin: 12px;
  list-style: none;
`;

const ImageGallery = ({ children }) => {
  return <GalleryWrapper>{children}</GalleryWrapper>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;
