import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000b3',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 2000,
      }}
    >
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

export default Loader;

export const Loader2 = () => (
  <Spinner animation="border" role="status" variant="primary" />
);
