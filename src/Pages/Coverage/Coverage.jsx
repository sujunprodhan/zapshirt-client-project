import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { CiSearch } from 'react-icons/ci';

const Coverage = () => {
  const position = [23.685, 90.3563];
  const servicePoint = useLoaderData();
  const mapRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = servicePoint.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13)
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto space-y-5 mt-20">
        <h1 className="text-4xl font-bold text_primary">We are available in 64 districts</h1>
        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="flex w-full max-w-sm">
            {/* Input */}
            <div className="relative flex-1">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xl" />

              <input
                type="search"
                name="location"
                className="w-full h-11 pl-10 pr-4 border border-[#03373D] rounded-l-full outline-none"
                placeholder="Search district..."
              />
            </div>
            <button
              type="submit"
              className="h-11 px-6 bg-[#03373D] text-white border border-[#03373D] rounded-r-full hover:bg-primary/80"
            >
              Search
            </button>
          </div>
        </form>
        <h1 className="text_primary font-bold text-2xl">We deliver almost all over Bangladesh</h1>
        {/* MAP AREA */}
        <div>
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            ref={mapRef}
            className="h-[800px]"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {servicePoint?.map((center, idx) => (
              <Marker key={idx} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong className="text-xl font-bold text-primary">{center.district}</strong>
                  <br />
                  Service Area: {center.covered_area.join(' , ')}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
