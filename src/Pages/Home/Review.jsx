import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import customerTop from '../../assets/banner/customer-top.png';

const Review = ({ reviews }) => {
  const reviewsData = use(reviews);
  return (
    <div>
      <div className="w-11/12 mx-auto mb-20">
        <div className="text-center mb-20">
          <img src={customerTop} alt="" className="mx-auto mb-5" />
          <h1 className=" text_primary text-2xl font-bold">What our customers are sayings</h1>
          <p className="text-[#adadad] my-2">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper
            alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>
        <>
          <Swiper
            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviewsData?.map((itemReview) => (
              <SwiperSlide key={itemReview.id}>
                <ReviewCard reviews={itemReview}></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Review;
