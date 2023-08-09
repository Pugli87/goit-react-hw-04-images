import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#007bff"
      />
    </LoaderWrapper>
  );
};

export default Loader;
