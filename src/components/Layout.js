import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import '../assets/styles/main.scss';
import Footer from './Footer';

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;

const Layout = ({ children }) => (
  <StyledDiv className="layout">
    <main>{children}</main>

    <Footer />
  </StyledDiv>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
