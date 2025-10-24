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
          duration: 2000,

          success: {
            duration: 2000,
          },
        }}
      />
    </>
  );
};

export default Mainlayout;
