import React from "react";
import { Link } from "react-router-dom";

const PimHeader = () => {
  return (
    <div className="px-5 flex py-2 bg-white shadow-sm">
      <Link
        className="mr-3 px-3 py-1 bg-gray-500/20 text-gray-700 rounded-full"
        to="/pim/configuration"
      >
        Configuration
      </Link>
      <Link
        className="mr-3 px-3 py-1 bg-gray-500/20 text-gray-700 rounded-full"
        to="/pim/employee-list"
      >
        Employee List
      </Link>
      <Link
        className="mr-3 px-3 py-1 bg-gray-500/20 text-gray-700 rounded-full"
        to="/pim/add-employee"
      >
        Add Employee
      </Link>
      <Link
        className="mr-3 px-3 py-1 bg-gray-500/20 text-gray-700 rounded-full"
        to="/pim/reports"
      >
        Reports
      </Link>
    </div>
  );
};

export default PimHeader;
