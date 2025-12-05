import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div>
      <h1>Payment Cancel please try again</h1>
      <Link to="/dashboardlayout/myparcels"><button className='btn btn-secondary text-black'>Try agin payment</button></Link>
    </div>
  );
};

export default PaymentCancel;