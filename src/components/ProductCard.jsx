import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const { carts, addCart } = useCartStore();

  const navigate = useNavigate();

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: uuidv4(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success("Added to My Cart");
  };

  const handleAddedCart = (event) => {
    event.stopPropagation();
    toast.error("This item is already in My Cart !");
  };

  const handleOpenDetail = () => {
    navigate(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="border border-cloud-mist shadow-sm hover:shadow-xl hover:scale-105 duration-300 bg-pure-white rounded-lg p-5 flex flex-col items-start gap-5 cursor-pointer"
    >
      <img src={image} className="h-40 mx-auto" alt={title} />
      <p className="font-semibold text-jet-black line-clamp-1">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p className="text-deep-slate font-bold">$ {price}</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button
            onClick={handleAddedCart}
            className="border border-deep-slate bg-deep-slate text-pure-white shadow hover:shadow-md hover:scale-105 duration-300 rounded-full px-3 py-1"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="border border-ocean-steel bg-ocean-steel text-pure-white shadow hover:shadow-md hover:scale-105 duration-300 rounded-full px-3 py-1 hover:bg-deep-slate"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
