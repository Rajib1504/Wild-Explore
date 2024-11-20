import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="py-10  bg-[url('https://i.ibb.co/8jPBxqJ/pexels-lazarevkirill-8532484.jpg')] bg-cover object-bottom">
        <div className="space-y-4 mb-10 max-w-md rounded-lg mx-auto text-center bg-[#9be3bf82] shadow-md p-6">
          <h1 className="text-center text-3xl font-bold">WelCome</h1>
          <img
            src={user?.photoURL}
            className="w-24 h-24 rounded-full mx-auto"
            alt="Profile img"
          />
          <p className="text-blue-400 text-xl"> {user?.displayName}</p>
          <p>{user?.email}</p>
          <Link
            to="/updateProfile"
            className="btn rounded-xl bg-blue-400 hover:bg-blue-600"
          >
            Update Profile
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
