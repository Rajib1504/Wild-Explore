import { IoLocationSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      <div className="mx-auto mb-3 mt-6  animate__animated animate__fadeInUp animate__slower shadow-xl bg-base-100 rounded-xl w-80">
        <figure className="pt-5 pb-3 w-full px-4">
          <img
            src={Image}
            alt="Shoes"
            className="rounded-xl h-60 object-cover w-full"
          />
        </figure>

        <div className="bg-white  animate__animated animate__fadeInUp animate__slow animate__delay-2s rounded-lg p-4 w-full flex justify-center flex-col ">
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

          <Link to={`/card/${card.Id}`} className="btn mt-3 mb-2 bg-blue-400 ">
            Explore Now <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
