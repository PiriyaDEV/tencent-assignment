import { getDateString } from "@/utils/function";
import React from "react";
// import timeFunction from "../../functions/getTime";

export default function HorizontalCard(props) {
  return (
    <div className="grid grid-cols-4 border-[1px] border-lightGray2 rounded-[12px] !bg-cover !bg-center dark:bg-darkThemeBg2">
      <span
        className={
          `bg-lightGray col-span-1 rounded-l-[12px] !bg-cover !bg-center g ` +
          (props.size !== "small" && "min-h-[150px]")
        }
        style={
          props.data
            ? {
                background: `url(${props.data.imageUrl})`,
              }
            : { background: `#D9D9D9` }
        }
      />
      <div
        className={`justify-between col-span-3 flex flex-col gap-[5px] ${
          props.size === "small" ? "p-[15px]" : "p-[25px]"
        }`}
      >
        <p
          className={`capitalize cursor-pointer text-left font-medium line-clamp-2 dark:text-white ${
            props.size === "small"
              ? "text-[18px] xl:text-[20px] leading-[24px]"
              : "text-[20px] xl:text-[24px] leading-[29px]"
          }`}
        >
          {props.data?.title}
        </p>

        {props.noDate !== true && (
          <p
            className={`text-left font-medium dark:text-white ${
              props.size === "small"
                ? "text-[10px] xl:text-[12px]"
                : "text-[16px] xl:text-[18px] my-[5px]"
            }`}
          >
            {getDateString(props.data?.datetime)}
          </p>
        )}

        <p
          className={`text-left font-normal sarabun line-clamp-2 text-[14px] xl:text-[16px] max-w-[95%] mt-[12px] dark:text-white`}
        >
          {props.data?.content}
        </p>

        <p className="text-right text-blue text-[14px] xl:text-[16px] font-bold cursor-pointer dark:text-white">
          Read More
        </p>
      </div>
    </div>
  );
}
