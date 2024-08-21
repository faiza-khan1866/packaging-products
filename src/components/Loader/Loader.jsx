import React, { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "rgba(91,184,28,0.4)",
          }}
        >
          <DotLoader color={"#5bb81c"} size={70} />
        </div>
      )}
    </>
  );
};
export default Loader;
