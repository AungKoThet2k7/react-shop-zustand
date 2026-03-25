import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#2d3f52] text-white text-center py-4 mt-auto z-10">
      <Container>
        Copyright &copy; {date.getFullYear()}{" "}
        <a href="" className="underline text-sky-400">
          Mini Shop
        </a>
        . All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
