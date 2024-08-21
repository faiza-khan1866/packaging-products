import React, { lazy, useEffect } from "react";
import { Helmet } from "react-helmet";
import contactBanner from "../assets/images/banner/contactbanner.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCrumbs from "../components/BreadCrumbs";

const Banner = lazy(() => import("../components/Banner/Banner"));
const ContactMap = lazy(() => import("../sections/Contact/ContactMap"));
const ContactForm = lazy(() => import("../sections/Contact/ContactForm"));

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const breadCrumbItems = [
    {
      text: "Kuwait Pack",
      link: "/",
      active: false,
    },
    {
      text: "Contact Us",
      link: "/contact",
      active: true,
    },
  ];
  return (
    <div style={{ background: "#E3F5E5" }}>
      <Helmet>
        <title>Contact Us | Kuwait Pack</title>
        <meta name="description" content="#" />
      </Helmet>
      <Banner
        ShowPath={false}
        bannerImg={contactBanner}
        bannerTitle={"Contact Us"}
      />
      <BreadCrumbs breadCrumbItems={breadCrumbItems} />
      <ContactMap />
      <ContactForm />
    </div>
  );
};
export default Contact;
