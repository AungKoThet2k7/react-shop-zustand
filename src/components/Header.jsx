import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="p-5">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Online Shop</h1>
          <button className="border border-black px-5 py-2 relative">
            My Cart
            <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white bg-red-600 text-xs px-3 py-1 ">
              1
            </span>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
