import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-4xl font-bold">404 Not Found</h1>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          libero, sapiente optio veniam id unde.
        </p>
        <Link to={"/"} className="bg-black text-white px-4 py-1 mx-auto">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
