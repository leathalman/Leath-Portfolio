import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 25px;
  margin: 50px;
`;

const Grid = props => {
  return <Container>{props.children}</Container>;
};

export default Grid;
