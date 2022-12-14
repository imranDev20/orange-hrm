import React from "react";
import SidebarOptions from "./SidebarOptions";
import Logo from "./Logo";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="w-2/12 bg-white sticky top-0 shadow-2xl rounded-tr-2xl rounded-br-2xl pr-3 -mt-14 h-screen">
      <Logo />
      <Search />
      <SidebarOptions />
    </div>
  );
};

export default Sidebar;
