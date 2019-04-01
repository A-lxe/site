import React from 'react';
import styled from 'styled-components';

const highlight = `rgb(252, 188, 76)`;

const StyledDiv = styled.div`
  ::after {
    background-image: linear-gradient(
      135deg,
      ${highlight} 12.5%,
      transparent 12.5%,
      transparent 50%,
      ${highlight} 50%,
      ${highlight} 62.5%,
      transparent 62.5%,
      transparent 100%
    );
    display: inline-block;
    width: 100%;
    height: 15px;
    content: '';
    background-size: 15px 15px;
    border-top: 2.5px solid ${highlight};
  }
`;

const ThrashRule = () => <StyledDiv />;

export default ThrashRule;
