import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Router from "./router/Router.jsx";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer autoClose={2000}></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
