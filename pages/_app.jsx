import React, { useState } from 'react';
import Router from 'next/router';

import Layout from '../src/Layouts';
import Loader from '../src/Components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assests/css/style.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoader(true);
  });
  Router.events.on('routeChangeComplete', () => setLoader(false));
  Router.events.on('routeChangeError', () => setLoader(false));

  return (
    <Layout>
      {loader && <Loader />}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}
