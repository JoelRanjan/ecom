import React from "react";
import { apple_ios, google_play, header_img_url } from "../utils/imageUrls";
import { MdOutlineCopyright } from "react-icons/md";
import "../App.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row footer">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <img src={header_img_url} className="img-fluid footerIcon" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h3>Useful links</h3>
          <p>About Us</p>
          <p>Privacy Policy / Return & Exchange</p>
          <p>Terms & Conditions</p>
          <p>Track Order</p>
          <p>My Account</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h3>Categories</h3>
          <p>Top Wear</p>
          <p>Bottom Wear</p>
          <p>Indian & Festive Wear</p>
          <p>Sports & Active Wear</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <h3>Download App</h3>
          <div>
            <img src={google_play} />
            <br />
            <img src={apple_ios} />
          </div>
        </div>
      </div>
      <div>
        <p>
          <MdOutlineCopyright />
          All Copyrights reserved by Codingster
        </p>
      </div>
    </div>
  );
};

export default Footer;
