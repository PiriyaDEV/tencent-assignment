import { getDateSplitString } from "@/utils/function";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function DateCard(props) {
  return (
    <div
      id="datecard"
      className={
        "rounded-[12px] flex pt-[13px] pb-[9px] px-[20px] gap-[20px] !bg-cover border-[1px] border-lightGray2 "
      }
      style={
        props.data
          ? {
              background: `url(${props.data.imageUrl})`,
            }
          : { background: `#D9D9D9` }
      }
    >
      <div
        className={`${
          props.hasBg ? "text-white flex flex-col items-center" : null
        }`}
      >
        <h1 className="text-[28px] xl:text-[36px] font-medium leading-[43px] text-white">
          {getDateSplitString(props.data?.datetime).date}
        </h1>
        <h1 className="text-[20px] xl:text-[24px] font-medium leading-[28px] mt-[-8px] text-white">
          {getDateSplitString(props.data?.datetime).month}
        </h1>
        <p className="text-[10px] xl:text-[11px] font-medium leading-[14px] text-white">
          <span className="font-bold">
            {getDateSplitString(props.data?.datetime).year}
          </span>{" "}
          <br /> {getDateSplitString(props.data?.datetime).time}
        </p>
      </div>
      <div
        id="datecard-info"
        className={`w-full ${props.hasBg ? "text-white " : null}`}
      >
        <p className="text-[18px] xl:text-[20px] font-medium text-left line-clamp-3 text-white">
          {props.data?.title}
        </p>
        <div className="flex justify-end mt-[8px]">
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="w-[18px] text-[18px] cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
}
