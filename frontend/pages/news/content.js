import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronRight,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { getNews, getNewsById } from "@/services/news.service";
import Link from "next/link";
import { getDateString } from "@/utils/function";
import DateCard from "@/components/News/DateCard";
import AllButton from "@/components/Global/AllButton";
import HorizontalCard from "@/components/News/HorizontalCard";

export default function NewsDetail() {
  const router = useRouter();
  const id = router.query.id;

  const [content, setContent] = useState({});
  const [news, setNews] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchContent();
  }, [id]);

  const fetchContent = async () => {
    try {
      let res = await getNewsById(id);
      if (!res || Object.values(res).includes(undefined)) {
        router.push("/");
        return;
      }
      setContent(res);
      await fetchMostViewedNews(res.category);
      await fetchRelatedNews(res.category);
    } catch {
      console.error();
    }
  };

  const fetchMostViewedNews = async (category) => {
    try {
      let res = await getNews(category);
      setNews(res.slice(0, 8));
    } catch {
      console.error();
    }
  };

  const fetchRelatedNews = async (category) => {
    try {
      let res = await getNews(category, "random");
      setRelatedNews(res.slice(0, 4));
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
      { name: content?.category, href: `/news?category=${content?.category}` },
      {
        name: content?.title,
      },
    ];
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen-xl m-auto pb-[60px]">
          <div className="content-detail lg:pt-[0px]">
            <div className="mb-[46px]">
              <p className="text-[18px] xl:text-[20px] font-medium text-left dark:text-white">
                <a href={`/`} className="cursor-pointer">
                  Mainpage
                </a>
                {bannerName() &&
                  bannerName().map((item, i) => (
                    <span key={i}>
                      {item.href ? (
                        <Link href={item.href}>
                          <span className="capitalize cursor-pointer">
                            {" "}
                            / {item.name}
                          </span>
                        </Link>
                      ) : (
                        <span className="capitalize cursor-pointer">
                          {" "}
                          / {item.name}
                        </span>
                      )}
                    </span>
                  ))}
              </p>

              <div className="flex flex-col xl:grid xl:grid-cols-4 gap-[50px]">
                <div className="col-span-3 items-start">
                  <h1 className="text-[28px] xl:text-[32px] text-left capitalize mt-[25px] dark:text-white">
                    {content?.title}
                  </h1>

                  <div className="w-[120px] border-[1px] border-black my-[22px] dark:border-white" />

                  <div
                    className="w-full h-[250px] xl:h-[500px] !bg-cover !bg-center rounded-[8px] mb-[20px]"
                    style={
                      content
                        ? {
                            background: `url(${content?.imageUrl})`,
                          }
                        : { background: `#D9D9D9` }
                    }
                  />

                  <div className="flex justify-start xl:flex-row flex-col items-start gap-[18px]">
                    <div className="flex items-center gap-[12px]">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-[24px] text-[24px] cursor-pointer dark:text-white"
                      />
                      <p className="text-[20px] mt-[3px] dark:text-white">
                        {getDateString(content?.datetime)}
                      </p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="w-[24px] text-[24px] cursor-pointer dark:text-white"
                      />
                      <p className="text-[20px] mt-[3px] dark:text-white">
                        {content?.author}
                      </p>
                    </div>
                  </div>

                  <div className="text-[18px] text-justify mt-[25px] dark:text-white">
                    {content?.content}
                  </div>

                  <div className="flex justify-end items-center gap-[18px] whitespace-nowrap">
                    <div className="w-full border-[1px] border-black my-[22px] dark:border-white" />
                    <div className="flex gap-[0px] items-center">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-[24px] text-[24px] dark:text-white"
                      />
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-[24px] text-[24px] dark:text-white"
                      />
                    </div>
                    <Link href={`/news?category=${content?.category}`}>
                      <p className="text-[20px] cursor-pointer hover:underline dark:text-white">
                        See All
                      </p>
                    </Link>
                  </div>

                  <div className="flex justify-end mt-[15px]">
                    <div className="flex flex-col items-start justify-end w-fit">
                      <p className="mb-[10px] text-[20px] dark:text-white">
                        Share :{" "}
                      </p>
                      <div className="flex items-center justify-end gap-[25px]">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="w-[40px] transition hover:scale-110 delay-50 text-[40px] cursor-pointer text-[#3b5998]"
                          onClick={() => shareOnFacebook()}
                        />
                        <FontAwesomeIcon
                          icon={faLine}
                          className="w-[40px] transition hover:scale-110 delay-50 text-[40px] cursor-pointer text-[#06C755]"
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

                <div className="col-span-1 items-start">
                  <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
                    Most Viewed News
                  </h1>
                  <div className="flex flex-col gap-[14px] mt-[22px]">
                    {news?.map((item, i) => (
                      <DateCard
                        key={i}
                        data={item || {}}
                        hasBg={false}
                        // lang={lang}
                      />
                    ))}
                    <div className="self-end">
                      <AllButton href={"/archive"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
              Related News
            </h1>
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-[27px] mt-[38px]">
              {relatedNews?.map((item, i) => (
                <HorizontalCard key={i} size="small" data={item || {}} />
              ))}
            </div>
            <div className="mt-[20px] flex justify-end">
              <AllButton href={"/archive"} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
