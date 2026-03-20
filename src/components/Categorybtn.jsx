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
        isActive
          ? "bg-ocean-steel text-pure-white shadow-md"
          : "bg-white text-deep-slate hover:bg-ocean-steel hover:text-pure-white"
      } px-4 py-2 text-nowrap border border-cloud-mist duration-300 rounded-full transition-all`}
    >
      {name}
    </button>
  );
};

export default Categorybtn;
