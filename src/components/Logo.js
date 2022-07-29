import React from "react";
import { GiOrangeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-gray-700 py-7  font-semibold text-xl mb-5 flex items-center px-5"
    >
      <GiOrangeSlice className="text-orange-500 mr-1" /> Orange
      <span className="text-green-600 ">HRM</span>
    </Link>
  );
};

export default Logo;
