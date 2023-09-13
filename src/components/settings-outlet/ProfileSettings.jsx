import React from "react";
import { useSelector } from "react-redux";

export const CustomInput = ({ name, id, value, disabled, readOnly }) => {
  return (
    <div className="flex flex-col gap-2 p-2.5 bg-neutral100 rounded-[5px] w-full">
      <label htmlFor={id} className="text-xs text-[#71879C]">
        {name}
      </label>
      <input
        readOnly={readOnly}
        type="text"
        name={id}
        id={id}
        value={value}
        disabled={disabled}
        className="bg-transparent focus:outline-none flex flex-1 text-grey500 disabled:text-grey300"
      />
    </div>
  );
};

const ProfileSettings = () => {
  const user = useSelector((state) => state.user.user);
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
        value={`${user?.firstName} ${user?.lastName} `}
        readOnly={"readOnly"}
      />
      <CustomInput
        id="username"
        name="username"
        value={`@ ${user?.username}`}
        disabled={true}
        readOnly={"readOnly"}
      />
      <CustomInput
        id="email"
        name="Email"
        disabled={true}
        value={`${user?.email}`}
        readOnly={"readOnly"}
      />
      <CustomInput
        id="phone-no"
        name="Phone Number"
        disabled={true}
        value={`${user?.phoneNumber || "No phone number yet"}`}
        readOnly={"readOnly"}
      />
      <button
      disabled
      className="disabled:bg-grey300 rounded-full bg-green700 py-2.5 px-8  text-white font-clash font-medium">
        Edit Details
      </button>
    </div>
  );
};

export default ProfileSettings;
