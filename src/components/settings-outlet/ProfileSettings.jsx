import React from "react";

const CustomInput = ({ name, id, value }) => {
  return (
    <div className="flex flex-col gap-2 p-2.5 bg-neutral100 rounded-[5px] w-full">
      <label htmlFor={id} className="text-xs text-[#71879C]">{name}</label>
      <input type="text" name={id} id={id} value={value} className="bg-transparent focus:outline-none flex flex-1 text-grey500" />
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

      <CustomInput id="name" name="Name" value="Oluwatobi Bamigbade" />
      <CustomInput id="name" name="Name" value="Oluwatobi Bamigbade" />
      <CustomInput id="email" name="Email" value="ogunsleye123@gmail.com" />
      <CustomInput id="phone-no" name="Phone Number" value="08136143995" />
      <button className="rounded-full bg-green700 py-2.5 px-8  text-white font-clash font-medium">Edit Details</button>
    </div>
  );
};

export default ProfileSettings;
