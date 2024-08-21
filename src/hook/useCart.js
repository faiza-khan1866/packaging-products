import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCategorySubCategoryData } from "../http/apiService";
import { QueryCache } from "react-query";

function useCart() {
  const { CartItems, setCartItems } = useContext(cartContext);
  const navigate = useNavigate();
  const queryCache = new QueryCache();
  let CartLength = CartItems?.length;
  const { data: categorySubCategoryData } =
    useCategorySubCategoryData(queryCache);
  const categoryData = categorySubCategoryData?.data || [];

  let ExpiryDays = 2;
  function getCartItems() {
    return CartItems;
  }
  //*************** add to cart
  function addToCart(data, variationId, qty) {
    let payload = { ...data };
    let selectedVariation = data?.product_variations?.find(
      (item) => item.id == variationId
    );
    payload.Product_selected_Variation = selectedVariation;
    let checkItem = getCartItems().filter((item) => {
      if (
        item.id == data.id &&
        item?.Product_selected_Variation?.id == variationId
      )
        return item;
    });
    if (checkItem?.length) {
      Swal.fire({
        icon: "warning",
        html: `<h5 style="font-size: 18px">Variation Already Added In Cart</h5>
            <h5 style="font-size: 16px">Product: ${checkItem[0]?.name}</h5> 
            <h5 style="font-size: 16px; padding-bottom: 20px">Variation Name: ${checkItem[0]?.Product_selected_Variation?.name}</h5> 
            <img src=${process.env.REACT_APP_IMAGE_BASE_URL}${checkItem[0]?.featured_img} height="150px" width="200px"/>
            
            <h6 style="padding-top: 20px">Quantity: ${checkItem[0]?.Quantity}</h6>`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Check Cart",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
      return;
    }
    let Category = categoryData.filter((item) => {
      let Data = item.id == payload.category_id;
      if (Data) {
        return Data;
      }
    })[0];
    let subCategory = Category?.sub_category.filter((item) => {
      if (item.id == payload.sub_category_id) return item;
    })[0];
    payload.Quantity = qty;
    payload.sub_category = subCategory;
    const expiryTime = new Date().setDate(new Date().getDate() + ExpiryDays);
    payload.Expiry_Time = expiryTime;
    setCartItems((prev) => {
      let data = [...prev, payload];
      setLocalCart(data);
      return [...prev, payload];
    });
    Swal.fire({
      icon: "success",
      html: "<h5>Product Successfully Added to Cart</h5>",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //*************** remove item from cart

  function removeFromCart(ProductId, VariationId) {
    setCartItems((prev) => {
      let updateDData = prev.filter(
        (item) =>
          item?.id !== ProductId ||
          item?.Product_selected_Variation.id !== VariationId
      );
      setLocalCart(updateDData);
      return updateDData;
    });
  }
  //*************** update item in cart

  function UpdateCart(ProductId, VariationId, qty) {
    let Cart = getCartItems();
    let UpdatedData = Cart.filter((item) => {
      if (
        item?.id == ProductId &&
        item?.Product_selected_Variation.id == VariationId
      ) {
        item.Quantity = qty;
        return item;
      } else {
        return item;
      }
    });
    setCartItems(UpdatedData);
    setLocalCart(UpdatedData);
  }
  //*************** Cart Clear
  function ClearCart() {
    localStorage.removeItem("Cart");
    setCartItems([]);
  }
  //*************** check if items are expired
  function checkCartExpiry(Cart) {
    if (!Cart) {
      return;
    }
    const today = new Date();
    // check if item expired
    const CartUpdatedList = Cart?.filter((item, i) => {
      let checkExpiry = today.getTime() > item.Expiry_Time;
      if (!checkExpiry) return item;
    });
    return CartUpdatedList;
  }
  //***************   get cart from local storage
  function getLocalCart() {
    const Cart = JSON.parse(localStorage.getItem("Cart"));
    if (!Cart) {
      return;
    }
    let cartUpdatedData = checkCartExpiry(Cart);
    setCartItems(cartUpdatedData);
  }
  //***************  set cart in local storage
  function setLocalCart(data) {
    localStorage.setItem("Cart", JSON.stringify(data));
  }
  return {
    getCartItems,
    addToCart,
    removeFromCart,
    UpdateCart,
    ClearCart,
    getLocalCart,
    CartLength,
  };
}

export default useCart;
