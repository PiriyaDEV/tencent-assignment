import React, { useEffect, useState } from "react";
import { FormControlLabel } from "@mui/material";
import Link from "next/link";

import { category } from "@/constants/category";
import ToggleModeSwitch from "../Global/ToggleSwitch";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme);
    updateTheme(currentTheme);
  }, []);

  function toggleDarkMode() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateTheme(newTheme);
  }

  function updateTheme(currentTheme) {
    if (
      currentTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="fixed w-full bg-white top-0 shadow-lg z-[99]">
      <div className="max-w-screen-xl m-auto py-[15px]">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="text-[22px] font-bold cursor-pointer">
              Tencent Assignment
            </h1>
          </Link>

          <div>
            <FormControlLabel
              control={
                <ToggleModeSwitch
                  sx={{ m: 1 }}
                  checked={theme === "light" ? false : true}
                  onChange={toggleDarkMode}
                />
              }
              label={theme === "light" ? "Light Mode" : "Dark Mode"}
            />
          </div>
        </div>

        <div className="pt-[20px] flex items-center justify-between gap-[30px]">
          <Link href={"/"}>
            <p className="text-[16px] cursor-pointer">Mainpage</p>
          </Link>
          {category.slice(1).map((item, index) => (
            <Link href={`/news?category=${item}`} key={index}>
              <p className="text-[16px] cursor-pointer capitalize">{item}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
