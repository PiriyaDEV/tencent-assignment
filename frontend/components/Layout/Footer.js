import React from "react";
const Footer = () => {
  return (
    <div
      id="footer"
      className="pt-[48px] pb-[64px] border-t-[1px] border-lightGray2 dark:bg-darkTheme"
    >
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col gap-[16px] mt-[40px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium dark:text-white">
            Tencent Assignment
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[10px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium dark:text-white">
            By
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[10px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium dark:text-white">
            Piriya Chaigul
          </p>
          <div className="flex items-center gap-[45px]">
            <i className="bi bi-facebook text-[52px] text-white-500"></i>
            <i className="bi bi-twitter text-[30px] text-red-100 bg-white-500 rounded-full py-[4px] px-[11px]"></i>
            <i className="bi bi-youtube text-[30px] text-red-100 bg-white-500 rounded-full py-[4px] px-[11px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
