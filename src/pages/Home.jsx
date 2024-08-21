import React, { lazy, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useFetchHomeData } from "../http/apiService";
import { QueryCache } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { homeBannerData } from "../api/HomeApi";
import { useInView } from "react-intersection-observer";
const HomeHeader = lazy(() => import("../sections/Home/HomeHeader"));
const Quote = lazy(() => import("../sections/Home/Quote"));
const Welcome = lazy(() => import("../sections/Home/Welcome"));
const Features = lazy(() => import("../sections/Home/Features"));
const SkillsSection = lazy(() => import("../sections/Home/SkillsSection"));
const FeaturedProducts = lazy(() =>
  import("../sections/Home/FeaturedProducts")
);
const TagLine = lazy(() => import("../sections/Home/TagLine"));
const Industries = lazy(() => import("../sections/Home/Industries"));
const GetInTouch = lazy(() => import("../sections/Home/GetInTouch"));
const Maps = lazy(() => import("../sections/Home/Maps"));

const Home = ({ scrollTo }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const bannerData = homeBannerData?.home?.banerSection || [];
  const queryCache = new QueryCache();
  const { data: homeData, isLoading, error } = useFetchHomeData(queryCache);
  const homeContent = homeData?.data?.home?.content || {};
  const featuredProductsData = homeData?.data?.sustainableProduct || [];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ background: "#E3F5E5", overflow: "hidden" }}>
      <Helmet>
        <title>{homeContent?.meta_details?.title}</title>
        <meta
          name="description"
          content={homeContent?.meta_details?.description}
        />
      </Helmet>
      <HomeHeader sliderData={bannerData} />
      <Quote quoteData={homeContent?.QuoteSection} isLoading={isLoading} />
      <Welcome
        welcomeData={homeContent?.welcomeSection}
        isLoading={isLoading}
      />
      <Features
        featuresData={homeContent?.services_count}
        isLoading={isLoading}
      />
      <SkillsSection
        skillSliderData={homeContent?.experienceSection_Banner}
        skillData={homeContent?.experienceSection}
        isLoading={isLoading}
      />
      <div ref={ref} style={{ minHeight: "750px" }}>
        {inView ? (
          <>
            <FeaturedProducts
              featuredData={featuredProductsData}
              isLoading={isLoading}
            />
            <TagLine
              tagData={homeContent?.companyCertificationSection}
              scrollTo={scrollTo}
              isLoading={isLoading}
            />
            <Industries
              industriesData={homeContent?.industriesWeServeSection}
              isLoading={isLoading}
            />
            <GetInTouch />
            <Maps />
          </>
        ) : null}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};
export default memo(Home);
