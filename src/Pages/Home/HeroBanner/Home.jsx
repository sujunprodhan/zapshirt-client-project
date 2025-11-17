import React from 'react';
import HeroBanner from './HeroBanner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import BrandLogo from './BrandLogo';
import Facility from '../Facility';
import CustomerSatisfy from '../CustomerSatisfy';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <HowItWorks/>
      <OurServices/>
      <BrandLogo/>
      <Facility/>
      <CustomerSatisfy/>
    </div>
  );
};

export default Home;