import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  fetchSustainabilityData,
  useSustainabilityData,
} from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const SustainabilityWelcome = lazy(() =>
  import("../sections/Sustainability/SustainabilityWelcome")
);
const SustainabilityFeatures = lazy(() =>
  import("../sections/Sustainability/SustainabilityFeatures")
);
const SustainabilityRelatedProducts = lazy(() =>
  import("../sections/Sustainability/SustainabilityRelatedProducts")
);

const Sustainability = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();

  const {
    data: sustainabilityData,
    isLoading,
    error,
  } = useSustainabilityData(queryCache);
  const sustainabilityContent = sustainabilityData?.data?.content || {};
  const relatedProducts = sustainabilityData?.data?.related_product || [];

  // const [sustainabilityData, setSustainabilityData] = useState({});
  // const [relatedProdData, setRelatedProdData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchSustainabilityPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchSustainabilityData();
  //       setSustainabilityData(response?.data?.content);
  //       setRelatedProdData(response?.data?.related_product);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchSustainabilityPageData();
  // }, []);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Sustainability",
      link: "/sustainability",
      active: true,
    },
  ];
  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title>{sustainabilityContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={sustainabilityContent?.meta_details?.description}
        />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={sustainabilityContent?.banerSection?.title}
        bannerImg={
          process.env.REACT_APP_IMAGE_BASE_URL +
          sustainabilityContent?.banerSection?.background_image
        }
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <SustainabilityWelcome
        ecoData={sustainabilityContent?.ecoSection}
        certifData={sustainabilityContent?.CertificationSection}
      />
      <SustainabilityFeatures cardsData={sustainabilityContent?.cardsSection} />
      <SustainabilityRelatedProducts relatedProductData={relatedProducts} />
    </Loader>
  );
};
export default Sustainability;
