import React from 'react';
import servicesImg from '../../assets/banner/service.png';

const OurServices = () => {
  return (
    <div>
      <div className="bg-[#03373D] w-11/12 mx-auto min-h-screen mb-20 rounded-md p-5">
        <h1 className="text-center text-white text-3xl font-bold py-5">Our Services</h1>
        {/* Services Card */}
        <div className="grid grid-cols-3 gap-5 rounded-md p-10">
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
          <div className="bg-white p-5 rounded-md shadow-2xl space-y-3 hover:bg-base-300 duration-700">
            <img src={servicesImg} alt="" className="mx-auto bg-gray-300 p-2 rounded-full" />
            <h1 className="text_primary text-center font-bold text-xl">
              Express & Standard Delivery
            </h1>
            <p className="text-[#adadad] text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and
              Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to
              drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
