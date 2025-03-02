import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = quantity * product.price;

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
        }
      });
    }
  };

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  return (
    <div className="border border-black grid grid-cols-6 items-center p-5 mb-5">
      <div className="col-span-1 flex justify-center items-center">
        <img src={product.image} className="w-12" alt="" />
      </div>
      <div className="col-span-3">
        <p className="">{product.title}</p>
        <p className="text-gray-400">Price: ${product.price}</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-3">
          <button
            onClick={handleDecrease}
            className="bg-black text-white size-6"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncrease}
            className="bg-black text-white size-6"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-end">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
