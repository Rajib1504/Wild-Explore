import React from "react";
import Marquee from "react-fast-marquee";

const PracticeZone = () => {
  return (
    <>
      <div className="bg-blue-50 py-12  animate__animated animate__fadeInUp animate__slower mt-4 animate__delay-4s">
        {/* Heading and Description */}
        {/* <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Practice Sustainable Adventure
          </h2>
          <p className="text-gray-600 text-lg">
            Embrace eco-friendly practices to protect the wilderness for future
            generations. Together, let's make our adventures inspiring and
            sustainable.
          </p>
        </div> */}

        {/* Image Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
          {/* Image 1 */}

          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/XxNnjPj/pexels-pavel-danilyuk-7591363.jpg"
              alt="Cleaning up campsite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Leave No Trace</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/bP4mvxg/pexels-allan-mas-5383479.jpg"
              alt="Reusable camping gear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Use Reusables</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/K739Wmj/pexels-nicolas-diaz-66355688-14717381.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Preserve Nature</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/s2FBcms/pexels-allan-mas-5383520.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Travel Light</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/kMV1dx4/pexels-tima-miroshnichenko-5916172.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Eco-Friendly Trails</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/rb3qMwb/pexels-cottonbro-6699960.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Protect Biodiversity</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/MBfFWSw/pexels-julito-elizalde-1831753719-28622712.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Sustainable Trekking</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/X4JxN9h/pexels-farlight-8310950.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Harmony with Nature</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co/Sv92msW/pexels-cottonbro-6677389.jpg"
              alt="Respecting wildlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">Preserve the Wild</p>
            </div>
          </div>

          {/* Add more images as needed */}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-10"></div> */}
      </div>
    </>
  );
};

export default PracticeZone;
