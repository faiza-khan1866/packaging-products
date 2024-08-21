import React, { lazy, useEffect } from "react";
import { Helmet } from "react-helmet";
import sustainabilityBanner from "../assets/images/banner/sustainabilitybanner.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const CareersForm = lazy(() => import("../sections/Careers"));

const Careers = () => {
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
      text: "Careers",
      link: "/career",
      active: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Career | Kuwait Pack</title>
        <meta name="description" content="Career" />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={"Career"}
        bannerImg={sustainabilityBanner}
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <CareersForm />
    </>
  );
};
export default Careers;
