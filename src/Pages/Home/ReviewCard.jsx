import React from 'react';
import qutetion from '../../assets/banner/reviewQuote.png'

const ReviewCard = ({ reviews }) => {
  const { review, userName, user_photoURL } = reviews || {};
  return (
    <div className="max-w-md bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      {/* Quote icon */}
      <div className="flex items-start gap-4">
        <div className="text-teal-300 text-3xl leading-none select-none">
          <img src={qutetion} alt="" className='mx-auto' />
        </div>
        <p className="text-sm text-primary leading-6">{review}</p>
      </div>

      {/* Divider */}
      <div className="mt-4">
        <div className="border-t border-dashed border-gray-300" />
      </div>

      {/* User Section */}
      <div className="mt-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-none bg-teal-900">
          <img src={user_photoURL}  className="w-full h-full object-cover" />
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-800">{userName}</div>
          <div className="text-xs text-primary font-semibold">Verified Customer</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
