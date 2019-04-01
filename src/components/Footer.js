import React from 'react';
import styled from 'styled-components';
import CandyHref from './CandyHref';

const StyledFooter = styled.footer`
  margin-top: 1rem;
  font-size: 0.6rem;
  color: hsla(0, 0%, 100%, 0.2);
  line-height: 2em;
  hr {
    border-color: hsla(0, 0%, 100%, 0.03);
  }
`;

const Footer = () => (
  <StyledFooter>
    <hr />© {new Date().getFullYear()} | Built with
    {` `}
    <CandyHref
      href="https://www.gatsbyjs.org"
      fg="hsl(270, 80%, 60%, 1)"
      bg="hsl(270, 80%, 60%, 0.2)"
    >
      Gatsby
    </CandyHref>{' '}
    and{' '}
    <CandyHref
      href="https://www.styled-components.com/"
      fg="hsl(340, 60%, 65%)"
      bg="hsl(340, 60%, 65%, 0.2)"
    >
      styled components
    </CandyHref>{' '}
    | Hosted{' '}
    <CandyHref
      href="https://zeit.co/now"
      fg="hsl(0, 0%, 50%)"
      bg="hsl(0, 0%, 0%, 0.2)"
    >
      Now
    </CandyHref>{' '}
  </StyledFooter>
);

export default Footer;
