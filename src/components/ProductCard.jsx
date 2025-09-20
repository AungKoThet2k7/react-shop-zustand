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
      className="border bg-gray-50 rounded-lg border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p>$ {price}</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button
            onClick={handleAddedCart}
            className="border border-black bg-black text-white px-2 py-1"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="border border-black px-3 py-1"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
