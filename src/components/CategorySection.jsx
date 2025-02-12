import React from "react";
import Categorybtn from "./Categorybtn";
import Container from "./Container";

const CategorySection = () => {
  const title = "Project Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="categorySection" className="p-5">
      <Container>
      <p className="text-xl text-gray-400 mb-3">{title}</p>
      <div className="flex gap-3 overflow-scroll categories-btn-group">
        <Categorybtn categoryName={"all"} current={true} />
        {categories.map((category) => (
          <Categorybtn key={category} categoryName={category} current={false} />
        ))}
      </div>
      </Container>
    </section>
  );
};

export default CategorySection;
