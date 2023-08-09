import React from 'react';
import { Overlay, ModalContent, Image } from '../styled-component/ModalStyles';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, alt, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent>
        <Image src={imageUrl} alt={alt} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
