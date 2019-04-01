import React from 'react';
import styled from 'styled-components';
import CandyHref from '../components/CandyHref';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const StyledDiv = styled.div`
  margin: 5rem 0;
`;

const RightP = styled.p`
  text-align: right;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledDiv>
      <p>
        <i>"There's nothing here... we'll have to press on..."</i>
      </p>
      <RightP>
        <i>"C-can't we just go</i> <CandyHref href="/">home</CandyHref>{' '}
        <i>instead?"</i>
      </RightP>
    </StyledDiv>
  </Layout>
);

export default NotFoundPage;
