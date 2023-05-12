import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import NewsModel from "../../models/News";
import { getNewsById } from "@/services/news.service";

export default function NewsDetail(props) {
  const router = useRouter();
  const id = router.query.id;

  let [content, setContent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      let res = await getNewsById(id);
      setContent(res);
    } catch {
      console.error();
    }
  };

  const shareOnFacebook = () => {
    const url = window.location.href; // get the current URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`; // create the Facebook share URL with the current URL as a parameter
    window.open(facebookUrl, "_blank", "width=600,height=400"); // open the Facebook share dialog in a new tab
  };

  const shareOnLine = () => {
    const url = window.location.href; // get the current URL
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      url
    )}`; // create the Line share URL with the current URL as a parameter
    window.open(lineUrl, "_blank"); // open the Line share dialog in a new tab
  };

  const bannerName = () => {
    return [
      { name: "News and Activity", href: "/newsAndActivity" },
      { name: "News", href: "/newsAndActivity/news" },
      {
        name: "Event Name",
      },
    ];
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen-xl m-auto pb-[60px]">
          <div className="content-detail lg:pt-[0px]">
            <div className="mb-[46px]">
              <p className="text-[18px] xl:text-[20px] font-medium text-left">
                <a href={`/`} className="cursor-pointer">
                  หน้าหลัก
                </a>
                {bannerName() &&
                  bannerName().map((item, i) => (
                    <span key={i} className="capitalize cursor-pointer">
                      {" "}
                      / {item.name}
                    </span>
                  ))}
              </p>

              <h1 className="text-[28px] xl:text-[32px] text-left capitalize mt-[25px]">
                {content?.title}
              </h1>

              <div className="w-[120px] border-[1px] border-black my-[22px]" />

              <div className="flex justify-start items-start gap-[18px]">
                <div className="flex items-center gap-[12px]">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-[24px] cursor-pointer"
                  />
                  <p className="text-[20px] mt-[3px]">12 ตค 2022</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <p className="text-[20px] mt-[3px]">
                    {[...Array(5)].map((item, i) => (
                      <span key={i}>
                        <>
                          <span className="cursor-pointer text-blue hover:underline">
                            #Tag {i + 1}
                          </span>
                          {i + 1 < 5 && ", "}
                        </>
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div>{content?.content}</div>

              <div className="flex justify-end items-center gap-[18px] whitespace-nowrap">
                <div className="w-full border-[1px] border-black my-[22px]" />
                <div className="flex gap-[0px] items-center">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[24px]"
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[24px]"
                  />
                </div>
                <p className="text-[20px] cursor-pointer hover:underline">
                  ข่าวทั้งหมด
                </p>
              </div>

              <div className="flex justify-end mt-[15px]">
                <div className="flex flex-col items-start justify-end w-fit">
                  <p className="mb-[10px] text-[20px]">Share : </p>
                  <div className="flex items-center justify-end gap-[25px]">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="transition hover:scale-110 delay-50 text-[40px] cursor-pointer text-[#3b5998]"
                      onClick={() => shareOnFacebook()}
                    />
                    <FontAwesomeIcon
                      icon={faLine}
                      className="transition hover:scale-110 delay-50 text-[40px] cursor-pointer text-[#06C755]"
                      onClick={() => shareOnLine()}
                    />
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                      }}
                      className="transition hover:scale-110 delay-50 cursor-pointer w-[45px] h-[45px] bg-lightGray hover:bg-lightGray rounded-full section text-[10px] p-[3px]"
                    >
                      Copy Link
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
