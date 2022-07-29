import React from "react";
import { Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddEmployee from "./AddEmployee";

const Pim = () => {
  return (
    <div className="w-10/12 h-[2000px]">
      <Outlet />
    </div>
  );
};

export default Pim;
