import Layout from "@/components/Layout/Layout";
import NewsCard from "@/components/News/NewsCard";
import HorizontalCard from "@/components/News/HorizontalCard";
import DateCard from "@/components/News/DateCard";
import AllButton from "@/components/Global/AllButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getNews } from "@/services/news.service";
import NewsModel from "../../models/News";

export default function Category() {
  const router = useRouter();
  const category = router.query.category;

  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    try {
      let res = await getNews(category);
      if (res.length === 0) {
        router.push("/");
      } else {
        setNews(res);
      }
    } catch {
      console.error();
    }
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen-xl m-auto pb-[60px]">
          <h1 className="text-[36px] xl:text-[42px] text-left mb-[40px] font-bold capitalize dark:text-white">
            {category}
          </h1>

          {/* Highlight */}
          <div
            id="mainpage"
            className="flex flex-col xl:grid xl:grid-cols-4 gap-[50px]"
          >
            <div className="col-span-3 items-start">
              <div className="flex flex-col xl:flex-row flex items-start justify-between">
                <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
                  Highlight News
                </h1>
                <div className="flex xl:justify-start justify-end">
                  <AllButton href={"/archive"} />
                </div>
              </div>
              <div className="mt-[22px]">
                <NewsCard
                  data={NewsModel.getHighlighted(news, 0, 1)[0] || {}}
                />
              </div>

              <div
                id="mainpage-activity-section"
                className="flex flex-col xl:grid xl:grid-cols-2 gap-[18px] mt-[14px]"
              >
                {news &&
                  NewsModel.getHighlighted(news, 1, 5).map((item, i) => (
                    <HorizontalCard size="small" data={item || {}} key={i} />
                  ))}
              </div>
            </div>
            <div className="col-span-1 items-start">
              <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
                Most Viewed News
              </h1>
              <div className="flex flex-col gap-[14px] mt-[22px]">
                {news &&
                  NewsModel.getMostViewed(news, 0, 5).map((item, i) => (
                    <DateCard
                      key={i}
                      data={item || {}}
                      hasBg={false}
                      // lang={lang}
                    />
                  ))}
                <AllButton href={"/archive"} />
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
              Latest News
            </h1>
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-[27px] mt-[38px]">
              {news &&
                NewsModel.getLatestNews(news, 0, 6).map((item, i) => (
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
