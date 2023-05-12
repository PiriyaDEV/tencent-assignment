import React from "react";
// import timeFunction from "../../functions/getTime";

export default function DateCard(props) {
  return (
    <div
      id="datecard"
      className={
        "rounded-[12px] flex pt-[13px] pb-[9px] px-[20px] gap-[20px] !bg-cover border-[1px] border-lightGray2 "
      }
    >
      <div
        className={`${props.hasBg && "text-white flex flex-col items-center"}`}
      >
        <h1 className="text-[28px] xl:text-[36px] font-medium leading-[43px]">
          12
        </h1>
        <h1 className="text-[20px] xl:text-[24px] font-medium leading-[28px] mt-[-8px]">
          กค.
        </h1>
        <p className="text-[10px] xl:text-[11px] font-medium leading-[14px]">
          09:00 - 12:00
        </p>
      </div>
      <div id="datecard-info" className={`${props.hasBg && "text-white"}`}>
        <p className="text-[18px] xl:text-[20px] font-medium text-left line-clamp-3">
          Event
        </p>
        <div className="flex justify-end mt-[8px]">
          <i className="bi bi-chevron-double-right"></i>
        </div>
      </div>
    </div>
  );
}
