/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from './components/footer';
import Sidebar from './components/sidebar';

function Layout(props) {
  return (
    <div>
      <Sidebar />
      <div style={{ minHeight: '84.5vh', margin: '20px 0px' }}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <Container>{props.children}</Container>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
