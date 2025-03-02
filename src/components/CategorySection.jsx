import React from "react";
import Categorybtn from "./Categorybtn";
import Container from "./Container";
import useCategoryStore from "../store/useCatagoryStore";

const CategorySection = () => {
  const title = "Project Categories";

  const { categories } = useCategoryStore();

  return (
    <section id="categorySection" className="p-5">
      <Container>
        <p className="text-xl text-gray-400 mb-3">{title}</p>
        <div className="flex gap-3 overflow-scroll categories-btn-group">
          
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
