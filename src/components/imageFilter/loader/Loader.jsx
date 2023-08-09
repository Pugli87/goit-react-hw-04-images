import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderWrapper } from '../styled-component/LoaderWrapperStyles';

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
