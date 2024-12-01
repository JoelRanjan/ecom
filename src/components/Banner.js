import React from "react";
import { banner_url } from "../utils/imageUrls";
import "../App.css";

const Banner = () => {
  return (
    <div className="pr-10">
      <img src={banner_url} className="img-fluid banner " />
    </div>
  );
};

export default Banner;
