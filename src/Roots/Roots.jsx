import React from 'react';
import Navber from '../Layoute/Navber';
import { Outlet } from 'react-router';
import Footer from '../Layoute/Footer';

const Roots = () => {
  return (
    <div className="bg-[#EAECED]">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Roots;