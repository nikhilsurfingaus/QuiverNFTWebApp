import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import "./nft-card.css";



const NftCard = (props) => {
  const { title, id, currentBid, imgUrl, creator } = props.item;


  return (
    <Tilt perspective={600} glareEnable={false} glareMaxOpacity={0} scale={1.03} gyroscope={false} tiltMaxAngleX={0} tiltMaxAngleY={7}>
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          {title}
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Surfer</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Price</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
          >
            <i className="ri-shopping-bag-line"></i> Place Bid
          </button>

          <span className="history__link">
              <Link to={`/market/${id}`}>
              <button
                className="bid__btn d-flex align-items-center gap-1"
              >
                <i className="ri-file-list-line"></i> Details
              </button>
              </Link>


          </span>
        </div>
      </div>
    </div>
    </Tilt>
  );
};

export default NftCard;
