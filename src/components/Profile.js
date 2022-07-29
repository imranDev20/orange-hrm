import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ContactDetails from "./ContactDetails";
import JobDetails from "./JobDetails";
import PersonalDetails from "./PersonalDetails";

const Profile = () => {
  const routes = [
    {
      id: 1,
      label: "Personal Details",
      route: "/pim/profile",
    },
    { id: 2, label: "Contact Details", route: "/pim/profile/contact-details" },
    {
      id: 3,
      label: "Emergency Contacts",
      route: "/pim/profile/emergency-contacts",
    },
    { id: 4, label: "Dependents", route: "/pim/profile/dependents" },
    { id: 5, label: "Immigration", route: "/pim/profile/immigration" },
    { id: 6, label: "Job", route: "/pim/profile/job" },
    { id: 7, label: "Salary", route: "/pim/profile/salary" },
    { id: 8, label: "Report to", route: "/pim/profile/report-to" },
  ];
  return (
    <div className="m-10">
      <div className="bg-white p-5 rounded-xl flex">
        <div className="w-1/6 min-w-[200px] border-r">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-3xl text-center text-gray-700 mb-3 ">
              Chahal Vadalmiya
            </h3>
            <div className="w-36 h-36 rounded-full overflow-hidden flex justify-center items-center">
              <img
                src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            {routes.map((route) => (
              <Link className="my-1" key={route.id} to={route.route}>
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
