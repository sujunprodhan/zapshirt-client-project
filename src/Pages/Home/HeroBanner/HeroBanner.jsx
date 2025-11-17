import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BannerImg1 from '../../../assets/banner/banner1.png';
import BannerImg2 from '../../../assets/banner/banner2.png';
import BannerImg3 from '../../../assets/banner/banner3.png';
import { FaArrowUp } from 'react-icons/fa';

const HeroBanner = () => {
  return (
    <div className="w-full">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
      >
        {[BannerImg1, BannerImg2, BannerImg3].map((imgSrc, idx) => (
          <div key={idx} className="relative">
            {/* Image */}
            <img
              src={imgSrc}
              alt={`banner-${idx + 1}`}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />

            {/* Buttons — aligned left like screenshot */}
            <div className="absolute inset-0 flex items-center pointer-events-none mt-10">
              <div className="ml-12 md:ml-24 absolute top-0 mt-100 left-0 flex items-center gap-4 pointer-events-auto">
                {/* Track Parcel Button */}
                <button className="flex items-center gap-2 bg-[#C7F464] px-5 py-2 rounded-full text-black cursor-pointer font-semibold shadow-lg">
                  Track Your Parcel
                  <FaArrowUp className="rotate-45" />
                </button>

                {/* Be A Rider Button */}
                <button className="border hover:bg-secondary duration-300 px-5 py-2 rounded-full cursor-pointer border-gray-400 bg-white font-bold shadow-sm">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
