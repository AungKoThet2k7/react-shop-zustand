import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-5">
      <div className="text-2xl font-bold">
        <p>Online Shop</p>
      </div>
      <button className="border border-black px-5 py-2 relative">
        My Cart
        <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white bg-red-600 text-xs px-3 py-1 ">
          1
        </span>
      </button>
    </header>
  );
};

export default Header;
