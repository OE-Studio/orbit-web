import React from "react";
export function Spinner({ color }) {
  const backgroundColor = 'border-4 border-x-transparent border-b-transparent border-t-[' + color + ']'
  return <div className={`lds-ring`}>
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
    <div className={backgroundColor}></div>
  </div>;
}
