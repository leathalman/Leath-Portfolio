import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 40px;
  margin: 10px;
`;

const Grid = (props) => {
  return <Container>{props.children}</Container>;
};

export default Grid;
