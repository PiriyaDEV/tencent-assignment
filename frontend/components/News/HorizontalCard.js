import React from "react";
// import timeFunction from "../../functions/getTime";

export default function HorizontalCard(props) {
  return (
    <div className="grid grid-cols-4 border-[1px] border-lightGray2 rounded-[12px] !bg-cover !bg-center">
      <span
        className={
          `bg-lightGray col-span-1 rounded-l-[12px] !bg-cover !bg-center ` +
          (props.size !== "small" && "min-h-[150px]")
        }
        style={
          props.data && props.data.image && props.data.image.image.data !== null
            ? {
                background: `url(${process.env.REACT_APP_API_URL}${props.data.image.image.data[0].attributes.url})`,
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
          className={`capitalize cursor-pointer text-left font-medium line-clamp-3 ${
            props.size === "small"
              ? "text-[18px] xl:text-[20px] leading-[24px]"
              : "text-[20px] xl:text-[24px] leading-[29px]"
          }`}
          // onClick={() => {
          //   if (props.page === "newsAndActivity/news")
          //     window.open(
          //       `${process.env.REACT_APP_WEB_URL}/${props.lang}/${props.page}/${props.data.slug}`,
          //       "_self"
          //     );
          //   else if (props.page === "article")
          //     window.open(
          //       `${process.env.REACT_APP_WEB_URL}/${props.lang}/${props.page}/${props.data.slug}`,
          //       "_self"
          //     );
          // }}
        >
          Event name
        </p>

        {props.noDate !== true && (
          <p
            className={`text-left font-medium ${
              props.size === "small"
                ? "text-[10px] xl:text-[12px]"
                : "text-[16px] xl:text-[18px] my-[5px]"
            }`}
          >
            12 ตค.
          </p>
        )}

        <p
          className={`text-left font-normal sarabun line-clamp-2 text-[14px] xl:text-[16px] max-w-[95%] mt-[12px]`}
        >
          <span className="font-bold">รายละเอียด :</span> Event Detail
        </p>

        <p className="text-right text-blue text-[14px] xl:text-[16px] font-bold cursor-pointer">
          อ่านเพิ่มเติม
        </p>
      </div>
    </div>
  );
}
