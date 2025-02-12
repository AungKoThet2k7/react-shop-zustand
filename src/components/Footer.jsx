import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-black text-white text-center py-4 mx-5 mt-auto">
      <Container>
        {date.getFullYear()}{" "}
        <a href="#" className="underline text-gray-400">
          MMS IT
        </a>
        . All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
