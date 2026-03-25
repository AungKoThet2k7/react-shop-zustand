import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {

  const { carts } = useCartStore();

  return (
    <header className="p-4 bg-white shadow-md fixed w-full z-10">
      <Container>
        <div className="flex justify-between sticky">
          <Link to={"/"} className="text-3xl font-bold">Mini Shop</Link>
          <Link to={"/my-cart"} className="border border-gray-200 shadow-md  px-5 py-2 relative rounded-full">
            My Cart
            <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white rounded-full bg-red-500 text-xs px-3 py-1 ">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
