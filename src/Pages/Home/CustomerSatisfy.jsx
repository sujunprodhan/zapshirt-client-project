import React from 'react';
import BackgroundImg1 from '../../assets/banner/be-a-merchant-bg.png';
import BackgroundImg2 from '../../assets/banner/location-merchant.png';

const CustomerSatisfy = () => {
  return (
    <div>
      <div
        className="w-11/12 mx-auto border h-[50vh] rounded-md mb-20 bg-cover bg-center bg-no-repeat bg-[#03373D]"
        style={{
          backgroundImage: `url(${BackgroundImg1}), url(${BackgroundImg2})`,
          backgroundPosition: 'top, right',
          backgroundSize: '1200px, 500px',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <div>
          <div className="p-10 mt-5 space-y-4">
            <h1 className="text-2xl font-bold text-white w-100">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="text-[#dadada] w-[500px]">
              We offer the lowest delivery charge with the highest value along with 100% safety of
              your product. Pathao courier delivers your parcels in every corner of Bangladesh right
              on time.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#CAEB66] text_primary px-5 py-2 rounded-full font-semibold">
                Become a Merchant
              </button>
              <button className="border border-[#CAEB66] px-4 py-2 rounded-full text_secondary font-semibold">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfy;
