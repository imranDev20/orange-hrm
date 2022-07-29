import React from "react";

const AddEmployee = () => {
  return (
    <div className="px-5 mt-10">
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="mb-2 text-gray-700 font-medium text-xl">Add Employee</h2>
        <hr className="mb-2" />
        <div className="flex">
          <div className="w-2/6 flex items-center flex-col">
            <div className="border rounded-full p-1 mb-5">
              <div className="w-36 h-36 rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              Accepts .jpg, .png, .gif up to 1MB. Recommended dimensions: 200px
              X 200px
            </p>
          </div>
          <div className="w-4/6 px-10">
            <div>
              <form id="add-employee-form" action=""></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
