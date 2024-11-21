import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <body class="bg-white flex items-center justify-center min-h-screen">
        <div class="text-center">
          <h1 class="text-9xl font-extrabold text-black leading-tight">404</h1>
          <p class="text-2xl font-medium text-gray-600 mb-5">
            Oops! The page you are looking for does not exist.
          </p>
          <p class="text-lg text-gray-500 mb-6">
            It might have been moved or deleted.
          </p>
          <a
            href="/"
            class="text-lg bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Back to Home
          </a>
        </div>
      </body>
    </div>
  );
};

export default Error;
