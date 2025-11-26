import React from 'react';
import { useForm } from 'react-hook-form';

const SendAParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { parcelType: 'document' } });

  const handelSendPercel = (data) => {
    console.log('form submitted', data);
    
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
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
            {errors.parcelName && <p className="text-xs text-red-500 mt-1">Required</p>}
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Parcel Weight (KG)</label>
            <input
              type="number"
              step="0.1"
              {...register('weight', { required: true, min: 0.1 })}
              placeholder="Parcel Weight (KG)"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
            />
            {errors.weight && (
              <p className="text-xs text-red-500 mt-1">Please enter a valid weight</p>
            )}
          </div>
        </div>

        {/* two-column sender & receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender */}
          <div>
            <h3 className="text-xl font-bold text_primary mb-3">Sender Details</h3>
            <div className="space-y-3">
              <div>
                <input
                  {...register('senderName', { required: true })}
                  placeholder="Sender Name"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <input
                  {...register('senderAddress')}
                  placeholder="Address"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <input
                  {...register('senderPhone')}
                  placeholder="Sender Phone No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <select
                  {...register('senderDistrict')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select your District</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                </select>
              </div>

              <div>
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
                <input
                  {...register('receiverName', { required: true })}
                  placeholder="Receiver Name"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <input
                  {...register('receiverAddress')}
                  placeholder="Receiver Address"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <input
                  {...register('receiverPhone')}
                  placeholder="Receiver Contact No"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <select
                  {...register('receiverDistrict')}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select your District</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                </select>
              </div>

              <div>
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

        <p className="text-xs text-gray-500">* Pickup Time 4pm-7pm Approx.</p>

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
