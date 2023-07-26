import React from "react";

export const CustomInput = ({ name, id, value, disabled }) => {
  return (
    <div className="flex flex-col gap-2 p-2.5 bg-neutral100 rounded-[5px] w-full">
      <label htmlFor={id} className="text-xs text-[#71879C]">
        {name}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        disabled={disabled}
        className="bg-transparent focus:outline-none flex flex-1 text-grey500"
      />
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div className="w-[556px] space-y-8">
      <p className="text-base font-medium leading-tight text-gray-400">
        Profile
      </p>

      <div className="h-[72px] w-[72px] rounded-full bg-white border-2 border-green600 p-1.5">
        <div className="rounded-full w-full h-full bg-[#FAD5CC]"></div>
      </div>

      <CustomInput
        id="name"
        name="Name"
        value={`${JSON.parse(sessionStorage.getItem("user"))?.firstName} ${
          JSON.parse(sessionStorage.getItem("user"))?.lastName
        } `}
      />
      <CustomInput
        id="username"
        name="username"
        value={`@ ${JSON.parse(sessionStorage.getItem("user"))?.username}`}
        disabled={true}
      />
      <CustomInput
        id="email"
        name="Email"
        disabled={true}
        value={`${JSON.parse(sessionStorage.getItem("user"))?.email}`}
      />
      <CustomInput id="phone-no" name="Phone Number" 
      disabled={true}
      value={`${JSON.parse(sessionStorage.getItem("user"))?.phoneNumber || "No phone number yet"}`} />
      <button className="rounded-full bg-green700 py-2.5 px-8  text-white font-clash font-medium">
        Edit Details
      </button>
    </div>
  );
};

export default ProfileSettings;
