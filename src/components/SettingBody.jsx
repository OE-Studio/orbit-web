import {
  BellIcon,
  ChevronRightIcon,
  CreditCardIcon,
  LockClosedIcon,
  PaintBrushIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "./Container";
import SwitchInput from "./Inputs/SwitchInput";

const generalMenu = [
  {
    title: "Profile",
    description: "Edit your username, and contact details.",
    iconBg: "bg-teal50",
    icon: <UserIcon className="h-6 text-green600" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings",
  },
  {
    title: "Appearance",
    description: "Style your background",
    iconBg: "bg-blue50",
    icon: <PaintBrushIcon className="h-6 text-blue25" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings/appearance",
  },

  {
    title: "Bank and Cards",
    description: "See your added bank & card details",
    iconBg: "bg-orange50",
    icon: <CreditCardIcon className="h-6 text-orange500" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings/bank",
  },
];

const settingsMenu = [
  {
    title: "Pin",
    description: "Change your Pin.",
    iconBg: "bg-green50",
    icon: <LockClosedIcon className="h-6 text-green500" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings/pin",
  },
  {
    title: "Password",
    description: "Change your password",
    iconBg: "bg-orange50",
    icon: <LockClosedIcon className="h-6 text-orange500" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings/password",
  },
];

const helpMenu = [
  {
    title: "Contact us",
    description: "Reach out to us here",
    iconBg: "bg-purple25",
    icon: <ChatBubbleLeftRightIcon className="h-6 text-purple300" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "#",
  },
  {
    title: "Delete account",
    description: "This account cannot be reversed",
    iconBg: "bg-red50",
    icon: <TrashIcon className="h-6 text-red500" />,
    leading: <ChevronRightIcon className="h-6 text-[#1C1B1F] self-center" />,
    to: "/settings/delete",
  },
];

const MenuItem = ({ iconBg, icon, title, description, leading, to }) => {
  return (
    <Link to={to ? to : "#"}>
      <div className="border-t border-neutral100 py-4 flex gap-4 ">
        <div
          className={`w-[42px] h-[42px] rounded-full ${iconBg} flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-base font-medium leading-tight text-grey400">
            {title}
          </p>
          <p className="text-xs font-medium leading-tight text-neutral300 mt-1">
            {description}
          </p>
        </div>
        {leading}
      </div>
    </Link>
  );
};

const SettingBody = () => {
  const [notification, setNotification] = useState(true);

  return (
    <Container>
      <div className="h-[42px]" />
      <div className="flex gap-[90px]">
        <div className="w-[350px]">
          <p className="text-base font-medium font-inter text-neutral300">
            General
          </p>
          <div className="h-4" />
          {generalMenu.map((menu, index) => {
            return (
              <MenuItem
                title={menu.title}
                description={menu.description}
                icon={menu.icon}
                iconBg={menu.iconBg}
                leading={menu.leading}
                to={menu.to}
              />
            );
          })}

          <div className="h-[42px] w-full" />

          <p className="text-base font-medium font-inter text-neutral300">
            Settings
          </p>
          <div className="h-4" />
          {settingsMenu.map((menu, index) => {
            return (
              <MenuItem
                title={menu.title}
                description={menu.description}
                icon={menu.icon}
                iconBg={menu.iconBg}
                leading={menu.leading}
                to={menu.to}
              />
            );
          })}

          <div className="h-[42px] w-full" />

          <p className="text-base font-medium font-inter text-neutral300">
            Notification
          </p>
          <div className="h-[16px] w-full" />
          <div>
            <div className="border-t border-neutral100 py-4 flex gap-4 ">
              <div
                className={`w-[42px] h-[42px] rounded-full bg-blue50 flex items-center justify-center`}
              >
                <BellIcon className="h-6 text-blue25" />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium leading-tight text-grey400">
                  Notifications
                </p>
                <p className="text-xs font-medium leading-tight text-neutral300 mt-1">
                  Allow push notifications
                </p>
              </div>
              <SwitchInput value={notification} setValue={setNotification} />
            </div>
          </div>

          <div className="h-[42px] w-full" />
          <p className="text-base font-medium font-inter text-neutral300">
            Help & Support
          </p>
          <div className="h-[16px] w-full" />
          {helpMenu.map((menu, index) => {
            return (
              <MenuItem
                title={menu.title}
                description={menu.description}
                icon={menu.icon}
                iconBg={menu.iconBg}
                leading={menu.leading}
                to={menu.to}
              />
            );
          })}

          <div className="h-[42px] w-full" />
        </div>
        <div className=" bg-neutral200 w-[1px]" />
        <div>
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default SettingBody;
