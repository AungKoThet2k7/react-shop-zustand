import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCatagoryStore";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive === true);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-xl text-gray-400 mb-3">Available Product</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products
            .filter(
              (el) =>
                currentCategory.name === "all" ||
                el.category === currentCategory.name
            )
            .map((product) => (
              <div data-aos="fade-up"
              data-aos-duration={product.id % 4 === 0 ? "1700" : product.id % 4 === 3 ? "1300" : product.id % 4 === 2 ? "900" : "500"}
               key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
