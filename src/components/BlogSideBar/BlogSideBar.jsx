import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import blogthumbnail from "../../assets/images/home/getintouch.jpg";
import {
  fetchRecentBlogData,
  fetchBlogCategoryData,
} from "../../http/apiService";
import { useNavigate } from "react-router-dom";
import "./BlogSideBar.scss";

const BlogSideBar = ({ category, search, blogFilter, searchBarFilter }) => {
  const navigate = useNavigate();
  // recent blogs Data

  const [recentBlogData, setRecentBlogData] = useState([]);

  useEffect(() => {
    const fetchRecentBlogsData = async () => {
      try {
        const response = await fetchRecentBlogData();
        setRecentBlogData(response?.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };

    fetchRecentBlogsData();
  }, []);

  // Blog Category Data

  const [blogCategoryData, setBlogCategoryData] = useState([]);

  useEffect(() => {
    const fetchBlogsCategoriesData = async () => {
      try {
        const response = await fetchBlogCategoryData();
        setBlogCategoryData(response?.data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };

    fetchBlogsCategoriesData();
  }, []);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // category checkbox

  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
    blogFilter(value);
  };

  // serach bar code

  const [searchTerm, setSearchTerm] = useState("");

  const isFirstRun = React.useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      searchBarFilter(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, searchBarFilter]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="Blog_side_bar">
      {search && (
        <div className="search-wrape" data-aos="fade-down" data-aos-once="true">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <InputGroup.Text>
              <IoIosSearch fontSize="24px" />
            </InputGroup.Text>
          </InputGroup>
        </div>
      )}

      <div
        className="recent_blog_wrape"
        data-aos="fade-down"
        data-aos-once="true"
      >
        <h3>Recent Posts</h3>
        {recentBlogData?.map((item) => (
          <div
            className="recent_blog"
            key={item?.id}
            data-aos="fade-down"
            data-aos-once="true"
          >
            <div className="blog_thumbnail">
              <img
                src={
                  item?.featured_img
                    ? process.env.REACT_APP_IMAGE_BASE_URL + item?.featured_img
                    : blogthumbnail
                }
                loading="lazy"
                alt="blog_thumnail"
              />
            </div>
            <div className="blog_detail">
              <span
                className="blog_detail_subTitle"
                onClick={() => navigate(`/event/${item?.route}`)}
              >
                {item?.title}
              </span>
              <span className="blog_detail_title">
                {new Date(item?.created_at)?.toLocaleDateString(
                  "en-US",
                  options
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {category && (
        <div
          className="blog_categories"
          data-aos="fade-down"
          data-aos-once="true"
        >
          <h3>Categories</h3>
          {blogCategoryData?.map((item) => (
            <div
              className="single_Category mb-3"
              key={item?.id}
              data-aos="fade-down"
              data-aos-once="true"
            >
              <div className="category">
                <input
                  type="checkbox"
                  checked={selectedOption === item?.id}
                  onChange={() => handleCheckboxChange(item?.id)}
                />
                <span>{item?.name}</span>
              </div>
              <div className="category_total">
                <span>{item?.blogs_count}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSideBar;
