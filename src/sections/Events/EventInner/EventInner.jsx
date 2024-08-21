import React from "react";
import blogmainImage from "../../../assets/images/blog/blogImg.jpg";
import { Container, Row, Col } from "react-bootstrap";
import TagsAndShareBar from "../../../components/TagsAndShareBar/TagsAndShareBar";
import SingleCommentArea from "../../../components/SingleCommentArea/SingleCommentArea";
import CommentArea from "../../../components/CommentArea/CommentArea";
import BlogSideBar from "../../../components/BlogSideBar/BlogSideBar";
import "./EventInner.scss";

const EventInner = ({ blogDetails }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Container>
      <div className="blog_Inner_wrape mb-60">
        <Row>
          <Col sm={12} md={4} lg={3}>
            <BlogSideBar category={false} search={false} />
          </Col>
          <Col sm>
            <div
              className="blog_img_wrape"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <img
                className="img-fluid"
                src={
                  blogDetails?.featured_img
                    ? process.env.REACT_APP_IMAGE_BASE_URL +
                      blogDetails?.featured_img
                    : blogmainImage
                }
                alt="Blog_Main_image"
                loading="lazy"
              />
            </div>
            <div
              className="blog_details"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="blog_date">
                <span>
                  {new Date(blogDetails?.created_at)?.toLocaleDateString(
                    "en-US",
                    options
                  )}
                </span>
              </div>
              <h6 className="mt-2 blog_details_title">{blogDetails?.title}</h6>
              <p
                className="mt-1 blog_inner_details"
                dangerouslySetInnerHTML={{ __html: blogDetails?.description }}
              />
              <h4 className="blog_title_details">{blogDetails?.sub_title}</h4>
              {/* <Row>
                <Col sm={12} md={6} lg={6} className="image_group">
                  <img
                    className="img-fluid"
                    src={blogmainImage}
                    alt="Blog_Main_image"
                  />
                </Col>
                <Col sm={12} md={6} lg={6} className="image_group">
                  <img
                    className="img-fluid"
                    src={blogmainImage}
                    alt="Blog_Main_image"
                  />
                </Col>
              </Row> */}
              <TagsAndShareBar
                category={blogDetails?.category}
                blogData={blogDetails}
              />
              {blogDetails?.comments?.length > 0 && (
                <SingleCommentArea commentsData={blogDetails?.comments} />
              )}
              <CommentArea blogId={blogDetails?.id} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EventInner;
