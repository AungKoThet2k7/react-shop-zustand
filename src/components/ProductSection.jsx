import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import products from "../data/products";

const ProductSection = () => {
  

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-xl text-gray-400 mb-3">Available Product</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
