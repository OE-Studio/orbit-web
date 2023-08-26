import { AnimatePresence, motion } from "framer-motion";
import React from "react";
// import BellIcon from './assets/bellIcon.svg'

const SideBarWrapper = ({ toggle, children }) => {
  const notificationClass = toggle
    ? " left-0 opacity-1"
    : " -right-0 opacity-0 hidden";

  return (
    <motion.div
      className={`transition-all duration-1000 ease-in-out ${notificationClass} z-[60] fixed  w-full  bg-[#0014284D] h-screen top-0 font-inter`}
    >
      <AnimatePresence>
        <motion.div
          key={"overlay"}
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "20%", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="absolute right-0 w-1/2 h-full bg-white p-14"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SideBarWrapper;
