import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 5px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const Button = styled.button`
  display: inline-block;
  background-color: white;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const Svg = styled.svg`
  width="18px";
  height="26px"; 
  viewBox="0 0 1244.000000 1280.000000";
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query.trim());
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchBarWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
          <Button type="submit">
            <Svg
              width="18px"
              height="26px"
              viewBox="0 0 1244.000000 1280.000000"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#3f51b5"
                stroke="none"
              >
                <path
                  d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
                  -2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
                  452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
                  251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
                  189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
                  -2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
                  3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
                  417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
                  -949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
                  -618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
                  -964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
                  323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
                  1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"
                />
              </g>
            </Svg>
          </Button>
        </Form>
      </SearchBarWrapper>
    );
  }
}
