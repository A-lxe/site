import React from 'react';
import styled from 'styled-components';
import CandyHref from './CandyHref';
import breakpoints from '../lib/breakpoints';

const StyledDiv = styled.div`
  margin-bottom: 1.5rem;

  display: flex;

  flex-direction: column;
  align-items: flex-start;

  @media ${breakpoints.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;

const Date = styled.div`
  margin-bottom: 0.5rem;
  @media ${breakpoints.mobileL} {
    flex-shrink: 0;
    width: 7rem;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 1rem 0 0;
  }
`;

const Title = styled.div`
  // font-style: italic;
`;

const Authors = styled.div`
  font-size: 0.7rem;
  color: hsla(0, 0%, 100%, 0.5);
`;

const PaperRef = ({ href, title, journal, date, authors }) => (
  <StyledDiv href={href} target="_blank">
    <Date>
      <CandyHref href={href} target="_blank">
        {date}
      </CandyHref>
    </Date>
    <StyledA href={href} target="_blank">
      <Title>{title}</Title>
      <Authors>{authors.join(', ')}</Authors>
    </StyledA>
  </StyledDiv>
);
export default PaperRef;
