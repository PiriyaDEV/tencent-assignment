import React, { useEffect, useState } from "react";
// import AllButton from "../../components/button/AllButton";
import HorizontalCard from "../components/News/HorizontalCard";
// import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "react-tailwindcss-datepicker";

export default function Archive() {
  const [keyword, setKeyword] = useState("");

  const [sort, setSort] = useState("desc");

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

  return (
    <div id="news-all" className="pt-[135px] lg:pt-[0px]">
      <div className="section">
        <div className="page-container">
          {/* ข่าวสาร */}
          <div id="news-section" className="pt-[92px] pb-[48px]">
            <h1 className="text-[28px] xl:text-[32px] text-left">ข่าวสาร</h1>

            <div className="my-[20px] flex flex-col lg:grid lg:grid-cols-2 items-start justify-between gap-[40px]">
              <div className="relative w-full">
                <input
                  defaultValue={keyword}
                  onChange={(e) => handleKeywordChange(e.target.value)}
                  placeholder={"Finding by Keyword"}
                  className="w-full font-normal text-[20px] py-[11px] px-[23px] border-[1px] border-darkGray rounded-[8px]"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-[25px] cursor-pointer absolute text-darkGray top-[12px] right-[15px] pointer-events-none"
                />
              </div>
              <div className="flex flex-col items-end gap-[15px] w-full">
                <div className="flex items-center gap-[50px] w-full">
                  <h1 className="text-[20px] whitespace-nowrap">Time Range</h1>
                  <div className="date-picker relative w-full">
                    <Datepicker value={date} onChange={handleDateChange} />
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-[25px] cursor-pointer absolute text-darkGray top-[14px] left-[15px] pointer-events-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[50px]">
                  <h1 className="text-[20px] whitespace-nowrap">Sort By</h1>
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
            </div>

            <div className="flex flex-col gap-[27px] mt-[38px]">
              {/* {newsData &&
                newsData.map((item, i) => (
                  <HorizontalCard
                    data={item}
                    key={i}
                    page="newsAndActivity/news"
                    lang={lang}
                  />
                ))} */}
            </div>

            {/* {newsData && newsData.length <= 0 && (
              <p className="text-[25px] text-center mt-[40px]">
                Not found any news ...
              </p>
            )} */}

            {/* {newsData && (
              <Pagination
                length={meta?.pagination?.pageCount ?? ""}
                selected={page}
                function={(i) => setPage(i)}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
