import React from 'react';
import RiderImg from '../../assets/banner/agent-pending.png'; // Ensure this path is correct based on your project structure

const Rider = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex p-10 bg-white rounded-md mt-20">
          {/* Rider Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text_primary">Be A Rider</h1>
            <p>
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From
              personal packages to business shipments — we deliver on time, every time.
            </p>
            <div className="mt-10">
              {/* Tell us about yourself */}
              <h1 className="text_primary text-2xl font-bold">Tell us about yourself</h1>
              {/* Input fields */}
              <div>
                <form>
                  <div className="card bg-base-100 w-11/12  shrink-0 shadow-2xl">
                    <div className="card-body">
                      <fieldset className="fieldset">
                        {/* Form Layout */}
                        <div className="flex">
                          <div className="flex-1 mr-4">
                            <label className="label">Your Name</label>
                            <input type="text" className="input w-full" placeholder="Your Name" />
                          </div>
                          <div className="flex-1">
                            <label className="label">Your Age</label>
                            <input type="number" className="input w-full" placeholder="Your Age" />
                          </div>
                        </div>
                        {/* Email */}
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="label">Your Email</label>
                            <input type="email" className="input w-full" placeholder="Your Email" />
                          </div>

                          <div className="flex-1">
                            <label className="label">Your District</label>
                            <select className="select w-full">
                              <option>Select your District</option>
                              {/* Add your district options here */}
                            </select>
                          </div>
                        </div>
                        {/* Nid */}
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="label">Your NID</label>
                            <input type="text" className="input w-full" placeholder="NID Number" />
                          </div>

                          <div className="flex-1">
                            <label className="label">Which warehouse do you want to work at?</label>
                            <select className="select w-full">
                              <option>Select warehouse</option>
                              {/* Add your warehouse options here */}
                            </select>
                          </div>
                        </div>

                        <button className="bg-[#CAEB66] py-2 text_primary font-bold mt-4 w-full">Submit</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Rider Image */}
          <div className="flex-1">
            <img src={RiderImg} alt="Rider" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
