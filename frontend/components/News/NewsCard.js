import { getDateString } from "@/utils/function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
// import timeFunction from "../../functions/getTime";

export default function NewsCard(props) {
  return (
    <div
      className="cursor-pointer w-full h-[254px] rounded-[12px] items-start flex flex-col justify-end p-[18px] !bg-cover !bg-center"
      style={
        props.data
          ? {
              background: `url(${props.data.imageUrl})`,
            }
          : { background: `#D9D9D9` }
      }
    >
      <Link href={`/news/content?id=${props.data.id}`}>
        <p
          className={
            `capitalize cursor-pointer text-[20px] xl:text-[24px] text-white font-medium text-left ` +
            (props.lineClamp ? `line-clamp-${props.lineClamp}` : "line-clamp-1")
          }
        >
          {props.data?.title}
        </p>
      </Link>
      <div className="flex justify-between items-center mt-[9px] w-full">
        <h1 className="text-[12px] xl:text-[14px] text-white font-medium text-left">
          {getDateString(props.data?.datetime)}
        </h1>
        {!props.hideIcon && (
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="text-[24px] cursor-pointer text-white"
          />
        )}
      </div>
    </div>
  );
}
