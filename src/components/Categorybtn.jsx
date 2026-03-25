import React from "react";
import useCategoryStore from "../store/useCatagoryStore";

const Categorybtn = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();
  const handleOnclick = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={handleOnclick}
      className={`${
        isActive
          ? "bg-gray-800 text-gray-100 hover:bg-gray-800"
          : "bg-white text-gray-800 hover:bg-gray-100"
      } px-4 py-2 text-nowrap border border-gray-200 duration-300 rounded-full`}
    >
      {name}
    </button>
  );
};

export default Categorybtn;
