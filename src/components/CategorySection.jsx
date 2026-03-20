import React from "react";
import Categorybtn from "./Categorybtn";
import Container from "./Container";
import useCategoryStore from "../store/useCatagoryStore";

const CategorySection = () => {

  const { categories } = useCategoryStore();

  return (
    <section id="categorySection" className="p-5 mt-20">
      <Container>
        <p className="text-xl text-deep-slate mb-5">Categories</p>
        <div className="flex gap-3 overflow-scroll">
          
          {categories.map((category) => (
            <Categorybtn
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
