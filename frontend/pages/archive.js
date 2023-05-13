import React, { useEffect, useState } from "react";
import HorizontalCard from "../components/News/HorizontalCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "react-tailwindcss-datepicker";
import Layout from "@/components/Layout/Layout";
import { getNews } from "@/services/news.service";
import Pagination from "@/components/Global/Pagination";
import { category } from "@/constants/category";

export default function Archive() {
  const [keyword, setKeyword] = useState("");

  const [categorySort, setCategorySort] = useState("all");
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [news, setNews] = useState([]);

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
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, [keyword, categorySort, page, sort, date]);

  const fetchNews = async () => {
    try {
      const options = {
        filter: {},
        pagination: {
          page: page,
        },
        sort: {
          field: "date",
          order: sort,
        },
        dateRange: {
          start: date.startDate,
          end: date.endDate,
        },
      };

      if (keyword != "") options.search = keyword;
      if (categorySort != "all") options.filter.category = categorySort;

      let [totalCount, res] = await getNews(options);

      setPageCount(totalCount);
      setNews(res);
    } catch (error) {
      console.error(error);
    }
  };

  const theme = {
    light: {
      backgroundColor: "bg-white",
      selectedColor: "text-black",
      headerColor: "text-black",
    },
    dark: {
      backgroundColor: "bg-gray-700",
      selectedColor: "text-white",
      headerColor: "text-white",
    },
  };

  return (
    <>
      <Layout>
        <div id="news-all" className="max-w-screen-xl m-auto pb-[60px]">
          <div id="news-section" className="pb-[48px]">
            <h1 className="text-[28px] xl:text-[32px] text-left dark:text-white">
              Archive News
            </h1>

            <div className="my-[20px] flex flex-col items-start justify-between gap-[40px]">
              <div className="relative w-full">
                <input
                  defaultValue={keyword}
                  onChange={(e) => handleKeywordChange(e.target.value)}
                  placeholder={"Finding by Keyword"}
                  className="w-full font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px] dark:bg-darkBlue dark:text-white"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-[25px] text-[25px] cursor-pointer absolute text-darkGray top-[12px] right-[15px] pointer-events-none"
                />
              </div>
            </div>

            <div className="flex flex-col xl:grid xl:grid-cols-2 items-center justify-between gap-[20px] xl:gap-[50px]">
              <div className="flex items-center gap-[20px] xl:gap-[50px] w-full">
                <h1 className="text-[20px] whitespace-nowrap dark:text-white">
                  Time Range
                </h1>
                <div className="date-picker relative w-full">
                  <Datepicker
                    value={date}
                    onChange={handleDateChange}
                    theme={theme}
                  />
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="w-[25px] text-[25px] cursor-pointer absolute text-darkGray top-[14px] left-[15px] pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[20px] xl:gap-[50px] w-full">
                <h1 className="text-[20px] whitespace-nowrap dark:text-white">
                  Select Category
                </h1>
                <select
                  name="ordering"
                  className="capitalize w-full font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px] dark:bg-darkBlue dark:text-white"
                  value={categorySort}
                  onChange={(event) => {
                    setCategorySort(event.target.value);
                  }}
                >
                  {category.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-[20px] flex flex-col xl:grid xl:grid-cols-2 items-center gap-[20px] xl:gap-[50px]">
              <span className="hidden xl:block"></span>
              <div className="flex items-center gap-[20px] xl:gap-[50px] w-full">
                <h1 className="text-[20px] whitespace-nowrap dark:text-white">
                  Order By
                </h1>
                <select
                  name="ordering"
                  className="capitalize w-full font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px] dark:bg-darkBlue dark:text-white"
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
              <p className="text-[25px] text-center mt-[40px] dark:text-white">
                Not found any news ...
              </p>
            )}

            {news && (
              <Pagination
                length={Math.ceil(pageCount / 10)}
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
