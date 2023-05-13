import { getDateString } from "@/utils/function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

export default function NewsCard(props) {
  return (
    <Link href={`/news/content?id=${props.data.id}`}>
      <div
        className="cursor-pointer w-full h-[254px] border-[1px] border-lightGray2 rounded-[12px] items-start flex flex-col justify-end p-[18px] !bg-cover !bg-center"
        style={
          props.data
            ? {
                background: `url(${props.data.imageUrl})`,
              }
            : { background: `#D9D9D9` }
        }
      >
        <p
          className={
            `capitalize cursor-pointer text-[20px] xl:text-[24px] text-white font-medium text-left ` +
            (props.lineClamp ? `line-clamp-${props.lineClamp}` : "line-clamp-1")
          }
        >
          {props.data?.title}
        </p>
        <div className="flex justify-between items-center mt-[9px] w-full">
          <h1 className="text-[12px] xl:text-[14px] text-white font-medium text-left flex flex-col sm:flex-row items-start sm:items-center gap-[12px]">
            {getDateString(props.data?.datetime)}
            <span className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                icon={faUser}
                className="w-[12px] text-[12px] cursor-pointer dark:text-white"
              />
              <span>{props.data?.views} Views</span>
            </span>
          </h1>
          {!props.hideIcon && (
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="w-[24px] text-[24px] cursor-pointer text-white"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
