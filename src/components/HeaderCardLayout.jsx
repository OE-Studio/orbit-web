import React from "react";
import Container from "./Container";

const HeaderCardLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* <div className="h-[105px] bg-blue500 w-full absolute top-[-1px]" /> */}
      <div className="relative">
        <Container>
          <div className="shadow-[10px_10px_100px_0px_#0000000A] bg-white border border-[#E5ECF5] rounded-[20px] p-7">
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderCardLayout;
