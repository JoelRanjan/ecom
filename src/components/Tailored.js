import React from "react";
import {
  favorate_four,
  favorate_one,
  favorate_three,
  favorate_two,
} from "../utils/imageUrls";
import "../App.css";
import { IoIosHeartEmpty } from "react-icons/io";

const Tailored = () => {
  const style = {
    "text-decoration": "line-through",
    "margin-left": "3px",
  };

  const styleOffer = {
    color: "red",
    "margin-left": "5px",
  };

  return (
    <div className="container">
      <h1>TAILORED - FOR YOU</h1>
      <div className="row" style={{ display: "flex" }}>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="collectionList">
            <div className="collectionBox">
              <img
                src={favorate_one}
                alt="img"
                className="img-fluid discoverItems"
              />
              <div className="buttonBox discoverSide">
                <button className="button ">{"<"}</button>
              </div>
              <div className="buttonBox discoverLike">
                <IoIosHeartEmpty size={40} className="discoverSideIcons" />
              </div>
            </div>
          </div>
          <h4 style={{ "margin-top": "0px" }}>Dark Broen Structured Puff</h4>
          <p>
            ₹ 750/- <span style={style}>₹1200</span>
            <span style={styleOffer}>55% off</span>
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="collectionList">
            <div className="collectionBox">
              <img
                src={favorate_two}
                alt="img"
                className="img-fluid discoverItems"
              />
              <div className="buttonBox discoverLike">
                <IoIosHeartEmpty size={40} className="discoverSideIcons" />
              </div>
            </div>
          </div>
          <h4 style={{ "margin-top": "0px" }}>Dark Broen Structured Puff</h4>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="collectionList">
            <div className="collectionBox">
              <img
                src={favorate_three}
                alt="img"
                className="img-fluid discoverItems"
              />
              <div className="buttonBox discoverLike">
                <IoIosHeartEmpty size={40} className="discoverSideIcons" />
              </div>
            </div>
          </div>
          <h4 style={{ "margin-top": "0px" }}>Dark Broen Structured Puff</h4>
          <p>
            ₹ 750/- <span style={style}>₹1200</span>
            <span style={styleOffer}>55% off</span>
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="collectionList">
            <div className="collectionBox">
              <img
                src={favorate_four}
                alt="img"
                className="img-fluid discoverItems"
              />
              <div className="buttonBox discoverRightSide">
                <button className="button ">{">"}</button>
              </div>
              <div className="buttonBox discoverLike">
                <IoIosHeartEmpty size={40} className="discoverSideIcons" />
              </div>
            </div>
          </div>
          <h4 style={{ "margin-top": "0px" }}>Dark Broen Structured Puff</h4>
          <p>
            ₹ 750/- <span style={style}>₹1200</span>
            <span style={styleOffer}>55% off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tailored;
