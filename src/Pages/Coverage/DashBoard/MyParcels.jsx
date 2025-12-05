import { useQueries, useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['myparcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Parcels Request deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h1 className="text-center">All Of My Parcels: {parcels?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>cost</th>
              <th>Email</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels?.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderEmail}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === 'paid' ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-sm btn-success"
                    >
                      Pay
                    </button>
                  )}
                </td>

                <td>{parcel.deliveryStatus}</td>
                <button className="btn btn-square mx-2">
                  <FaEdit />
                </button>
                <button className="btn btn-square ">
                  <FaMagnifyingGlass />
                </button>
                <button
                  onClick={() => handleParcelDelete(parcel._id)}
                  className="btn btn-square mx-2"
                >
                  <MdDelete />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
