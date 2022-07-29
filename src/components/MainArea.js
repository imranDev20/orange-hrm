import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainArea = () => {
  return (
    <div className="w-10/12 px-5 h-[2000px]">
      <h1 className="text-2xl text-gray-700">Welcome to Omuk</h1>
      <Outlet />
    </div>
  );
};

export default MainArea;
