import { motion } from "framer-motion";
import { WarningOctagon, X } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Toaster = ({ value, onClose, customStyle }) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  useEffect(() => {
    if (value === "") {
      setVisible(false);
    } else setVisible(true);
  }, [value]);

  return (
    <>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed left-1/2 -translate-x-1/2 
    shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] p-4 w-[calc(100%-32px)] md:w-[546px] bg-white top-[calc(100%+24px)] z-20 rounded-lg overflow-hidden flex justify-between ${customStyle}
    `}
        >
          <div className="absolute w-[20] h-0.5 bg-primary-300 bottom-0 left-0"></div>
          <div className="flex items-center gap-2">
            <WarningOctagon
              size={20}
              weight="duotone"
              className="text-red500"
            />
            <p className="text-gray-500 text-xs md:text-sm font-medium">
              {value}
            </p>
          </div>
          <div
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-25 cursor-pointer"
            onClick={handleClose}
          >
            <X />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Toaster;
