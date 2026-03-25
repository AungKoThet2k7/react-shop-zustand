import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import Cart from "./Cart";
import useProductStore from "../store/useProductStore";
import emptyCart from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;

    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const NetTotal = total + tax;

  return (
    <>
      <div className="flex flex-col gap-5  mt-20">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        {carts.length === 0 && (
          <img
            src={emptyCart}
            className="w-[200px] mx-auto mt-10"
            alt="empty"
          />
        )}

        <div
          className="bg-white flex"
        >
          <Container className="px-5">
            <div className="flex justify-end gap-20 border-t border-t-black py-5">
              <div className="text-right">
                <p className="text-gray-400">Total</p>
                <p className="text-xl font-bold">{total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Tax(10%)</p>
                <p className="text-xl font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Net Total</p>
                <p className="text-xl font-bold">{NetTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-end mb-7">
              <Link className="border border-gray-200 shadow duration-300 rounded-full px-3 py-1">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
