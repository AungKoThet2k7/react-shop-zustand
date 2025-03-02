import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();

  const currentProduct = products.find((product) => product.slug == productSlug);

  const { carts, addCart } = useCartStore();

  const handleAddCart = () => {
    const newCart = {
      id: uuidv4(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success("Added to My Cart");
  };

  const handleAddedCart = () => {
    toast.error("This item is already in My Cart !");
  };

  return (
    <Container className="px-5">
      <Breadcrumb currentpageTitle="Product Detail" />
      <div className="border border-black p-5 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className=" col-span-1 flex items-center sm:justify-center">
            <img
              src={currentProduct.image}
              className="w-[200px] sm:w-2/4 mb-5"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-3">
            <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
            <p className="bg-gray-300 px-3 py-1">{currentProduct.category}</p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="">Price : ($ {currentProduct.price})</p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
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
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
