import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cards from "../pages/Cards";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Error from "../pages/Error";

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
    path: "/adventure Details",
    element: <h1>adventure details</h1>,
  },
  {
    path: "/my Profile",
    element: <h1>my profile</h1>,
  },
]);

export default Router;
