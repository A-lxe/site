import React from 'react';
import styled from 'styled-components';
import CandyHref from './CandyHref';

const StyledFooter = styled.footer`
  font-size: 0.6rem;
  line-height: 2em;
  color: hsla(0, 0%, 100%, 0.2);
  hr {
    border-color: hsla(0, 0%, 100%, 0.03);
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

const Footer = () => (
  <StyledFooter>
    <hr />
    <div>
      <span>
        © {new Date().getFullYear()} | Built with
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
      </span>
    </div>
  </StyledFooter>
);

export default Footer;
