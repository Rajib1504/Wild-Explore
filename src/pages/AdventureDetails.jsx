import React from "react";
import { IoIosCalendar } from "react-icons/io";
import { FaPersonHiking } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Footer from "./Footer";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Marquee from "react-fast-marquee";
import Modal from "../Components/Modal";

const AdventureDetails = () => {
  //   const { id } = useParams();
  //   const adventureId = parseInt(id);
  const singleData = useLoaderData();
  console.log(singleData);

  const handleExpertTalk = () => {
    const currentDate = new Date();
    const currentTimeHour = currentDate.getHours();

    if (currentTimeHour >= 10 && currentTimeHour < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };
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
      <div className="">
        <Navbar></Navbar>
        <div className="hero bg-blue-100 rounded-lg p-3">
          <div className="hero-content flex-col items-center lg:flex-row  ">
            <img src={`${Image}`} className="max-w-md rounded-lg shadow-2xl" />
            <div className="flex flex-col gap-3 pl-4">
              <h1 className="text-4xl font-bold text-center text-gray-500">
                {AdventureTitle}
              </h1>
              <p className=" text-center">{ShortDescription}</p>
              <div className="flex items-center flex-col justify-center">
                <p className="text-xl text-gray-500">Booking </p>
                <p className="">{BookingAvailability}</p>
              </div>
              <div className="flex items-center flex-col justify-center">
                <p className="text-xl text-gray-500">Adventure Level </p>
                <p className="">{AdventureLevel}</p>
              </div>
              <div className="flex items-center flex-col justify-center ">
                <p className="text-xl flex-col justify-center flex text-gray-500">
                  Items{" "}
                </p>
                <p>
                  {IncludedItems.map((item, id) => (
                    <li key={id}> {item}</li>
                  ))}
                </p>
              </div>
              <div className="flex items-center flex-col justify-center ">
                <p className="text-xl text-gray-500">Eco Features </p>

                {EcoFriendlyFeatures.map((item, id) => (
                  <li className="" key={id}>
                    {item}
                  </li>
                ))}
              </div>
              <div className="flex items-center flex-col justify-center">
                <p className="text-xl text-gray-500">SpecialInstructions </p>
                <p>
                  {SpecialInstructions.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </p>
              </div>

              <div className="flex gap-6 justify-center items-center">
                <div className="flex items-center m-2  gap-2">
                  <FaPersonHiking className="text-3xl text-blue-400" />
                  <p className="">{CategoryName}</p>
                </div>
                <div className="flex items-center m-2  gap-2">
                  <IoIosCalendar className="text-3xl text-blue-400" />
                  <p className="text-sm">{Duration}</p>
                </div>
                <div className="flex  items-center m-2 gap-2">
                  <BsFillPeopleFill className="text-3xl text-blue-400" />
                  <p className="">{MaxGroupSize}</p>
                </div>
                <div className="flex  items-center m-2 gap-2">
                  <MdLocationPin className="text-3xl text-blue-400" />
                  <p className="">{Location}</p>
                </div>
                <div className="flex items-center m-2  gap-2">
                  <FaMoneyCheckAlt className="text-3xl text-blue-400" />
                  <p className="">{AdventureCost}</p>
                </div>
              </div>

              <div className="mx-auto m-2">
                <button
                  onClick={handleExpertTalk}
                  className="btn btn-primary  btn-wide"
                >
                  Talk to us
                </button>
                <Modal></Modal>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AdventureDetails;
