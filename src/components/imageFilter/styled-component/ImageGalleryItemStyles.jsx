import styled from 'styled-components';

export const GalleryItem = styled.li`
  cursor: pointer;
`;

export const Image = styled.img`
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
