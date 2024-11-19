import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cards from "../pages/Cards";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Error from "../pages/Error";
import AdventureDetails from "../pages/AdventureDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [],
  },
  {
    path: "/detils",
    element: <h1>Travel Details</h1>,
  },
  {
    path: "/auth/login",
    element: <Login></Login>,
  },
  {
    path: "/auth/register",
    element: <Register></Register>,
  },
  {
    path: "/auth/forgetPassword",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
  {
    path: "/card/:Id",
    element: <AdventureDetails></AdventureDetails>,
    loader: async ({ params }) => {
      const res = await fetch("/Adventure.json");
      const data = await res.json();
      // console.log(data, params.Id);
      const singleData = data.find((d) => d.Id == params.Id);
      // console.log(singleData);
      return singleData;
    },
  },
  {
    path: "/my Profile",
    element: <h1>my profile</h1>,
  },
]);

export default Router;
