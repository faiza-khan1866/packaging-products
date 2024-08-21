import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  fetchPrivacyPolicyData,
  usePrivacyPolicyData,
} from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const IntroCommon = lazy(() => import("../sections/PrivacyPolicy"));

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const {
    data: privacyPolicyData,
    isLoading,
    error,
  } = usePrivacyPolicyData(queryCache);
  const privacyPolicyContent = privacyPolicyData?.data?.content || {};

  // const [privacyPolicyData, setPrivacyPolicyData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchPrivacyPolicyPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchPrivacyPolicyData();
  //       setPrivacyPolicyData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchPrivacyPolicyPageData();
  // }, []);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Privacy Policy",
      link: "/privacy-policy",
      active: true,
    },
  ];
  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title>{privacyPolicyContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={privacyPolicyContent?.meta_details?.description}
        />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={privacyPolicyContent?.banerSection?.title}
        bannerImg={
          process.env.REACT_APP_IMAGE_BASE_URL +
          privacyPolicyContent?.banerSection?.background_image
        }
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <IntroCommon introData={privacyPolicyContent?.aboutSection} />
    </Loader>
  );
};
export default PrivacyPolicy;
