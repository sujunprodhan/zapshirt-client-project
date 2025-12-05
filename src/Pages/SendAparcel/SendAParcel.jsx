import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendAParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    axios,
    // formState: { errors },
  } = useForm({ defaultValues: { parcelType: 'document' } });
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const serviceCenters = useLoaderData();
  const regionsDuplicat = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicat)];

  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((iteam) => iteam.region === region);
    const districts = regionDistricts.map((dis) => dis.district);
    return districts;
  };

  const handelSendPercel = (data) => {
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWegit = parseFloat(data.pacelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWegit < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWegit = parcelWegit - 3;
        const extraCharge = isSameDistrict ? extraWegit * 40 : extraWegit * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;

    Swal.fire({
      title: 'Please Confirm the cost?',
      text: `You will be charged ${cost} Taka`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Take It!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Save To Parcel
        axiosSecure.post('/parcels', data).then((res) => {
          if (res.data.insertedId) {
            navigate('/dashboardlayout/myparcels');
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Confirm!',
              text: 'parcel have created please pay.',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-sm">
      <h2 className="text-4xl font-bold text_primary">Send A Parcel</h2>
      <p className="text-xl text_primary font-bold mt-4">Enter your parcel details</p>

      <form onSubmit={handleSubmit(handelSendPercel)} className="mt-6 space-y-6">
        {/* parcel type + top inputs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                value="document"
                {...register('parcelType')}
                className="form-radio"
              />
              <span className="text-xl font-semibold text_primary">Document</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                value="non-document"
                {...register('parcelType')}
                className="form-radio"
              />
              <span className="text-xl font-semibold text_primary">Non-Document</span>
            </label>
          </div>

          {/* Form Fild */}
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Parcel Name</label>
            <input
              {...register('parcelName', { required: true })}
              placeholder="Parcel Name"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
            {/* {errors.parcelName && <p className="text-xs text-red-500 mt-1">Required</p>} */}
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Parcel Weight (KG)</label>
            <input
              type="number"
              step="0.1"
              {...register('pacelWeight', { required: true, min: 0.1 })}
              placeholder="Parcel Weight (KG)"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
            {/* {errors.parceleight && (
              <p className="text-xs text-red-500 mt-1">Please enter a valid weight</p>
            )} */}
          </div>
        </div>

        {/* two-column sender & receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender */}
          <div>
            <h3 className="text-xl font-bold text_primary mb-3">Sender Details</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="">Sender Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...register('senderName', { required: true })}
                  placeholder="Sender Name"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="">Sender Address</label>
                <input
                  type="text"
                  {...register('senderAddress')}
                  placeholder="Address"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="">Sender Email</label>
                <input
                  type="email"
                  {...register('senderEmail')}
                  defaultValue={user?.email}
                  placeholder="Sender Email No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="">Sender Phone</label>
                <input
                  type="number"
                  {...register('senderPhone')}
                  placeholder="Sender Phone No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              {/* Sender Region */}
              <div>
                <label htmlFor="">Select District</label>
                <select
                  {...register('senderRegion')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option disabled={true}>Select your District</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              {/* Sender District */}
              <div>
                <label htmlFor="">Sinder District</label>
                <select
                  {...register('senderDistrict')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option disabled={true}>Select District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="">Info Message</label>
                <textarea
                  {...register('pickupInstruction')}
                  rows={3}
                  placeholder="Pickup Instruction"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-xl font-bold text_primary mb-3">Receiver Details</h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="">Riceiver Name</label>
                <input
                  type="text"
                  {...register('receiverName', { required: true })}
                  placeholder="Receiver Name"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              {/* Recevier Address */}
              <div>
                <label htmlFor="">Recever Address</label>
                <input
                  type="text"
                  {...register('receiverAddress')}
                  placeholder="Receiver Address"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              {/* Reciver Email */}
              <div>
                <label htmlFor="">Receiver Email</label>
                <input
                  type="email"
                  {...register('receiverEmail')}
                  placeholder="Receiver Email No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              {/* Receiver Phone */}
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  {...register('receiverPhone')}
                  placeholder="Receiver Contact No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              {/* Riciver Region */}
              <div>
                <label htmlFor="">Receiver Regions</label>
                <select
                  {...register('receiverRegion')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option disabled={true}>Select your District</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              {/* Receiver District */}
              <div>
                <label htmlFor="">Receiver District</label>
                <select
                  {...register('receiverDistrict')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option disabled={true}>Reciever District</option>
                  {districtByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="">Info Message</label>
                <textarea
                  {...register('deliveryInstruction')}
                  rows={3}
                  placeholder="Delivery Instruction"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white text-sm font-medium px-4 py-2 rounded shadow"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendAParcel;
