import React from 'react';
import img from '../../assets/banner/live-tracking.png';
import img2 from '../../assets/banner/safe-delivery.png';

const Facility = () => {
  return (
    <div>
      <div>
        <div className="w-11/12 mx-auto flex items-center space-y-5 p-5 bg-white rounded-md mb-5 mt-20 shadow-xl">
          <img src={img} alt="" />
          <div className="h-30 border-l border-gray-300 ml-20 border-dashed "></div>
          <div className="ml-15 space-y-2">
            <h3 className="text-primary font-bold text-xl">Live Parcel Tracking</h3>
            <p className="text-base-100">
              Stay updated in real-time with our live parcel tracking feature. From pick-up to
              delivery, monitor your shipment's journey and get instant status updates for complete
              peace of mind.
            </p>
          </div>
        </div>
        <div className=" w-11/12 mx-auto flex items-center p-5 bg-white rounded-md mb-5 shadow-xl">
          <img src={img2} alt="" />
          <div className="h-30 border-l border-gray-300 ml-20 border-dashed "></div>
          <div className="ml-15 space-y-2">
            <h3 className="text-primary text-xl font-bold">100% Safe Delivery</h3>
            <p className="text-base-100">
              We ensure your parcels are handled with the utmost care and delivered securely to
              their destination. Our reliable process guarantees safe and damage-free delivery every
              time.
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto flex items-center p-5 bg-white rounded-md shadow-xl mb-20">
          <img src={img2} alt="" />
          <div className="h-30 border-l  border-gray-300 ml-20 border-dashed "></div>
          <div className="ml-15 space-y-2">
            <h3 className="text-primary font-bold text-xl">24/7 Call Center Supportg</h3>
            <p className="text-base-100">
              Our dedicated support team is available around the clock to assist you with any
              questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
