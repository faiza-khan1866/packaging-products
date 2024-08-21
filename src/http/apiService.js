import { useQuery } from "react-query";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const api = axios.create({
  baseURL: "https://prismcloudhosting.com/K_PACK_APIS/public/v1/api",
});

// Pages API

export const fetchHomeData = () => {
  return api.get("/home");
};

export const useFetchHomeData = (queryCache) => {
  return useQuery("homeData", () => fetchHomeData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchHeaderSearchData = (query) => {
  return api.get(`/home-search?query=${query}`);
};

export const fetchAboutData = () => {
  return api.get("/about");
};

export const useFetchAboutData = (queryCache) => {
  return useQuery("aboutData", () => fetchAboutData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchFeaturesData = () => {
  return api.get("/features");
};

export const useFetchFeaturesData = (queryCache) => {
  return useQuery("featuresData", () => fetchFeaturesData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchFactoriesData = () => {
  return api.get("/factories");
};

export const useFetchFactoriesData = (queryCache) => {
  return useQuery("factoriesData", () => fetchFactoriesData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const createGetInTouchData = (formData) => {
  return api.post("/get-in-touch", formData);
};

export const createCareerFormData = (formData) => {
  return api.post("/careers", formData);
};

export const fetchBlogData = () => {
  return api.get("/blog-listing");
};

export const fetchRecentBlogData = () => {
  return api.get("/recent-blog");
};

export const fetchBlogCategoryData = () => {
  return api.get("/blog-category-count");
};

export const fetchBlogFilterData = (id) => {
  return api.get(`/blog-filter/${id}`);
};

export const createBlogSearchData = (formData) => {
  return api.post("/search-blog", formData);
};

export const fetchBlogDeatilsData = (id) => {
  return api.get(`/blog-detail/${id}`);
};

export const createBlogCommentsData = (formData) => {
  return api.post("/comments", formData);
};

export const fetchFaqData = () => {
  return api.get("/faq");
};

export const useFetchFaqData = (queryCache) => {
  return useQuery("faqData", () => fetchFaqData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchPrivacyPolicyData = () => {
  return api.get("/privacy-policy");
};

export const usePrivacyPolicyData = (queryCache) => {
  return useQuery("privacyPolicyData", () => fetchPrivacyPolicyData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchTermsConditionsData = () => {
  return api.get("/terms-condition");
};

export const useTermsConditionsData = (queryCache) => {
  return useQuery("termsConditionsData", () => fetchTermsConditionsData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

export const fetchSustainabilityData = () => {
  return api.get("/sustainability");
};

export const useSustainabilityData = (queryCache) => {
  return useQuery("sustainabilityData", () => fetchSustainabilityData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

// Products API

export const fetchCategorySubCategoryData = () => {
  return api.get("/category-drop-down");
};

export const useCategorySubCategoryData = (queryCache) => {
  return useQuery(
    "categorySubCategoryData",
    () => fetchCategorySubCategoryData(),
    {
      cache: queryCache,
      keepPreviousData: true,
      staleTime: 3000000,
      cacheTime: 3000000,
    }
  );
};

export const fetchProductData = (catRoute) => {
  return api.get(`/product-list/${catRoute}`);
};

export const createProductFilterData = (formData) => {
  return api.post("/filter-product", formData);
};

export const createProductSearchData = (formData) => {
  return api.post("/search-products", formData);
};

export const fetchProductDetailData = (id) => {
  return api.get(`/product-detail/${id}`);
};

export const fetchRelatedProductsData = (id) => {
  return api.get(`/related-products/${id}`);
};

export const createProductQuoteData = (formData) => {
  return api.post("/product-quotation", formData);
};

export const createProductReviewData = (formData) => {
  return api.post("/reviews", formData);
};

// Add more API calls as needed
