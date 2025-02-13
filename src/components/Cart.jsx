import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="border border-black grid grid-cols-6 items-center p-5 mb-5">
      <div className="col-span-1 flex justify-center items-center">
        <img src={cart.product.image} className="w-12" alt="" />
      </div>
      <div className="col-span-3">
        <p className="">{cart.product.title}</p>
        <p className="text-gray-400">Price: ${cart.product.price}</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-3">
          <button className="bg-black text-white size-6">-</button>
          {cart.quantity}
          <button className="bg-black text-white size-6">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-end">{cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;
