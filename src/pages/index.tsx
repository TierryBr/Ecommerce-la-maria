import React from 'react';
import { FooterBanner, RibbonBanner } from '../components';
import Home from './Home';

import { client } from '../lib/client';

import { ServerSide } from '../@types/sanity';

const Index = ({ products, bannerData }: ServerSide) => {
  return (
    <>
      <RibbonBanner banner={bannerData.length && bannerData[0]} />
      <Home products={products} />
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Index;
