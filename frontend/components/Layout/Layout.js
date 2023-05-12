import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hamburger from "./Hamburger";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Hamburger />
      <div className="mt-[80px] pt-[50px] xl:pt-[125px] dark:bg-darkThemeBg px-[20px]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
