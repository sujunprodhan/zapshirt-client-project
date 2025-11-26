import React from 'react';
import BookingIcon from '../../assets/banner/bookingIcon.png'
const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text_primary text-2xl font-bold">How It Works</h1>
      <div>
        <div className="grid grid-cols-4 gap-4 space-y-10 ">
          <div className="bg-white mt-5 p-3 rounded-md space-y-3 shadow-xl">
            <img src={BookingIcon} alt="" />
            <h3 className="text_primary font-bold">Booking Pick & Drop</h3>
            <p className="text-[#adadad]">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-white mt-5 p-3 rounded-md space-y-3 shadow-xl">
            <img src={BookingIcon} alt="" />
            <h3 className="text_primary font-bold">Cash On Delivery</h3>
            <p className="text-[#adadad]">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-white mt-5 p-3 rounded-md space-y-3 shadow-xl">
            <img src={BookingIcon} alt="" />
            <h3 className="text_primary font-bold">Delivery Hub</h3>
            <p className="text-[#adadad]">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
          <div className="bg-white mt-5 p-3 rounded-md space-y-3 shadow-xl">
            <img src={BookingIcon} alt="" />
            <h3 className="text_primary font-bold">Booking SME & Corporate</h3>
            <p className="text-[#adadad]">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
