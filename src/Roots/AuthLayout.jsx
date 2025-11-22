import React from 'react';
import logo from '../assets/banner/logo.png';
import { Outlet } from 'react-router';
import AuthImg from '../assets/banner/authImage.png';

const AuthLayout = () => {
  return (
    <div>
      <div className="flex items-center w-11/12 mx-auto">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold text-primary">zafShift</h1>
      </div>
      <div className='container flex items-center w-11/12 mx-auto'>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <div className='flex-1'>
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
