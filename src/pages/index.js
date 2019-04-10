import React from 'react';
import styled from 'styled-components';
import CandyHref from '../components/CandyHref';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ThrashRule from '../components/ThrashRule';
import PaperRef from '../components/PaperRef';
import breakpoints from '../lib/breakpoints';

const HeaderDiv = styled.div`
  @media ${breakpoints.mobileL} {
    margin-top: 3rem;
  }
  @media ${breakpoints.laptop} {
    margin-top: 5rem;
  }
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

    <ThrashRule />

    <h2>Publications</h2>

    <PaperRef
      title="Classification of Electronic Devices and Software Processes via Unintentional Electronic Emissions With Neural Decoding Algorithms"
      journal="IEEE Transactions on Electromagnetic Compatibility"
      date="March 2019"
      authors={[
        'Laura J. Mariano',
        'Alexander Aubuchon',
        'Troy Lau',
        'Onur Ozdemir',
        'Tomo Lazovich',
        'John Coakley',
      ]}
      href="https://ieeexplore.ieee.org/document/8674781"
    />

    <PaperRef
      title="Real-time Machine Learning Prediction of an Agent-Based Model for Urban Decision-making (Extended Abstract)"
      journal="AAMAS '18 Proceedings of the 17th International Conference on Autonomous Agents and MultiAgent Systems"
      date="July 2018"
      authors={[
        'Yan Zhang',
        'Arnaud Grignard',
        'Kevin Lyons',
        'Alexander Aubuchon',
        'Kent Larson',
      ]}
      href="https://dl.acm.org/citation.cfm?id=3238109"
    />
  </Layout>
);

export default IndexPage;
