import Layout from "@/components/Layout/Layout";
import NewsCard from "@/components/News/NewsCard";
import HorizontalCard from "@/components/News/HorizontalCard";
import DateCard from "@/components/News/DateCard";
import AllButton from "@/components/Global/AllButton";
import { useEffect, useState } from "react";

import { getNews } from "../services/news.service";
import NewsModel from "../models/News";
import { category } from "@/constants/category";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      let [_, res] = await getNews();
      setNews(res);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(news);

  return (
    <>
      <Layout>
        <div className="max-w-screen-xl m-auto pb-[60px]">
          {/* Highlight */}
          <div
            id="mainpage"
            className="flex flex-col xl:grid xl:grid-cols-4 gap-[50px]"
          >
            <div className="col-span-3 items-start">
              <div className="flex-col xl:flex-row flex items-start justify-between">
                <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
                  Highlight News
                </h1>
                <div className="flex xl:justify-start justify-end">
                  <AllButton href={"/archive"} />
                </div>
              </div>
              <div className="mt-[22px]">
                {news.length !== 0 ? (
                  <NewsCard
                    data={NewsModel.getHighlighted(news, 0, 1)[0] || {}}
                  />
                ) : (
                  <p className="text-[18px] dark:text-white text-left">
                    No Content
                  </p>
                )}
              </div>

              <div
                id="mainpage-activity-section"
                className="flex flex-col xl:grid xl:grid-cols-2 gap-[18px] mt-[14px]"
              >
                {news.length !== 0 ? (
                  NewsModel.getHighlighted(news, 1, 5).map((item, i) => (
                    <HorizontalCard size="small" data={item || {}} key={i} />
                  ))
                ) : (
                  <p className="text-[18px] dark:text-white text-left">
                    No Content
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-1 items-start">
              <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
                Most Viewed News
              </h1>
              <div className="flex flex-col gap-[14px] mt-[22px]">
                {news.length ? (
                  NewsModel.getMostViewed(news, 0, 5).map((item, i) => (
                    <DateCard key={i} data={item || {}} hasBg={false} />
                  ))
                ) : (
                  <p className="text-[18px] dark:text-white text-left">
                    No Content
                  </p>
                )}
                <div className="self-end">
                  <AllButton href={"/archive"} />
                </div>
              </div>
            </div>
          </div>

          {/* Highlight News in Each Category */}
          {category.slice(1).map((item, index) => (
            <div key={index} className="mt-[40px]">
              <h1 className="text-[28px] xl:text-[32px] text-left capitalize dark:text-white">
                Highlight from {item} News
              </h1>
              <div className="flex flex-col xl:grid xl:grid-cols-2 gap-[27px] mt-[38px]">
                {news.length ? (
                  news
                    .filter((_news) => _news.category === item)
                    .slice(0, 4)
                    .map((item, i) => <HorizontalCard data={item} key={i} />)
                ) : (
                  <p className="text-[18px] dark:text-white text-left">
                    No Content
                  </p>
                )}
              </div>
              <div className="mt-[20px] flex justify-end">
                <AllButton href={`news?category=${item}`} />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
