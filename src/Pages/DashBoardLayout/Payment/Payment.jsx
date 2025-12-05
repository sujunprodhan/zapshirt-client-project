import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Router/Loading';

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h1>
        Please Pay ${parcel.cost} : {parcel.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn btn-secondary">
        Pay
      </button>
    </div>
  );
};

export default Payment;
