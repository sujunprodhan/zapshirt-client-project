import React from 'react';
import HeroBanner from './HeroBanner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import BrandLogo from './BrandLogo';
import Facility from '../Facility';
import CustomerSatisfy from '../CustomerSatisfy';
import Review from '../Review';

const reviews = fetch('/review.json')
.then(res=>res.json())


const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <HowItWorks/>
      <OurServices/>
      <BrandLogo/>
      <Facility/>
      <CustomerSatisfy/>
      <Review reviews ={reviews}/>
    </div>
  );
};

export default Home;