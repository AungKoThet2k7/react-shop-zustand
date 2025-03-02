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
        isActive && "bg-black text-white"
      } px-4 py-2 text-nowrap border border-black`}
    >
      {name}
    </button>
  );
};

export default Categorybtn;
