import React from "react";
export function Spinner({ color }) {
  const newColor = `border-t-[${color}]`
  const backgroundColor = `border-4 border-x-transparent border-b-transparent ${newColor} rounded-full`
  return <div className="lds-ring">
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
  </div>;
}
