import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container>
      <Breadcrumb currentpageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
