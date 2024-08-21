import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchAboutData, useFetchAboutData } from "../http/apiService";
import { QueryCache } from "react-query";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const AboutWelcome = lazy(() => import("../sections/About/AboutWelcome"));
const Founder = lazy(() => import("../sections/About/Founder"));
const MissionVission = lazy(() => import("../sections/About/MissionVission"));
const FeaturesList = lazy(() => import("../sections/About/FeaturesList"));

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const queryCache = new QueryCache();
  const { data: aboutData, isLoading, error } = useFetchAboutData(queryCache);
  const aboutContent = aboutData?.data?.content || {};

  // const [aboutData, setAboutData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchABoutPageData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader

  //       const response = await fetchAboutData();
  //       setAboutData(response?.data?.content);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchABoutPageData();
  // }, []);

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "About Us",
      link: "/about",
      active: true,
    },
  ];

  return (
    <div style={{ background: "#E3F5E5" }}>
      <Helmet>
        <title>{aboutContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={aboutContent?.meta_details?.description}
        />
      </Helmet>
      <Loader isLoading={isLoading}>
        <Banner
          ShowPath={false}
          bannerTitle={aboutContent?.banerSection?.title}
          bannerImg={
            process.env.REACT_APP_IMAGE_BASE_URL +
            aboutContent?.banerSection?.background_image
          }
        />
        <BreadCrumbs breadCrumbItems={breadCrumbItems} />
        <AboutWelcome welcomeData={aboutContent?.aboutSection} />
        <Founder founderData={aboutContent?.founderSection} />
        <MissionVission missionData={aboutContent?.missionSection} />
        <FeaturesList
          featureData={aboutContent?.featuresSection}
          introData={aboutContent?.titleSection}
        />
      </Loader>
    </div>
  );
};
export default About;
