import React from "react";
import useCategoryStore from "../store/useCatagoryStore";

const Categorybtn = ({ category: { id, name, isActive } }) => {

  const {activeCategory } = useCategoryStore ();
  const handleOnclick = () => {
    activeCategory (id); 
  }

  return (
    <button
    onClick={handleOnclick}
      className={`${
        isActive ? "bg-black text-white hover:bg-black" : "hover:bg-gray-100"
      } px-4 py-2 text-nowrap border border-gray-200  duration-300 rounded-full`}
    >
      {name}
    </button>
  );
};

export default Categorybtn;
