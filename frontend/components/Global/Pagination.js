import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination(props) {
  if (props.length > 1)
    return (
      <div className="pagination mt-[100px] section gap-[12px] flex items-center justify-center">
        {[...Array(props.length)].map((item, i) => (
          <span key={i} className="text-[24px] font-medium cursor-pointer">
            <span
              className={
                i + 1 === props.selected ? "text-darkGray" : "text-blue"
              }
              onClick={() => {
                props.function(i + 1);
              }}
            >
              {i + 1}
            </span>
            {i + 1 < props.length && (
              <span
                className={
                  i + 1 === props.selected ? "text-darkGray" : "text-blue"
                }
                onClick={() => {
                  props.function(i + 1);
                }}
              >
                ,{" "}
              </span>
            )}
          </span>
        ))}
        <div
          onClick={() => {
            if (props.selected + 1 <= props.length)
              props.function(props.selected + 1);
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-[18px] text-blue cursor-pointer"
          />
        </div>
      </div>
    );
}
