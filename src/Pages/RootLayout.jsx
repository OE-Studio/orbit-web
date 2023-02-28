import logo from "../assets/logo.svg";
import NavBar from "../components/NavBar";

import Container from "../components/Container";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import Notification from "../components/overlays/Notification";
import NotificationPage from "../components/overlays/NotificationPage";

const RootLayout = () => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleNotificationPage, setToggleNotificationPage] = useState(false);
  const [currentNotification, setcurrentNotification] = useState(0)

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
                <div className="rounded-full border border-blue400 p-2 gap-3 flex">
                  <div className="h-6 w-6 bg-[#FAD5CC] rounded-full"></div>
                  <p className="text-base font-medium text-white pr-2">
                    Leyeconnect
                  </p>
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
