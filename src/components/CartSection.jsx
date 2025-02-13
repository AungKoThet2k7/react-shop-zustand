import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const CartSection = () => {
  

  return (
    <>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      <div className="w-full">
        <Container>
          <div className="flex justify-end gap-20 border-t border-t-black py-5">
            <div className="text-right">
              <p className="text-gray-400">Total</p>
              <p className="text-xl font-bold">123</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Tax(10%)</p>
              <p className="text-xl font-bold">123</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Net Total</p>
              <p className="text-xl font-bold">123</p>
            </div>
          </div>
          <div className="text-end mb-7">
            <Link className="border border-black px-4 py-1">
              Order Now
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartSection;
