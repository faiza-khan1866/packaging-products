import React, { lazy, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchBlogDeatilsData } from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const EventDetails = lazy(() =>
  import("../sections/Events/EventInner/EventInner")
);

const EventInner = () => {
  const { id } = useParams();
  useEffect(() => {
    AOS.init();
  }, []);
  const [blogDetailData, setBlogDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogsDetailData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const response = await fetchBlogDeatilsData(id);
        setBlogDetailData(response?.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchBlogsDetailData();
  }, [id]);
  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Events",
      link: "/events",
      active: false,
    },
    {
      text: `${blogDetailData?.title}`,
      link: `/event/${id}`,
      active: true,
    },
  ];
  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title>{blogDetailData?.meta_details?.title}</title>
        <meta
          name="description"
          content={blogDetailData?.meta_details?.description}
        />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerTitle={"Events"}
        bannerImg={
          process.env.REACT_APP_IMAGE_BASE_URL + blogDetailData?.banner_img
        }
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <EventDetails blogDetails={blogDetailData} />
    </Loader>
  );
};

export default EventInner;
