import React from "react";
import {
  bottom_jackets,
  bottom_shirts,
  bottom_tshirts,
} from "../utils/imageUrls";

const ElevaateSection = () => {
  const centering = {
    display: "flex",
    "justify-content": "center",
  };
  return (
    <div className="container mb-5" style={centering}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="collectionList">
            <div className="collectionBox">
              <img
                src={bottom_tshirts}
                alt="img"
                className="img-fluid discoverItems elevateMain"
              />
              <div className="buttonBox ">
                <button className="button ">T-SHIRTS</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          style={{ marginTop: "50px" }}
        >
          <h1>ELEVATE - YOUR STYLE GAME!</h1>
          <div style={{ display: "flex" }}>
            <div>
              <div className="collectionList">
                <div className="collectionBox">
                  <img
                    src={bottom_shirts}
                    alt="img"
                    className="img-fluid discoverItems wardrobeOne"
                  />
                  <div className="buttonBox ">
                    <button className="button ">SHIRTS</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="collectionList">
                <div className="collectionBox">
                  <img
                    src={bottom_jackets}
                    alt="img"
                    className="img-fluid discoverItems wardrobeOne"
                  />
                  <div className="buttonBox ">
                    <button className="button ">JACKETS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevaateSection;
