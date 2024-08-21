import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchFeaturesData, useFetchFeaturesData } from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const FeaturesIntro = lazy(() => import("../sections/Features/FeaturesIntro"));
const FeaturesMain = lazy(() => import("../sections/Features/FeaturesMain"));

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const {
    data: featuresData,
    isLoading,
    error,
  } = useFetchFeaturesData(queryCache);
  const featuresContent = featuresData?.data?.content || {};

  // const [featuresData, setFeaturesData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchFeaturesPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchFeaturesData();
  //       setFeaturesData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchFeaturesPageData();
  // }, []);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Features",
      link: "/features",
      active: true,
    },
  ];
  return (
    <div style={{ background: "#E3F5E5" }}>
      <Helmet>
        <title>{featuresContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={featuresContent?.meta_details?.description}
        />
      </Helmet>
      <Loader isLoading={isLoading}>
        <Banner
          ShowPath={false}
          bannerTitle={featuresContent?.banerSection?.title}
          bannerImg={
            process.env.REACT_APP_IMAGE_BASE_URL +
            featuresContent?.banerSection?.background_image
          }
        />
        <BreadCrumbs breadCrumbItems={breadCrumbItems} />
        <FeaturesIntro introData={featuresContent?.titleSection} />
        <FeaturesMain featureData={featuresContent?.featuresSection} />
      </Loader>
    </div>
  );
};

export default Features;
