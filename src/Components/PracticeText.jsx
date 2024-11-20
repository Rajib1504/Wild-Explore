import React from "react";

const PracticeText = () => {
  return (
    <div>
      <div className="bg-[#f0f7fad7]  animate__animated animate__fadeInUp animate__slower animate__delay-4s mt-4">
        <div className=" flex flex-col justify-center items-center gap-3 py-6 sm:w-full md:w-11/12">
          <h1 className="text-2xl font-light mt-4">
            {" "}
            Practice Sustainable Adventure
          </h1>
          <p className="text-center text-base sm:text-lg font-light sm:w-full md:w-9/12 mb-6">
            <span className="text-3xl text-blue-300">E</span>mbark on thrilling
            mountain journeys while preserving nature's beauty. At Wild Explore,
            we believe in balancing adventure with sustainability. Discover
            tips, techniques, and inspiration to make your outdoor adventures
            eco-friendly and impactful. Together, let’s practice responsible
            exploration and leave the mountains as pristine as we found them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeText;
