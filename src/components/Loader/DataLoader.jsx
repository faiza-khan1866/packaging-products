import React, { memo } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const DataLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ptb-60">
      <PuffLoader color={"#5bb81c"} size={60} />
    </div>
  );
};
export default memo(DataLoader);
