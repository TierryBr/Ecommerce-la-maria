import React from 'react';
import { FooterBanner, RibbonBanner } from '../components';
import Home from './Home';

const Index = () => {
  return (
    <>
      <RibbonBanner />
      <Home />
      <FooterBanner />
    </>
  );
};

export default Index;
