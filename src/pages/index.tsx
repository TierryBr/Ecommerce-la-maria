import React from 'react';
import { FooterBanner, RibbonBanner } from '../components';
import Home from './Home';

import { getData } from '@/utils/fetchData';

import { ServerSide } from '../@types/sanity';

const Index = ({ products, banners }: ServerSide) => {
  return (
    <>
      <RibbonBanner banner={banners} />
      <Home products={products} />
      <FooterBanner footerBanner={banners} />
    </>
  );
};

export const getServerSideProps = async () => {
  const resProducts = await getData('product');
  const resBanner = await getData('banner');

  return {
    props: {
      products: resProducts.products,
      result: resProducts.result,
      banners: resBanner.banner[0],
    },
  };
};

export default Index;
