import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/detils",
    element: <h1>Travel Details</h1>,
  },
  {
    path: "/auth/login",
    element: <h1>login</h1>,
  },
  {
    path: "/auth/register",
    element: <h1>register</h1>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
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
