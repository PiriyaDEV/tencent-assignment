import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[80px] pt-[125px] dark:bg-darkThemeBg">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
