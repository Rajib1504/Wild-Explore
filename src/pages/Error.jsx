import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-[#f56f6056] w-full min-h-screen">
      <div>
        <div className="flex justify-center items-center flex-col gap-2 pt-40">
          <h1 className="text-6xl font-extrabold text-white  text-center">
            404
          </h1>
          <p className="text-white text-center ">You are in wrong path </p>
          <Link to={"/"} className="btn btn-wide bg-blue-200 text-white">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
