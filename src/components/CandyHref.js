import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  color: ${props => props.fg || 'hsl(165, 70%, 60%)'};
  background-color: ${props => props.bg || 'hsl(165, 70%, 60%, 0.2)'};

  text-decoration: none;
  font-weight: bold;
  padding: 0.05em 0.4em;
  border-radius: 3px;
  white-space: nowrap;

  :hover {
    filter: brightness(1.5) saturate(1.2) hue-rotate(-15deg);
  }
`;

const CandyHref = ({ children, href, fg, bg }) => (
  <StyledA href={href} fg={fg} bg={bg}>
    {children}
  </StyledA>
);

CandyHref.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  fg: PropTypes.string,
  bg: PropTypes.string,
};

export default CandyHref;
