import React, { lazy, useEffect } from "react";
import { Helmet } from "react-helmet";
import contactBanner from "../assets/images/banner/sustainabilitybanner.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const CartMain = lazy(() => import("../sections/Cart/CartMain"));

const Cart = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Shopping Cart",
      link: "/cart",
      active: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Kuwait Pack</title>
        <meta name="description" content="#" />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerImg={contactBanner}
        bannerTitle={"Shopping Cart"}
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <CartMain />
    </>
  );
};

export default Cart;
