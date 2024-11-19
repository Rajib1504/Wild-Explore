import React from "react";
import { IoIosCalendar } from "react-icons/io";
import { FaPersonHiking } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Marquee from "react-fast-marquee";
import Modal from "../Components/Modal";

const AdventureDetails = () => {
  //   const { id } = useParams();
  //   const adventureId = parseInt(id);
  const singleData = useLoaderData();
  console.log(singleData);
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
    <div>
      <Navbar></Navbar>
      <div className="hero bg-blue-100 rounded-lg p-3">
        <div className="hero-content flex-col lg:flex-row  overflow-x-hidden">
          <img src={`${Image}`} className="max-w-lg rounded-lg shadow-2xl" />
          <div className="flex flex-col gap-3 pl-4">
            <h1 className="text-4xl font-bold text-center text-gray-500">
              {AdventureTitle}
            </h1>
            <p className=" text-center">{ShortDescription}</p>
            <div className="flex items-center gap-[10rem]">
              <p className="text-xl text-gray-500">Booking </p>
              <p className="">: {BookingAvailability}</p>
            </div>
            <div className="flex items-center gap-[5rem]">
              <p className="text-xl text-gray-500">Adventure Level </p>
              <p className="">: {AdventureLevel}</p>
            </div>
            <div className="flex items-start gap-[11.5rem]">
              <p className="text-xl text-gray-500">Items </p>
              <p>
                {IncludedItems.map((item) => (
                  <p>: {item}</p>
                ))}
              </p>
            </div>
            <div className="flex items-start gap-[7.9rem]">
              <p className="text-xl text-gray-500">Eco Fetures </p>
              <p>
                {EcoFriendlyFeatures.map((item) => (
                  <p>: {item}</p>
                ))}
              </p>
            </div>
            <div className="flex items-center gap-[3.6rem]">
              <p className="text-xl text-gray-500">SpecialInstructions </p>
              <p>
                {SpecialInstructions.map((item) => (
                  <p>: {item}</p>
                ))}
              </p>
            </div>
            <Marquee className="w-9/12">
              <div className="flex gap-6 justify-center items-center">
                <p className="flex items-center m-2  gap-2">
                  <FaPersonHiking className="text-3xl text-blue-400" />
                  <p className="">{CategoryName}</p>
                </p>
                <p className="flex items-center m-2  gap-2">
                  <IoIosCalendar className="text-3xl text-blue-400" />
                  <p className="text-sm">{Duration}</p>
                </p>
                <p className="flex  items-center m-2 gap-2">
                  <BsFillPeopleFill className="text-3xl text-blue-400" />
                  <p className="">{MaxGroupSize}</p>
                </p>
                <p className="flex  items-center m-2 gap-2">
                  <MdLocationPin className="text-3xl text-blue-400" />
                  <p className="">{Location}</p>
                </p>
                <p className="flex items-center m-2  gap-2">
                  <FaMoneyCheckAlt className="text-3xl text-blue-400" />
                  <p className="">{AdventureCost}</p>
                </p>
              </div>
            </Marquee>
            <div className="mx-auto m-2">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn btn-primary  btn-wide"
              >
                Get Started
              </button>
              <Modal></Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
