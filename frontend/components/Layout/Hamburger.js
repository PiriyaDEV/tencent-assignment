import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import HamburgerIcon from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { category } from "@/constants/category";
import { FormControlLabel } from "@mui/material";
import ToggleModeSwitch from "../Global/ToggleSwitch";

export default function Hamburger(props) {
  const [theme, setTheme] = useState("light");
  const [isOpen, setOpen] = useState(false);

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

  var isMenuOpen = function (state) {
    setOpen(state.isOpen);
  };

  return (
    <div className="block xl:hidden">
      <Menu
        id="hamburger-menu"
        className="dark:hamburger-dark"
        onStateChange={isMenuOpen}
        right
        customBurgerIcon={<HamburgerIcon toggled={isOpen} />}
      >
        <div className="!flex flex-col">
          <span className="flex flex-col py-[10px] px-[30px]">
            <Link href={`/`}>
              <h1 className="cursor-pointer menu-item font-normal text-[14px] text-black capitalize text-left">
                Mainpage
              </h1>
            </Link>
          </span>
          {category.slice(1).map((item, i) => (
            <span key={i} className="flex flex-col py-[10px] px-[30px]">
              <div className="flex gap-[5px] items-center">
                <Link href={`/news?category=${item}`}>
                  <h1 className="cursor-pointer menu-item font-normal text-[14px] text-black capitalize text-left">
                    {item}
                  </h1>
                </Link>
              </div>
            </span>
          ))}
          <div className="bg-darkThemeBg flex justify-start px-[30px]">
            <FormControlLabel
              className="dark:text-white"
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
      </Menu>
    </div>
  );
}
