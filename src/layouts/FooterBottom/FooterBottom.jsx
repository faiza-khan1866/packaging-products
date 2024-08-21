import React from "react";
// import { Link } from "react-router-dom";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-wrape">
      {/* <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-condition">Terms and Condition</Link> */}
      <p>
        Designed And Managed By{" "}
        <a href="https://www.prism-me.com/" target="_blank">
          Prism Digital
        </a>
      </p>
    </div>
  );
};

export default FooterBottom;
