/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import Who from '../src/Containers/Who';
import Url from '../src/utils/Url';
import whoActions from '../src/Containers/Who/actions';

export default function WhoContainer({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>World Covid19 - Who News</title>
      </Head>
      <Who />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const whoData = await whoActions.getWhoNews();

  return {
    props: {
      fallback: {
        [Url.news]: whoData,
      },
    },
  };
}
