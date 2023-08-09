import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GalleryItem = styled.li`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 15px;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 0px 2px 4px -1px #3f51b5, 0px 4px 5px 0px #3f51b5,
      0px 1px 10px 0px #3f51b5;
  }
`;

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
