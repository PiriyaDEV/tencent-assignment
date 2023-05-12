import React, { useEffect, useState } from "react";
// import AllButton from "../../components/button/AllButton";
import HorizontalCard from "../components/News/HorizontalCard";
// import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "react-tailwindcss-datepicker";
import Layout from "@/components/Layout/Layout";
import { getNews } from "@/services/news.service";
import Pagination from "@/components/Global/Pagination";

export default function Archive() {
  const [keyword, setKeyword] = useState("");

  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);

  const [date, setDate] = useState({
    startDate: new Date(
      new Date().getFullYear() - 4,
      new Date().getMonth(),
      new Date().getDate()
    )
      .toISOString()
      .slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    // getNewsData();
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const bannerText = [
    { name: "News and Activity", href: "/newsAndActivity" },
    {
      name: "news",
    },
  ];

  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      let res = await getNews();
      setNews(res.slice(0, 20));
    } catch {
      console.error();
    }
  };

  console.log(news);

  return (
    <>
      <Layout>
        <div id="news-all" className="max-w-screen-xl m-auto pb-[60px]">
          <div id="news-section" className="pb-[48px]">
            <h1 className="text-[28px] xl:text-[32px] text-left">
              Archive News
            </h1>

            <div className="my-[20px] flex flex-col items-start justify-between gap-[40px]">
              <div className="relative w-full">
                <input
                  defaultValue={keyword}
                  onChange={(e) => handleKeywordChange(e.target.value)}
                  placeholder={"Finding by Keyword"}
                  className="w-full font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px]"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-[25px] text-[25px] cursor-pointer absolute text-darkGray top-[12px] right-[15px] pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-[50px]">
              <div className="flex items-center gap-[50px] w-full">
                <h1 className="text-[20px] whitespace-nowrap">Time Range</h1>
                <div className="date-picker relative w-full">
                  <Datepicker value={date} onChange={handleDateChange} />
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="w-[25px] text-[25px] cursor-pointer absolute text-darkGray top-[14px] left-[15px] pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[50px]">
                <h1 className="text-[20px] whitespace-nowrap">
                  Select Category
                </h1>
                <select
                  name="ordering"
                  className="w-fit font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px]"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="desc">Latest to Oldest</option>
                  <option value="asc">Oldest to Lastest</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-[27px] mt-[38px]">
              {news?.map((item, i) => (
                <HorizontalCard data={item || {}} key={i} />
              ))}
            </div>

            {news && news.length <= 0 && (
              <p className="text-[25px] text-center mt-[40px]">
                Not found any news ...
              </p>
            )}

            {news && (
              <Pagination
                length={10 ?? ""}
                selected={page}
                function={(i) => setPage(i)}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
