import React from "react";
import { BsStars } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const Offers = () => {
  return (
    <div className="container">
      <div className="row offerContainer">
        <div className="col-sm-12 col-md-6 col-lg-4 collectionList">
          <div className="collectionBox">
            <div className="offersBox">
              <h4>EVERYTHING</h4>
              <h1>UNDER ₹799</h1>
            </div>
            <div className="buttonBox offerSide">
              <BsStars size={30} />
            </div>
            <div className="buttonBox offerDown">
              <h5>Wohoo...!</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 collectionList">
          <div className="collectionBox">
            <div className="offersBox">
              <h4>EVERYTHING</h4>
              <h1>UNDER ₹999</h1>
            </div>
            <div className="buttonBox offerDown">
              <FaCircle size={30} />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 collectionList">
          <div className="collectionBox">
            <div className="offersBox">
              <h4>EVERYTHING</h4>
              <h1>UNDER ₹1299</h1>
            </div>
            <div className="buttonBox offerRight">
              <IoIosStar size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
