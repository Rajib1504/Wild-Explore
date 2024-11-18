import { IoLocationSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ card }) => {
  //   console.log(card);
  const {
    Image,
    AdventureTitle,
    AdventureCost,
    Duration,
    Location,
    MaxGroupSize,
    EcoFriendlyFeatures,
  } = card;
  return (
    <div>
      <div className="mx-auto mb-3 mt-6  shadow-xl bg-base-100 rounded-xl w-80">
        <figure className="pt-5 pb-3 w-full px-4">
          <img
            src={Image}
            alt="Shoes"
            className="rounded-xl h-60 object-cover w-full"
          />
        </figure>

        <div className="bg-white rounded-lg p-4 w-full flex justify-center flex-col ">
          <h3 className="text-xl hover:text-green-300  font-bold">
            {AdventureTitle}
          </h3>

          <ul className="text-lg opacity-45 font-semibold flex-grow ">
            {EcoFriendlyFeatures.map((fetures, idx) => (
              <li
                className="list-disc text-base list-inside hover:text-green-600"
                key={idx}
              >
                {fetures}
              </li>
            ))}
          </ul>

          {/* <div className="flex gap-2  items-center">
            <IoLocationSharp className="text-green-300 text-xl" />
            <p>location</p>
          </div> */}
          {/* <div className="flex gap-2  items-center">
            <GiTakeMyMoney className="text-green-400" />
            <span className="text-yellow-200 text-lg font-semibold">Form </span>
            <span>120</span>
          </div> */}
          {/* <div className="border-t pt-2  flex justify-between items-center">
            <div>
              <div className="flex gap-2">
                <BsClock className="text-green-400" />
                <p>time duration</p>
              </div>
              <div>
                <p>person capacity</p>
              </div>
            </div>
            <div>Explore</div>
          </div> */}
          <button className="btn mt-3 mb-2 bg-blue-400 ">
            Explore Now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
