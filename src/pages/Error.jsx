import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../sections/Error/error.scss";

export default function Error() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page not found</title>
        <meta name="errorpage" content="true" />
        <meta name="errortype" content="404 - Not Found" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className="error-wrapper mtb-60">
        <div className="txt-wrapper">
          <p className="status-code py-2">404</p>
          <p className="subtext py-2">Oops, something went wrong!</p>
          <p className="description py-2">
            The page you are looking for was moved, removed, renamed or might
            never have existed.
          </p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </div>
    </>
  );
}
