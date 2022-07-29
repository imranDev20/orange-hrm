import React from "react";

const AddEmployee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name =
      e.target.firstName.value +
      " " +
      e.target.middleName.value +
      " " +
      e.target.lastName.value;

    const userId = e.target.userId.value;
    const user = { name: name, id: userId };

    fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 09a67cab82481d698f7fc23fc405c79b8c7d35c87ba11aa8ab22c3bac7c292b8",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // enter you logic when the fetch is successful
        console.log(data);
      })
      .catch((error) => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      });
  };
  return (
    <div className="px-5 mt-10 w-10/12">
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
            <form id="add-employee-form" action="" onSubmit={handleSubmit}>
              <h3 className="mb-3">Employee Full Name*</h3>
              <div className="flex border h-12 rounded-lg overflow-hidden">
                <input
                  className="h-full outline-none border-r pl-3 "
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="h-full outline-none border-r pl-3 "
                  name="middleName"
                  type="text"
                  placeholder="Middle Name"
                />
                <input
                  className="h-full outline-none pl-3 "
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <h3 className="mt-10 mb-3">Employee Id</h3>
              <input
                className="h-full outline-none border-r pl-3 border w-full rounded-lg py-3"
                type="text"
                name="userId"
              />
              <hr className="mt-10" />
            </form>
            <div className="mt-5 flex items-center">
              <p className="mr-3">Create login credentials</p>

              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500"></div>
              </label>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-end mt-5">
          <button className="px-5 py-2 bg-gray-200 mr-3 rounded-full text-gray-700">
            Cancel
          </button>
          <button
            className="px-5 py-2 text-white mr-3 rounded-full bg-green-500"
            type="submit"
            form="add-employee-form"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
