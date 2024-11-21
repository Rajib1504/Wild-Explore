import React, { useContext } from "react";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import { AuthContext } from "../Provider/AuthProvider";

const UpdatedProile = () => {
  const { updateUserProfile, user, setUser, setLoading } =
    //     console.log(loading);
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdated = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (!name || !photo) {
      toast.error("Name or Photo URL is empty.");
      return;
    }

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        e.target.reset();
        toast.success("Profile updated successfully!");
        navigate("/myprofile");
      })

      .catch((err) => {
        toast.error(err, "Failed to update profile. Please try again.");
      });
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className=" min-h-screen pt-8 bg-[url('https://i.ibb.co/X8qw8kM/pexels-pixabay-163216.jpg')] bg-cover flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center shadow-lg rounded-lg my-20 p-5 bg-[#a9c3efd7]">
          <h1 className="text-center my-5 text-3xl text-primary font-semibold">
            Update Profile
          </h1>
          <form onSubmit={handleUpdated}>
            <div className="space-y-5 w-full md:w-[29rem] md:m-6">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 text-primary opacity-60"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="name"
                  className="grow text-primary"
                  placeholder="Username"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <IoMdPhotos className="text-primary opacity-60" />
                <input
                  type="text"
                  name="photo"
                  className="grow text-primary"
                  placeholder="Photo URL"
                />
              </label>

              <div className="w-full">
                <button className="btn btn-block bg-gradient-to-r from-blue-400 via-purple-300 to-sky-400  text-white text-xl font-bold">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdatedProile;
