import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cards from "../pages/Cards";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Error from "../pages/Error";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRouter from "./PrivateRouter";
import MyProfile from "../Components/MyProfile";
import UpdateProfile from "../Components/UpdateProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
    element: (
      <PrivateRouter>
        <AdventureDetails></AdventureDetails>
      </PrivateRouter>
    ),
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
    path: "/myprofile",
    element: (
      <PrivateRouter>
        <MyProfile></MyProfile>,
      </PrivateRouter>
    ),
  },
  {
    path: "/updateProfile",
    element: <UpdateProfile></UpdateProfile>,
  },
]);

export default Router;
