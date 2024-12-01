import React from "react";
import {
  collections_jackets,
  collections_pants,
  collections_shirts,
  collections_shorts,
  collections_trousers,
  collections_tshirts,
} from "../utils/imageUrls";
import "../App.css";

const Collections = () => {
  return (
    <div className="container collections">
      <h1 className="collectionHeading">
        COLLECTIONS - <span>TOP NOTCH </span>
      </h1>
      <div className="row collectionList">
        <div className="col-sm-12 col-md-6 col-lg-4 collectionBox">
          <img
            src={collections_shirts}
            alt="img"
            className="img-fluid collectionIconOne"
          />
          <div className="buttonBox">
            <button className="buttonMain">SHIRTS</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 collectionBox">
          <img
            src={collections_tshirts}
            alt="img"
            className="img-fluid collectionIconTwo"
          />
          <div className="buttonBox">
            <button className="button">T-SHIRTS</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 collectionBox">
          <img
            src={collections_jackets}
            alt="img"
            className="img-fluid collectionIconThree"
          />
          <div className="buttonBox">
            <button className="button">JACKETS</button>
          </div>
        </div>
      </div>
      <div className="row collectionList">
        <div className="col-sm-12 col-md-6 col-lg-4 collectionBox">
          <img
            src={collections_pants}
            alt="img"
            className="img-fluid collectionIconFour"
          />
          <div className="buttonBox">
            <button className="button">JEANS</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 collectionBox">
          <img
            src={collections_trousers}
            alt="img"
            className="img-fluid collectionIconFive"
          />
          <div className="buttonBox">
            <button className="button">TROSERS</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 collectionBox">
          <img
            src={collections_shorts}
            alt="img"
            className="img-fluid collectionIconSix"
          />
          <div className="buttonBox">
            <button className="button">SHORTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
