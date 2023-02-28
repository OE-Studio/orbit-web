import React from "react";
// import BellIcon from './assets/bellIcon.svg'

const OverlayWrapper = ({
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
      className={`transition duration-1000 ease-in-out ${notificationClass} z-[60] fixed  w-full  bg-[#0014284D] h-screen top-0 font-inter flex items-center justify-center`}
    >
      <div className="absolute  w-[393px] bg-white rounded-2xl overflow-hidden">

        {children}
      </div>
    </div>
  );
};

export default OverlayWrapper;
