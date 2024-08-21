import React, { lazy, useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import {
  fetchProductDetailData,
  fetchRelatedProductsData,
} from "../http/apiService";
import Loader from "../components/Loader/PagesLoader";
const BreadCrumbs = lazy(() => import("../components/BreadCrumbs"));
const ProductDetail = lazy(() =>
  import("../sections/ProductInner/ProductDetail")
);
const RelatedProducts = lazy(() =>
  import("../sections/ProductInner/RelatedProducts")
);

const ProductInner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { cat, id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleProductData = async () => {
      try {
        setIsLoading(true);

        const { data } = await fetchProductDetailData(id);
        setSingleProductData(data);
        const response = await fetchRelatedProductsData(cat);
        setRelatedProductData(response?.data?.filter((x) => x?.route !== id));
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleProductData();
  }, [id]);

  // handle Copy Product Link

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://k-pack.prismcloudhosting.com/product/${cat}/${id}`
      );
      Swal.fire({
        icon: "success",
        text: "Link Copied to Clipboard!",
        confirmButtonColor: "#5bb81c",
      });
    } catch (error) {
      console.error("Failed to copy link", error);
      Swal.fire({
        icon: "error",
        text: "Failed to Copy Link!",
      });
    }
  };

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: `${singleProductData?.category?.name}`,
      link: `/product/${cat}`,
      active: false,
    },
    {
      text: `${singleProductData?.name}`,
      link: `/product/${cat}/${id}`,
      active: true,
    },
  ];

  return (
    <Loader isLoading={isLoading}>
      <Helmet>
        <title> {`${singleProductData?.name}`} | Kuwait Pack </title>
        <meta name="description" content="#" />
      </Helmet>
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <ProductDetail
        handleCopy={handleCopy}
        prodRoute={`https://k-pack.prismcloudhosting.com/product/${cat}/${id}`}
        productData={singleProductData}
      />
      {relatedProductData?.length > 0 && (
        <RelatedProducts relatedProducts={relatedProductData} />
      )}
    </Loader>
  );
};
export default memo(ProductInner);
