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
    <div className="border border-cloud-mist shadow-sm bg-pure-white rounded-lg grid grid-cols-6 items-center p-5 mb-5 transition-all hover:shadow-md">
      <div className="col-span-1 flex justify-center items-center">
        <img src={product.image} className="w-12 h-12 object-contain" alt={product.title} />
      </div>
      <div className="col-span-3">
        <p className="text-jet-black font-medium">{product.title}</p>
        <p className="text-deep-slate">Price: ${product.price}</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2 text-deep-slate text-sm font-semibold">Quantity</p>
        <div className="flex gap-3 items-center">
          <button
            onClick={handleDecrease}
            className="bg-ocean-steel text-pure-white size-6 rounded-lg flex items-center justify-center hover:bg-deep-slate transition-colors"
          >
            -
          </button>
          <span className="text-jet-black font-bold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-ocean-steel text-pure-white size-6 rounded-lg flex items-center justify-center hover:bg-deep-slate transition-colors"
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
