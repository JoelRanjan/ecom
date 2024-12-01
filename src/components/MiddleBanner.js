import React from "react";
import { banner_url, main_poster } from "../utils/imageUrls";
import "../App.css";

const MiddleBanner = () => {
  return (
    <div>
      <img src={main_poster} className="img-fluid banner" />
    </div>
  );
};

export default MiddleBanner;
