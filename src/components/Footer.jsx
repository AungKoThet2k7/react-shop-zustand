import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-800 text-gray-100 text-center py-6 mt-auto z-10">
      <p className="opacity-80">
        Copyright &copy; {date.getFullYear()}{" "}
        <Link
          to={"/"}
          className="underline text-cyan-400 hover:text-cyan-500 transition-colors"
        >
          AeroCart
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
