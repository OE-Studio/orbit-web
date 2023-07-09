import logo from "../assets/logo.svg";
import NavBar from "../components/NavBar";

import Container from "../components/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import Notification from "../components/overlays/Notification";
import NotificationPage from "../components/overlays/NotificationPage";
import { MdLogout } from "react-icons/md";

const RootLayout = () => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleNotificationPage, setToggleNotificationPage] = useState(false);
  const [currentNotification, setcurrentNotification] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Notification
        setToggle={setToggleNotification}
        toggle={toggleNotification}
        setTogglePage={setToggleNotificationPage}
        set_current_notification={setcurrentNotification}
      />
      <NotificationPage
        current_notification={currentNotification}
        setToggle={setToggleNotificationPage}
        toggle={toggleNotificationPage}
        setMainNotification={setToggleNotification}
      />
      <div className="font-inter">
        <div className="bg-blue500 w-full  py-[36px] ">
          <Container className="container mx-auto">
            <div className="flex justify-between">
              <img src={logo} alt="" />
              <div className="flex gap-6">
                <div
                  className=" h-10 w-10 rounded-full bg-blue400 items-center justify-center flex cursor-pointer"
                  onClick={() => {
                    console.log(toggleNotification);
                    setToggleNotification(!toggleNotification);
                  }}
                >
                  <BellIcon className="h-6 text-green200" />
                </div>
                <div className="relative">
                  <div
                    className="rounded-full border border-blue400 p-2 gap-3 flex cursor-pointer"
                    onClick={() => {
                      const logOutbutton = document.getElementById("logoutDiv");
                      logOutbutton.classList.toggle("hidden");
                    }}
                  >
                    <div className="h-6 w-6 bg-[#FAD5CC] rounded-full"></div>
                    <p className="text-base font-medium text-white pr-2">
                      {JSON.parse(sessionStorage.getItem("user")).username}
                    </p>
                  </div>
                  <div
                    id="logoutDiv"
                    className="transition-all duration-300 absolute w-[146px] bg-white p-2 rounded-lg top-full right-0 mt-3 hidden"
                  >
                    <div
                      className="flex justify-between items-center py-[5px] px-3 rounded-full hover:bg-neutral100"
                      onClick={() => {
                        navigate("/login");
                        sessionStorage.clear();
                      }}
                    >
                      <p className="text-grey200 font-inter font-medium text-sm">
                        Log out
                      </p>
                      <MdLogout />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[120px]" />
            <NavBar />
          </Container>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
