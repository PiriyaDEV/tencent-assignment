import React from "react";

export default function AllButton(props) {
  return (
    <div className="flex gap-[10px] justify-center items-center cursor-pointer">
      <h1 className="text-blue font-bold text-[18px] xl:text-[24px]">
        See more
      </h1>
      <i className="bi bi-chevron-double-right"></i>
      <i className="bi bi-facebook text-[52px] text-white-500"></i>
    </div>
  );
}
