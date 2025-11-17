import Marquee from 'react-marquee-slider';
import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/amazon_vector.png';
import brand3 from '../../../assets/brands/casio.png';
import brand4 from '../../../assets/brands/moonstar.png';
import brand5 from '../../../assets/brands/randstad.png';
import brand6 from '../../../assets/brands/randstad.png';
import brand7 from '../../../assets/brands/star.png';
import brand8 from '../../../assets/brands/start_people.png';


const BrandLogo = () => {

  return (
    <div>
        <h1 className='text-center text-2xl font-bold text-primary mt-20 mb-10'>We've helped thousands of sales teams</h1>
      <div className="bg-gray-100 py-4 flex">
        <marquee behavior="" direction="">
          <div className="flex gap-10">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default BrandLogo;
