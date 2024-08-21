import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from "react-icons/tfi";
import thumbanil from "../../../assets/images/blog/thumnail.jpg";
import { useNavigate } from "react-router-dom";
import BlogSideBar from "../../../components/BlogSideBar/BlogSideBar";
import DataLoader from "../../../components/Loader/DataLoader";
import "./EventList.scss";

const EventList = ({
  items,
  categoryFilterData,
  isLoading,
  searchBarFilterData,
}) => {
  const navigate = useNavigate();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // pagination code start

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayItems = items
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    ?.map((item) => {
      return (
        <Col sm={12} lg={6} key={item?.id}>
          <div
            className="card Blog_card"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <div className="Thumbnail">
              <img
                className="img-fluid"
                src={
                  item?.featured_img
                    ? process.env.REACT_APP_IMAGE_BASE_URL + item?.featured_img
                    : thumbanil
                }
                alt="Blog_thumbnail"
                loading="lazy"
              />
            </div>
            <div className="blog_details">
              <p className="date">
                {new Date(item?.created_at)?.toLocaleDateString(
                  "en-US",
                  options
                )}
              </p>
              <h4 className="heading">{item?.title}</h4>
              <p
                className="deitals"
                dangerouslySetInnerHTML={{ __html: item?.short_description }}
              />
              <Button
                className="read_more_btn"
                onClick={() => navigate(`/event/${item?.route}`)}
              >
                Read More
              </Button>
            </div>
          </div>
        </Col>
      );
    });

  const pageCount = Math.ceil(items?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // pagination code end

  return (
    <Container>
      <div className="blog_wrape mb-60">
        <Row>
          <Col sm={12} md={4} lg={3}>
            <BlogSideBar
              category={true}
              search={true}
              blogFilter={categoryFilterData}
              searchBarFilter={searchBarFilterData}
            />
          </Col>
          <Col sm>
            {isLoading ? (
              <DataLoader />
            ) : (
              <>
                {items?.length === 0 ? (
                  <p
                    className="text-center text-secondary mt-5"
                    style={{ fontSize: "18px" }}
                  >
                    No Event Found !!!
                  </p>
                ) : (
                  <>
                    <Row>{displayItems}</Row>
                    <div className="pagination-wrap">
                      <ReactPaginate
                        previousLabel={<TfiAngleDoubleLeft fontSize="14px" />}
                        nextLabel={<TfiAngleDoubleRight fontSize="14px" />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EventList;
