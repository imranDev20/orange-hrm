import React from "react";
import { Link } from "react-router-dom";

const SidebarOptions = () => {
  const options = [
    { id: 1, label: "Admin", route: "/admin" },
    { id: 2, label: "PIM", route: "/pim" },
    { id: 3, label: "Leave", route: "/leave" },
    { id: 4, label: "Time", route: "/time" },
    { id: 5, label: "My Info", route: "/my-info" },
    { id: 6, label: "Dashboard", route: "/dashboard" },
    { id: 7, label: "Directory", route: "/directory" },
    { id: 8, label: "Maintenance", route: "/maintenance" },
    { id: 9, label: "Buzz", route: "/buzz" },
  ];
  return (
    <div className="flex flex-col">
      {options?.map((option) => (
        <Link
          className="py-2 text-gray-700 px-5 transition-colors hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white rounded-r-full "
          to={option?.route}
          key={option?.id}
        >
          {option?.label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;
