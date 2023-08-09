import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from '../styled-component/ButtonStyles';

const Button = ({ onClick }) => {
  return <LoadMoreButton onClick={onClick}>Load More</LoadMoreButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
