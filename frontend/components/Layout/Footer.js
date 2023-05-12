import React from "react";
const Footer = () => {
  return (
    <div id="footer" className="pt-[48px] pb-[64px] border-t-[1px] border-lightGray2">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex gap-[32px] items-center justify-center">
          <p className="text-[16px] text-white-500 cursor-pointer">
            เกี่ยวกับโครงการ
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            ติวเตอร์ขั้นเทพ
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            ดูติวย้อนหลัง
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            ดูติวไลฟ์สด
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            Tips & Trick
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            อัพเดตโครงการ
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">
            คำถามที่พบบ่อย
          </p>
          <p className="text-[16px] text-white-500 cursor-pointer">ติดต่อเรา</p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[40px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium">
            ร่วมเปิดโอกาสสู่เยาวชนไทย
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[32px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium">
            ร่วมสนับสนุนหลักทางการศึกษา
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[32px] items-center">
          <p className="text-[24px] text-white-500 text-center font-medium">
            ติดตามพวกเราได้ที่
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
