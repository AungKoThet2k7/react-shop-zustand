import React from "react";
import products from "../data/products";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);

  return (
    <Container>
      <Breadcrumb currentpageTitle="Product Detail" />
      <div className="border border-black p-5 mb-5">
        <div className="grid grid-cols-2">
          <div className=" col-span-1 flex items-center justify-center">
            <img src={currentProduct.image} className="w-2/4" alt="" />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-3">
            <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
            <p className="bg-gray-300 px-3 py-1">{currentProduct.category}</p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="">Price : ($ {currentProduct.price})</p>
              <button className="border border-black px-3 py-1">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
