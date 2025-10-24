import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <Container className="px-5 mt-24">
      <Breadcrumb currentpageTitle="Product Detail" />
      <div data-aos="zoom-in-down" data-aos-duration="1000" className="border border-gray-200 shadow-md bg-white rounded-lg p-5 mb-5">
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
            <p className="bg-gray-200 text-sm rounded-full px-3 py-1">{currentProduct.category}</p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="">Price : ($ {currentProduct.price})</p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
                <button
                  onClick={handleAddedCart}
                  className="border border-black bg-black text-white shadow hover:shadow-md hover:scale-105 duration-300  rounded-full px-3 py-1"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddCart}
                  className="border border-gray-200 shadow hover:shadow-md hover:scale-105 duration-300 rounded-full px-3 py-1"
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
