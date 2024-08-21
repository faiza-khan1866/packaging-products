import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductInner = lazy(() => import("../pages/ProductInner"));
// const Features = lazy(() => import("../pages/Features"));
const Factories = lazy(() => import("../pages/Factories"));
const Contact = lazy(() => import("../pages/Contact"));
const Events = lazy(() => import("../pages/Events"));
const EventInner = lazy(() => import("../pages/EventInner"));
const Sustainability = lazy(() => import("../pages/Sustainability"));
const Faq = lazy(() => import("../pages/Faq"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsCondition = lazy(() => import("../pages/TermsCondition"));
const Careers = lazy(() => import("../pages/Careers"));
const Cart = lazy(() => import("../pages/Cart"));
const Error = lazy(() => import("../pages/Error"));

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<Home scrollTo="certificates" />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:cat" element={<Products />} />
      <Route path="/product/:cat/:id" element={<ProductInner />} />
      {/* <Route path="/features" element={<Features />} /> */}
      <Route path="/factories" element={<Factories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<EventInner />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Navigation;
