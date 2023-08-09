import styled from 'styled-components';

export const Overlay = styled.div`
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

export const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
`;

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: auto;
`;
