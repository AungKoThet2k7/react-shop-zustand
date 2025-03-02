import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 5000,

          success: {
            duration: 5000,
          },
        }}
      />
    </>
  );
};

export default Mainlayout;
