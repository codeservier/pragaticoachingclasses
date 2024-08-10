import React from "react";
import data from "../../assets/3.png";
const SingleBanner = ({ image }) => {
  return (
    <div className="px-[2%] box-border">
      <img
        src={image || data}
        alt="single-banner"
        height="2000"
        width="1900"
       className="h-400 w-full object-cover rounded-[10px]"
      />
    </div>
  );
};

export default SingleBanner;
