import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
`;

const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: auto;
`;

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
