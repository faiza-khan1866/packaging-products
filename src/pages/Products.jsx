import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  fetchProductData,
  createProductFilterData,
  createProductSearchData,
} from "../http/apiService";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductCard from "../sections/Products/ProductCard";

const Products = () => {
  const { cat } = useParams();
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchProductListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const response = await fetchProductData(cat);
        setProductData(
          response?.data?.product?.sort((a, b) => a.position - b.position)
        );
        setCategoryData(response?.data?.category_drop_down);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchProductListData();
  }, [cat]);

  // filter Product by  subcategory

  const fetchSubCategoryFilterData = async (catRoute, subCatId) => {
    let formData = {
      category_route: catRoute,
      sub_category_id: subCatId,
    };
    try {
      setIsLoading(true); // Show the loader
      const response = await createProductFilterData(formData);
      setProductData(response?.data?.sort((a, b) => a.position - b.position));
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  // filter search bar

  const fetchSearchFormData = useCallback(async (searchTerm) => {
    let formData = {
      category_id: cat,
      keyword: searchTerm,
    };
    try {
      setIsLoading(true); // Show the loader
      const response = await createProductSearchData(formData);
      setProductData(response?.data?.sort((a, b) => a.position - b.position));
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  }, []);

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: `${
        productData?.find((x) => x?.category?.route == cat)?.category?.name ==
        undefined
          ? "Search Result"
          : productData?.find((x) => x?.category?.route == cat)?.category?.name
      }`,
      link: `/product/${cat}`,
      active: true,
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          {productData?.find((x) => x?.category?.route == cat)?.category
            ?.name == undefined
            ? "Search Result"
            : productData?.find((x) => x?.category?.route == cat)?.category
                ?.name}{" "}
          | Kuwait Pack
        </title>
        <meta name="description" content="#" />
      </Helmet>
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <ProductCard
        items={productData}
        loading={isLoading}
        subCategoryFilterData={fetchSubCategoryFilterData}
        searchBarFilterData={fetchSearchFormData}
        catName={
          productData?.find((x) => x?.category?.route == cat)?.category?.name
        }
        categoryData={categoryData}
      />
    </>
  );
};
export default Products;
