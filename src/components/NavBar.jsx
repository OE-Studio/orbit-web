import { NavLink } from "react-router-dom";
import navElements from "../data/NavElements";

const NavElement = ({ label, icon, activeIcons, to, linkDisabled }) => {
  let handleClick = (e) => {
    if (linkDisabled) e.preventDefault();
  };

  const activeIcon = (
    <div className="flex items-center gap-2.5">
      {activeIcons}
      <p className={`${"text-white"} font-inter }`}>{label}</p>
    </div>
  );

  const inActiveIcon = (
    <div className="flex items-center gap-2.5">
      {icon}
      <p className={`${"text-blue200"} font-inter }`}>{label}</p>
    </div>
  );

  return (
    <NavLink
      onClick={handleClick}
      to={to}
      children={({ isActive }) => (isActive ? activeIcon : inActiveIcon)}
    />
  );
};

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-9">
        {navElements.map((item, index) => {
          return (
            <NavElement
              label={item.label}
              icon={item.icon}
              activeIcons={item.activeIcon}
              to={item.to}
              linkDisabled={item.linkDisabled}
            />
          );
        })}
      </div>

{/* Feature not Working Yet */}
      {/* <div className="flex items-center font-inter font-medium gap-2 py-2.5 px-[18px] bg-green600 rounded-full">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.273 6.61719C3.09435 5.89073 4.15348 5.49049 5.25 5.49219H18.75C19.891 5.49219 20.933 5.91719 21.727 6.61719C21.6357 5.89212 21.2828 5.22534 20.7346 4.74201C20.1865 4.25869 19.4808 3.99206 18.75 3.99219H5.25C4.51921 3.99206 3.81349 4.25869 3.26536 4.74201C2.71722 5.22534 2.36435 5.89212 2.273 6.61719ZM2.273 9.61719C3.09435 8.89073 4.15348 8.49049 5.25 8.49219H18.75C19.891 8.49219 20.933 8.91719 21.727 9.61719C21.6357 8.89212 21.2828 8.22534 20.7346 7.74201C20.1865 7.25869 19.4808 6.99206 18.75 6.99219H5.25C4.51921 6.99206 3.81349 7.25869 3.26536 7.74201C2.71722 8.22534 2.36435 8.89212 2.273 9.61719ZM5.25 9.99219C4.45435 9.99219 3.69129 10.3083 3.12868 10.8709C2.56607 11.4335 2.25 12.1965 2.25 12.9922V18.9922C2.25 19.7878 2.56607 20.5509 3.12868 21.1135C3.69129 21.6761 4.45435 21.9922 5.25 21.9922H18.75C19.5456 21.9922 20.3087 21.6761 20.8713 21.1135C21.4339 20.5509 21.75 19.7878 21.75 18.9922V12.9922C21.75 12.1965 21.4339 11.4335 20.8713 10.8709C20.3087 10.3083 19.5456 9.99219 18.75 9.99219H15C14.8011 9.99219 14.6103 10.0712 14.4697 10.2119C14.329 10.3525 14.25 10.5433 14.25 10.7422C14.25 11.3389 14.0129 11.9112 13.591 12.3332C13.169 12.7551 12.5967 12.9922 12 12.9922C11.4033 12.9922 10.831 12.7551 10.409 12.3332C9.98705 11.9112 9.75 11.3389 9.75 10.7422C9.75 10.5433 9.67098 10.3525 9.53033 10.2119C9.38968 10.0712 9.19891 9.99219 9 9.99219H5.25Z"
            fill="#001428"
          />
        </svg>

        <p className="text-[#001428]"> Fund Wallet</p>
      </div> */}
    </div>
  );
};

export default NavBar;
