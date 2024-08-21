import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchFaqData, useFetchFaqData } from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const FaqSection = lazy(() => import("../sections/Faq"));

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const { data: faqData, isLoading, error } = useFetchFaqData(queryCache);
  const faqContent = faqData?.data?.content || {};

  // const [faqData, setFaqData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchFaqPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchFaqData();
  //       setFaqData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchFaqPageData();
  // }, []);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "FAQ's",
      link: "/faq",
      active: true,
    },
  ];
  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title>FAQ's | Kuwait Pack</title>
        <meta name="description" content="#" />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={faqContent?.banerSection?.title}
        bannerImg={
          process.env.REACT_APP_IMAGE_BASE_URL +
          faqContent?.banerSection?.background_image
        }
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <FaqSection faqData={faqContent?.faq} />
    </Loader>
  );
};
export default Faq;
