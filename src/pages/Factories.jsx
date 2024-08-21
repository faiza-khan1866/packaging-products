import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchFactoriesData, useFetchFactoriesData } from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const FactoriesMain = lazy(() => import("../sections/Factories"));

const Factories = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const {
    data: factoriesData,
    isLoading,
    error,
  } = useFetchFactoriesData(queryCache);
  const factoriesContent = factoriesData?.data?.content || {};

  // const [factoriesData, setFactoriesData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchFactoriesPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchFactoriesData();
  //       setFactoriesData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchFactoriesPageData();
  // }, []);

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Factories",
      link: "/factories",
      active: true,
    },
  ];
  return (
    <div style={{ background: "#E3F5E5" }}>
      <Helmet>
        <title>{factoriesContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={factoriesContent?.meta_details?.description}
        />
      </Helmet>
      <Loader isLoading={isLoading}>
        <Banner
          ShowPath={false}
          bannerTitle={factoriesContent?.banerSection?.title}
          bannerImg={
            process.env.REACT_APP_IMAGE_BASE_URL +
            factoriesContent?.banerSection?.background_image
          }
        />
        <BreadCrumbs breadCrumbItems={breadCrumbItems} />
        <FactoriesMain factoryData={factoriesContent?.factoriesSection} />
      </Loader>
    </div>
  );
};

export default Factories;
