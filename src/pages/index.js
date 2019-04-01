import React from 'react';
import styled from 'styled-components';
import CandyHref from '../components/CandyHref';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ThrashRule from '../components/ThrashRule';

const HeaderDiv = styled.div`
  margin-top: 5rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'alex',
        'aub',
        'alxe',
        'aubuchon',
        'dev',
        'alex aubuchon',
        'gatsby',
        'react',
        'styled-components',
        'now',
      ]}
    />

    <HeaderDiv>
      <h1>Hi, I'm Alex Aubuchon!</h1>
    </HeaderDiv>

    <ThrashRule />

    <p>
      This is something of a personal site in progress -- hopefully I'll add
      more sections, some useful information, and maybe some cute animations!
    </p>
    <p>
      To be honest, I'm not great at frontend - but this is fun so I'll give it
      my all :)
    </p>

    <p>
      You can reach me at{' '}
      <CandyHref href="https://github.com/a-lxe/">GitHub</CandyHref> and{' '}
      <CandyHref href="https://linkedin.com/in/a-lxe/">LinkedIn</CandyHref>, or
      send me an <CandyHref href="mailto:alex@aub.dev">email</CandyHref>.
    </p>
  </Layout>
);

export default IndexPage;
