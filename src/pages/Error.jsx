import React from "react";
import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <body className="bg-[#f0f7fad7] flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="flex gap-2 justify-center ml-4 items-center">
            <div className="text-6xl">😫</div>
            <div className="text-6xl">😫</div>
          </div>
          <h1 className="text-9xl font-extrabold text-pink-200 leading-tight">
            404
          </h1>
          <p className="text-2xl font-medium text-gray-600 mb-5">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-lg text-gray-500 mb-6 ">
            It might have been moved or deleted.
          </p>
          <NavLink
            to={"/"}
            className="text-lg bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-300"
          >
            Back to Home
          </NavLink>
        </div>
      </body>
    </div>
  );
};

export default Error;
