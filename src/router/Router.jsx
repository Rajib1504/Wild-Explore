import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home layout</h1>,
  },
  {
    path: "/detils",
    element: <h1>Travel Details</h1>,
  },
  {
    path: "/auth",
    element: <h1>login</h1>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  },
]);

export default Router;
