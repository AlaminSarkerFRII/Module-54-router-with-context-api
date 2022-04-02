import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2 className="text-3xl py-3 text-teal-900 sm:w-full col-span-12">
        Welcome TO My T-shirt Mania !!!{" "}
      </h2>
      <nav className="py-2 text-green-900 text-blue-600 sm:w-full col-span-12">
        <Link to="/home"> Home </Link>
        <Link to="/orderreview"> Order Review</Link>
        <Link to="/grandpa"> Grandpa </Link>
      </nav>
    </div>
  );
};

export default Header;
