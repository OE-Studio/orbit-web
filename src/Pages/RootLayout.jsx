import logo from "../assets/logo.svg";
import NavBar from "../components/NavBar";

import Container from "../components/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import Notification from "../components/overlays/Notification";
import NotificationPage from "../components/overlays/NotificationPage";
import { MdLogout } from "react-icons/md";
import { useEffect } from "react";
import {
  logOut,
} from "../components/settings-outlet/SettingsApi";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleNotificationPage, setToggleNotificationPage] = useState(false);
  const [currentNotification, setcurrentNotification] = useState(0);
  const navigate = useNavigate();

  const [selectedBg, setSelectedBg] = useState(null);
  const allBg = useSelector((state) => state.backgrounds.data);

  const user = useSelector((state) => state.user.user);
  const userStatus = useSelector((state) => state.user.status);
  const { notifications } = useSelector((state) => state.notifications);
  const unreadNotifications = notifications.filter(
    (item) => item.status !== "read"
  ).length;

  useEffect(() => {
    if (allBg) {
      const preferredBg = user.preferredBg;
      const currentBg = allBg.find((item) => {
        return item.name === preferredBg;
      });
      if (currentBg) {
        setSelectedBg(currentBg);
      }
    }

    return () => {};
    // eslint-disable-next-line
  }, [allBg, userStatus]);

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
        <div className="bg-blue500 w-full  py-[36px] relative">
          <div className="h-[105px] bg-blue500 w-full absolute top-full" />
          {selectedBg ? (
            <div
              alt=""
              className={`absolute h-[calc(100%+105px)] top-0 w-full z-0`}
              style={{
                backgroundImage: `url(${selectedBg.bgLink})`,
              }}
            />
          ) : null}
          <Container className="container mx-auto ">
            <div className="flex justify-between relative z-[2]">
              <img src={logo} alt="" />
              <div className="flex gap-6">
                <div
                  className=" h-10 w-10 rounded-full bg-blue400 items-center justify-center flex cursor-pointer relative"
                  onClick={() => {
                    setToggleNotification(!toggleNotification);
                  }}
                >
                  <BellIcon className="h-6 text-green200" />
                  {unreadNotifications > 0 && (
                    <div className="rounded-full aspect-square p-1 bg-red-500 text-white absolute -top-2 -right-2 h-6 w-6 center">
                      <p className="text-sm font-semibold">
                        {unreadNotifications}
                      </p>
                    </div>
                  )}
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
                      {user.username}
                    </p>
                  </div>
                  <button
                    id="logoutDiv"
                    className="transition-all duration-300 absolute w-[146px] bg-white p-2 rounded-lg top-full right-0 mt-3 hidden"
                  >
                    <div
                      className="flex justify-between items-center py-[5px] px-3 rounded-full hover:bg-neutral100 cursor-pointer"
                      onClick={async () => {
                        const response = await logOut();
                        
                        if (response.success) {
                          navigate("/login");
                          sessionStorage.clear();
                          window.location.reload();
                        }
                      }}
                    >
                      <p className="text-grey200 font-inter font-medium text-sm">
                        Log out
                      </p>
                      <MdLogout />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[120px]" />
            <div className="relative z-[2]">
              <NavBar />
            </div>
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
