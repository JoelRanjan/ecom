import React from "react";
import { wardrobe_one, wardrobe_three, wardrobe_two } from "../utils/imageUrls";

const Wardrobe = () => {
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
                src={wardrobe_one}
                alt="img"
                className="img-fluid discoverItems "
              />
              <div className="buttonBox ">
                <button className="button ">SHERVANIS</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          style={{ marginTop: "50px" }}
        >
          <h1>SET YOUR WARDROBE - AMAZING COLLECTIONS ...!</h1>
          <div style={{ display: "flex" }}>
            <div>
              <div className="collectionList">
                <div className="collectionBox">
                  <img
                    src={wardrobe_two}
                    alt="img"
                    className="img-fluid discoverItems wardrobeOne"
                  />
                  <div className="buttonBox ">
                    <button className="button ">NEHRU SHIRTS</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="collectionList">
                <div className="collectionBox">
                  <img
                    src={wardrobe_three}
                    alt="img"
                    className="discoverItems wardrobeOne"
                  />
                  <div className="buttonBox ">
                    <button className="button ">DHOTIS</button>
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

export default Wardrobe;
