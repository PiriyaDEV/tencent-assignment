import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AllButton(props) {
  return (
    <div className="flex gap-[10px] justify-center items-center cursor-pointer">
      <h1 className="text-blue font-bold text-[18px] xl:text-[24px]">
        See more
      </h1>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        className="mt-[4px] text-[24px] cursor-pointer text-blue"
      />
    </div>
  );
}
