import styled from 'styled-components';

export const GalleryWrapper = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 12px;
  margin: 12px;
  list-style: none;
`;
