import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      // if(user?.email){
        const res = await axiosSecure.get(`/payments?email=${user?.email}`);
        return res?.data;
      // }
    },
  });

  return (
    <div>
      <h1 className="text-3xl mx-3 mt-5 font-bold text_primary">
        Payment History: {payments.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-semibold text_primary">
              <th></th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Tracking Id</th>
              <th>Transaction Id</th>
              <th>More Info</th>
            </tr>
          </thead>
          {payments?.map((payment, index) => (
            <tr key={payment._id} className="font-semibold">
              <th className="text_primary text-xl font-semibold">{index + 1}</th>
              <td className="text-xl font-semibold">{payment.parcelName}</td>
              <td>$ {payment.amount}</td>
              <td>{payment.trackingId}</td>
              <td>{payment.transactionId}</td>
              <button className="btn btn-secondary btn-sm">View</button>
            </tr>
          ))}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
