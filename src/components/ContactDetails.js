import React from "react";

const ContactDetails = () => {
  return (
    <div className="px-5">
      <h2 className="text-xl mb-4">Contact Details</h2>
      <hr className="mb-5" />
      <h3 className="mb-2">Employee Full Name*</h3>
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
      <hr className="mt-7" />

      <div className="mt-5 flex">
        <div className="flex flex-col mr-16">
          <label className="mb-2">Employee Id</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Other Id</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="text"
          />
        </div>
      </div>
      <div className="mt-5 flex">
        <div className="flex flex-col mr-16">
          <label className="mb-2">Drivers Liscense Number</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">License Expire Date</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="date"
          />
        </div>
      </div>

      <div className="mt-5 flex">
        <div className="flex flex-col mr-16">
          <label className="mb-2">Nationality</label>
          <select
            className="py-1 rounded-lg outline-none border px-2"
            name=""
            id=""
          >
            <option value="">Indian</option>
            <option value="">Bangladeshi</option>
            <option value="">Chinese</option>
            <option value="">Italian</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Marital Status</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="text"
          />
        </div>
      </div>
      <div className="mt-5 flex">
        <div className="flex flex-col mr-16">
          <label className="mb-2">Date of Birth</label>
          <input
            className="py-1 rounded-lg outline-none border px-2"
            type="text"
          />
        </div>
        <div className="">
          <h3 className="mb-2">Gender</h3>
          <div className="flex ">
            <div className="flex items-center mr-10">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="mr-2"
              />
              <label className="mb-2">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="mr-2"
              />
              <label className="mb-2">Female</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
