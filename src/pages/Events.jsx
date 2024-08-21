import React, { lazy, useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import {
  fetchBlogData,
  fetchBlogFilterData,
  createBlogSearchData,
} from "../http/apiService";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "../assets/images/banner/eventsbanner.png";
import BreadCrumbs from "../components/BreadCrumbs";
const Banner = lazy(() => import("../components/Banner/Banner"));
const BlogMain = lazy(() => import("../sections/Events/EventList/EventList"));

const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const response = await fetchBlogData();
        setBlogData(response?.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchBlogListData();
  }, []);

  // filter Blogs Data According to category

  const fetchCategoryFilterData = async (catId) => {
    try {
      setIsLoading(true); // Show the loader

      const response = await fetchBlogFilterData(catId);
      setBlogData(response?.data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  // filter search bar

  const fetchSearchFormData = useCallback(
    async (searchTerm) => {
      let formData = {
        keyword: searchTerm,
      };
      try {
        setIsLoading(true); // Show the loader
        const response = await createBlogSearchData(formData);
        setBlogData(response?.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    },
    [setIsLoading, setBlogData]
  );

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Events",
      link: "/events",
      active: true,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Events | Kuwait Pack</title>
        <meta name="description" content="#" />
      </Helmet>
      <Banner ShowPath={false} bannerTitle={"Events"} bannerImg={bannerImg} />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <BlogMain
        items={blogData}
        categoryFilterData={fetchCategoryFilterData}
        isLoading={isLoading}
        searchBarFilterData={fetchSearchFormData}
      />
    </>
  );
};

export default Events;
