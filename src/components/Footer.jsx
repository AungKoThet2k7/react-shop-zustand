import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-jet-black text-cloud-mist text-center py-6 mt-auto z-10">
      <Container>
        <p className="opacity-80">
          Copyright &copy; {date.getFullYear()}{" "}
          <Link
            to={"/"}
            className="underline text-ocean-steel hover:text-pure-white transition-colors"
          >
            AeroCart
          </Link>
          . All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
