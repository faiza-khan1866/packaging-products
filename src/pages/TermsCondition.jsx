import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  fetchTermsConditionsData,
  useTermsConditionsData,
} from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const IntroCommon = lazy(() => import("../sections/PrivacyPolicy"));

const TermsCondition = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const {
    data: termsConditionsData,
    isLoading,
    error,
  } = useTermsConditionsData(queryCache);
  const termsConditionsContent = termsConditionsData?.data?.content || {};

  // const [termsConditionsData, setTermsConditionsData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchTermsConditionsPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchTermsConditionsData();
  //       setTermsConditionsData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchTermsConditionsPageData();
  // }, []);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Terms & Conditions",
      link: "/terms-condition",
      active: true,
    },
  ];
  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title>{termsConditionsContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={termsConditionsContent?.meta_details?.description}
        />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={termsConditionsContent?.banerSection?.title}
        bannerImg={
          process.env.REACT_APP_IMAGE_BASE_URL +
          termsConditionsContent?.banerSection?.background_image
        }
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <IntroCommon introData={termsConditionsContent?.aboutSection} />
    </Loader>
  );
};
export default TermsCondition;
