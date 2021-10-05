/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import Feeds from '../src/Containers/Feeds';
import feedActions from '../src/Containers/Feeds/actions';
import Url from '../src/utils/Url';

export default function FeedsContainer({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>World Covid19 - Feeds</title>
      </Head>
      <Feeds />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const feedsData = await feedActions.getFeeds();

  return {
    props: {
      fallback: {
        [Url.news]: feedsData,
      },
    },
  };
}
