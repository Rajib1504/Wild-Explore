import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
const Banner = () => {
  return (
    <div className=" mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/FHdv9mm/pexels-aiizen-27992636.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Conquer the Peaks
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Description: Embark on thrilling journeys through majestic
                mountain ranges, embracing the icy allure of nature. Explore
                untamed beauty and discover adventure like never before.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg">
                Start Your Adventure
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/DDq1Y8R/pexels-pixabay-273065.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Experience the Wilderness
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Immerse yourself in serene mountain landscapes, where
                eco-friendly trails lead to unforgettable icy escapades. Let
                nature inspire your wildest dreams.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/3W0XcmD/pexels-chris-f-38966-11616147.jpg"
              alt="Adventure 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Elevate Your Adventure
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Take your spirit higher with snow-capped summits and
                exhilarating mountain adventures that promise breathtaking views
                and lasting memories.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg">
                Plan Your Trip
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative ">
            <img
              src="https://i.ibb.co/KX5kbXd/pexels-deepakslvoihad-15051400.jpg"
              alt="Adventure 2"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Discover Pristine Heights
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Escape to untouched mountain peaks, where the harmony of ice and
                earth offers a sanctuary for your soul and a playground for
                explorers.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/BtcPM0c/pexels-christopher-politano-978995-20598839.jpg"
              alt="Adventure 3"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Nature’s Frozen Paradise
              </h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Traverse dazzling glaciers and towering icy peaks, uncovering
                the raw, untamed beauty of mountain terrains crafted by time.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
