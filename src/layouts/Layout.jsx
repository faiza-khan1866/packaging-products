import React from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BackToTop from "../components/BackToTop";
import FloatingIcon from "../components/FloatingIcon";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <BackToTop />
      <FloatingIcon />
      <Footer />
      <BottomTabNavigator />
    </div>
  );
};

export default Layout;
