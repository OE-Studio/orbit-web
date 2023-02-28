import React from "react";
// import BellIcon from './assets/bellIcon.svg'

const SideBarWrapper = ({
  toggle,
  children,
}) => {
  React.useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [toggle]);

  const notificationClass = toggle ? " left-0" : " -right-0  hidden";

  return (
    <div
      className={`transition duration-1000 ease-in-out ${notificationClass} z-[60] fixed  w-full  bg-[#0014284D] h-screen top-0 font-inter`}
    >
      <div className="absolute right-0 w-1/2 h-full bg-white p-14">

        {children}
      </div>
    </div>
  );
};

export default SideBarWrapper;
