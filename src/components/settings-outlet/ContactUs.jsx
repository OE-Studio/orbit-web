import React from "react";
import CopiedIcon from "../Inputs/CopiedIcon";
import { copyText } from "../../utils/copyText";

const ContactUs = () => {
  return (
    <div className="w-[556px] font-inter">
      <p className="text-neutral300">Contact us</p>
      <p className="text-neutral300">
        Any questions or enquiries? Reach out to us.
      </p>

      <div className="py-8 flex justify-between items-center">
        <div className="space-y-2 ">
          <p className="text-sm text-text100">Email</p>
          <p className="text-grey500">Emeksmoney@mail.com</p>
        </div>
        <CopiedIcon
          copyMethod={() => {
            copyText("08078934567");
          }}
        />
      </div>

      <div className="py-8 border-y border-neutral100 flex justify-between items-center">
        <div className="space-y-2 ">
          <p className="text-sm text-text100">Phone Number</p>
          <p className="text-grey500">+234 (70) 428 874 76</p>
        </div>
        <CopiedIcon
          copyMethod={() => {
            copyText("07042887476");
          }}
        />
      </div>

      <div className="py-8 flex justify-between items-center">
        <div className="space-y-2 ">
          <p className="text-sm text-text100">Office Address</p>
          <p className="text-grey500 max-w-[272px]">
            No 3, Robidanu Agbati, Alakia, Ibadan, Oyo state
          </p>
        </div>
        <CopiedIcon
          copyMethod={() => {
            copyText("No 3, Robidanu Agbati, Alakia, Ibadan, Oyo state");
          }}
        />
      </div>
    </div>
  );
};

export default ContactUs;
