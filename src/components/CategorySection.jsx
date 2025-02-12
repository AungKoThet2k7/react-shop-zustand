import React from "react";
import Categorybtn from "./Categorybtn";

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
      <p className="text-xl text-gray-400 mb-3">{title}</p>
      <div className="flex gap-3 overflow-scroll categories-btn-group">
        <Categorybtn categoryName={"all"} current={true} />
        {categories.map((category) => (
          <Categorybtn key={category} categoryName={category} current={false} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
