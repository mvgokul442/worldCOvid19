/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import Home from '../src/Containers/Home';
import homeActions from '../src/Containers/Home/actions';
import Url from '../src/utils/Url';

export default function HomeContainer({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>World Covid19 - Home</title>
      </Head>
      <Home />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const [summary, allCountries] = await Promise.all([
    homeActions.getCovidHistory(),
    homeActions.getAllCountryNames(),
  ]);
  return {
    props: {
      fallback: {
        [Url.summary + Url.allCountries]: { summary, allCountries },
      },
    },
  };
}
