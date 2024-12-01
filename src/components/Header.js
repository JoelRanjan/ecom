import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { header_img_url } from "../utils/imageUrls";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import "../App.css";

const Header = () => {
  return (
    <header className="container-fluid bg-light py-2 fixed-top shadow">
      <div className="row align-items-center">
        <div className="col-6 col-md-3 d-flex align-items-center">
          <GiHamburgerMenu size={30} className="me-3 d-md-block" />
          <img src={header_img_url} alt="Logo" className="img-fluid icon" />
        </div>
        <div className="col-12 col-md-6 my-2 my-md-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Products"
            />
            <button className="btn btn-outline-secondary" type="button">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex justify-content-end">
          <IoIosHeartEmpty size={20} className="mx-2" />
          <FaRegUserCircle size={20} className="mx-2" />
          <IoBagOutline size={20} className="mx-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
