// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import product from "../../../assets/images/products/product.webp";
// import hoverProductImg from "../../../assets/images/products/producthover.webp";
// import ReactPaginate from "react-paginate";
// import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from "react-icons/tfi";
// import ProductSidebar from "../ProductSidebar/ProductSidebar";
// import { useNavigate } from "react-router-dom";
// import DataLoader from "../../../components/Loader/DataLoader";

// const ProductCard = ({
//   items,
//   loading,
//   subCategoryFilterData,
//   searchBarFilterData,
//   catName,
// }) => {
//   const navigate = useNavigate();

//   // pagination code start

//   const [pageNumber, setPageNumber] = useState(0);

//   const usersPerPage = 9;
//   const pagesVisited = pageNumber * usersPerPage;

//   const displayItems = items
//     ?.slice(pagesVisited, pagesVisited + usersPerPage)
//     ?.map((item, i) => {
//       return (
//         <Col sm={6} md={6} lg={4} key={i}>
//           <div className="product-item" data-aos="zoom-in" data-aos-once="true">
//             <div className="img_wrape">
//               <figure>
//                 <img
//                   src={
//                     item?.featured_img
//                       ? process.env.REACT_APP_IMAGE_BASE_URL +
//                         item?.featured_img
//                       : product
//                   }
//                   alt="product Img"
//                   loading="lazy"
//                 />
//                 <img
//                   src={
//                     item?.hover_img
//                       ? process.env.REACT_APP_IMAGE_BASE_URL + item?.hover_img
//                       : hoverProductImg
//                   }
//                   alt="product Img"
//                   className=" hoverImg"
//                   loading="lazy"
//                 />
//               </figure>
//               <Button
//                 className="buy-now-btn"
//                 onClick={() =>
//                   navigate(`/product/${item?.category?.route}/${item?.route}`)
//                 }
//               >
//                 {/* Buy Now */}
//                 Add To Quote
//               </Button>
//             </div>

//             <h3>{item?.name}</h3>
//             {/* <p>AED {item?.product_variations[0]?.price}</p> */}
//           </div>
//         </Col>
//       );
//     });

//   const pageCount = Math.ceil(items?.length / usersPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   // pagination code end
//   return (
//     <Container>
//       <div className="product-wrape mb-60">
//         <h2 className="main-title" data-aos="fade-down" data-aos-once="true">
//           {catName}
//         </h2>
//         <Row>
//           <Col sm={12} md={4} lg={3}>
//             <ProductSidebar
//               subCategoryFilterData={subCategoryFilterData}
//               searchBarFilterData={searchBarFilterData}
//             />
//           </Col>
//           <Col sm>
//             {loading ? (
//               <DataLoader />
//             ) : (
//               <>
//                 {items?.length === 0 ? (
//                   <p
//                     className="text-center text-secondary mt-5"
//                     style={{ fontSize: "18px" }}
//                   >
//                     No Product Found !!!
//                   </p>
//                 ) : (
//                   <>
//                     <p className="show-result">
//                       Showing {items?.length} of {items?.length} result
//                     </p>
//                     <Row>{displayItems}</Row>
//                     <div className="pagination-wrap">
//                       <ReactPaginate
//                         previousLabel={<TfiAngleDoubleLeft fontSize="16px" />}
//                         nextLabel={<TfiAngleDoubleRight fontSize="16px" />}
//                         pageCount={pageCount}
//                         onPageChange={changePage}
//                         containerClassName={"paginationBttns"}
//                         previousLinkClassName={"previousBttn"}
//                         nextLinkClassName={"nextBttn"}
//                         disabledClassName={"paginationDisabled"}
//                         activeClassName={"paginationActive"}
//                       />
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import product from "../../../assets/images/products/product.webp";
import hoverProductImg from "../../../assets/images/products/producthover.webp";
import ReactPaginate from "react-paginate";
import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from "react-icons/tfi";
import ProductSidebar from "../ProductSidebar/ProductSidebar";
import { useNavigate } from "react-router-dom";
import DataLoader from "../../../components/Loader/DataLoader";
import "./ProductCard.scss";

const ProductCard = ({
  items,
  loading,
  subCategoryFilterData,
  searchBarFilterData,
  catName,
  categoryData,
}) => {
  const navigate = useNavigate();
  const [viewAll, setViewAll] = useState(false);

  // pagination code start

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  const displayItems = viewAll
    ? items.map((item, i) => {
        return (
          <Col sm={6} md={6} lg={4} key={i}>
            <div
              className="product-item"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <div className="img_wrape">
                <figure>
                  <img
                    src={
                      item?.featured_img
                        ? process.env.REACT_APP_IMAGE_BASE_URL +
                          item?.featured_img
                        : product
                    }
                    alt="product Img"
                    loading="lazy"
                  />
                  <img
                    src={
                      item?.hover_img
                        ? process.env.REACT_APP_IMAGE_BASE_URL + item?.hover_img
                        : hoverProductImg
                    }
                    alt="product Img"
                    className=" hoverImg"
                    loading="lazy"
                  />
                </figure>
                <Button
                  className="buy-now-btn"
                  onClick={() =>
                    navigate(`/product/${item?.category?.route}/${item?.route}`)
                  }
                >
                  {/* Buy Now */}
                  Add To Quote
                </Button>
              </div>

              <h3>{item?.name}</h3>
              {/* <p>AED {item?.product_variations[0]?.price}</p> */}
            </div>
          </Col>
        );
      })
    : items
        ?.slice(pagesVisited, pagesVisited + usersPerPage)
        ?.map((item, i) => {
          return (
            <Col sm={6} md={6} lg={4} key={i}>
              <div
                className="product-item"
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <div className="img_wrape">
                  <figure>
                    <img
                      src={
                        item?.featured_img
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            item?.featured_img
                          : product
                      }
                      alt="product Img"
                      loading="lazy"
                    />
                    <img
                      src={
                        item?.hover_img
                          ? process.env.REACT_APP_IMAGE_BASE_URL +
                            item?.hover_img
                          : hoverProductImg
                      }
                      alt="product Img"
                      className=" hoverImg"
                      loading="lazy"
                    />
                  </figure>
                  <Button
                    className="buy-now-btn"
                    onClick={() =>
                      navigate(
                        `/product/${item?.category?.route}/${item?.route}`
                      )
                    }
                  >
                    {/* Buy Now */}
                    Add To Quote
                  </Button>
                </div>

                <h3>{item?.name}</h3>
                {/* <p>AED {item?.product_variations[0]?.price}</p> */}
              </div>
            </Col>
          );
        });

  const pageCount = Math.ceil(items?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // pagination code end

  const handleViewAll = () => {
    setViewAll(true);
  };

  return (
    <Container>
      <div className="product-wrape mb-60">
        <h2 className="main-title" data-aos="fade-down" data-aos-once="true">
          {catName}
        </h2>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <ProductSidebar
              subCategoryFilterData={subCategoryFilterData}
              searchBarFilterData={searchBarFilterData}
              categorySubCategoryData={categoryData}
            />
          </Col>
          <Col sm>
            {loading ? (
              <DataLoader />
            ) : (
              <>
                {items?.length === 0 ? (
                  <p
                    className="text-center text-secondary mt-5"
                    style={{ fontSize: "18px" }}
                  >
                    No Product Found !!!
                  </p>
                ) : (
                  <>
                    <p className="show-result">
                      Showing {/* {items?.length} of  */}
                      {items?.length} result
                    </p>
                    <Row>{displayItems}</Row>
                    {!viewAll && (
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
                    )}
                    {!viewAll && (
                      <div className="text-center mt-5">
                        <Button
                          onClick={handleViewAll}
                          className="view-more-btn"
                        >
                          View All
                        </Button>
                      </div>
                    )}
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

export default ProductCard;
