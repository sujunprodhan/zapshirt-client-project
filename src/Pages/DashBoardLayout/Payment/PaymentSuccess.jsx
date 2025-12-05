import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get('session_id');
  const axiosSecure = useAxiosSecure();
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then((res) => {
        console.log(res.data);
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId.trackingId,
        });
      });
    }
    ;
  },
  [sessionId, axiosSecure]
);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Payment Successfully</h1>
      <p>Your TransactionId{paymentInfo?.transactionId}</p>
      <p>Your TrackingId{paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
