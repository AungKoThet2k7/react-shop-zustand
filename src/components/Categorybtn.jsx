import React from "react";

const Categorybtn = ({categoryName, current }) => {
  return (
    <button className={`${current && "bg-black text-white"} px-4 py-2 text-nowrap border border-black`}>
      {categoryName}
    </button>
  );
};

export default Categorybtn;
