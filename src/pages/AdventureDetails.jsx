import React, { useEffect } from "react";
import { IoIosCalendar } from "react-icons/io";
import { FaPersonHiking } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import Footer from "./Footer";
import {
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Marquee from "react-fast-marquee";

const AdventureDetails = () => {
  //   const { id } = useParams();
  //   const adventureId = parseInt(id);
  const singleData = useLoaderData();
  // console.log(singleData);

  const handleExpertTalk = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour >= 10 && currentHour >= 20) {
      window.open("https://meet.google.com/landing", "_blank");
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes(`/card/${singleData}`)) {
      document.title = `${card?.adventure_title} | Wild Explore`;
    }
  }, [location]);
  const {
    SpecialInstructions,
    MaxGroupSize,
    EcoFriendlyFeatures,
    IncludedItems,
    AdventureLevel,
    Duration,
    Location,
    BookingAvailability,
    AdventureCost,
    ShortDescription,
    CategoryName,
    Image,
    AdventureTitle,
  } = singleData;
  //
  return (
    <>
      <ScrollRestoration></ScrollRestoration>
      <Navbar></Navbar>

      <div className="card bg-base-100 ">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-gray-700">
            {AdventureTitle}
          </h2>
          <p className="text-gray-500">{ShortDescription}</p>
        </div>

        <figure className="px-2">
          <img
            src={Image}
            alt={AdventureTitle}
            className="rounded-xl max-w-full"
          />
        </figure>
        <div className="grid mt-3 grid-cols-5  gap-2">
          <div className="flex items-center justify-center flex-col">
            <FaPersonHiking className="text-3xl text-blue-400" />
            <p className="text-sm">{CategoryName}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <IoIosCalendar className="text-3xl text-blue-400" />
            <p className="text-sm">{Duration}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <BsFillPeopleFill className="text-3xl text-blue-400" />
            <p className="text-sm">{MaxGroupSize}</p>
          </div>

          <div className="flex items-center justify-center flex-col">
            <MdLocationPin className="text-3xl text-blue-400" />
            <p className="text-sm">{Location}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <FaMoneyCheckAlt className="text-3xl text-blue-400" />
            <p className="text-sm">{AdventureCost}</p>
          </div>
        </div>
        <div className="card-body space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border shadow-md p-3 rounded-lg text-center">
              <p className="text-gray-500">Booking Availability</p>
              <p className="text-green-300">{BookingAvailability}</p>
            </div>
            <div className="border shadow-md p-3 rounded-lg text-center">
              <p className="text-gray-500">Adventure Level</p>
              <p className="text-red-400">{AdventureLevel}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className=" shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Items Included
              </p>
              <ul className="list-disc list-inside">
                {IncludedItems.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Eco Features
              </p>
              <ul className="list-disc list-inside">
                {EcoFriendlyFeatures.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Special Instructions
              </p>
              <ul className="list-disc list-inside">
                {SpecialInstructions.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-actions justify-center mt-4">
            <button
              onClick={handleExpertTalk}
              className="btn btn-primary btn-wide text-white"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <FaRegClock className="mx-auto text-blue-400 text-5xl text-bgbton" />
          </div>
          <div className="text-center mt-5">
            <h3 className="font-bold text-lg">
              {" "}
              Consultation Time Unavailable!
            </h3>
            <p className="py-4">
              Thank you so much for riching us. Unfortunately we're not avalible
              now. Our consultation team is open form 10:00 AM to 8:00 PM.
              Please visit during this time or provide a message for further
              assistance.
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-block bg-blue-400 text-white font-semibold text-xl hover:bg-blue-600">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AdventureDetails;
