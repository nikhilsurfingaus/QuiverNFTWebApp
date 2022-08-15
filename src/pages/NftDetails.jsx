import React from "react";

import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";

import "../styles/nft-details.css";


import {
  IToasterTypes,
  NotificationToast,
  ToastEvent,
  toastEventManager
} from "dyzz-toaster";


const NftDetails = () => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);


  async function copyToClip() {
      try {
      await navigator.clipboard.writeText(window.location.href);
      success()
      } catch(err) {
        console.log(err)
      }

  }

  const success = () => {
    toastEventManager.emit(ToastEvent.CREATE,
      {timeOutDelay: 7000, indicateLine: true, text: 'NFT Link Copied', type: IToasterTypes.NOTIFICATION})
  };

  return (
    <>

      <section className="detail animate__animated animate__slideInUp">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft.imgUrl}
                alt=""
                className="w-100 single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>

                <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className=" d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i className="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i> 123
                    </span>
                  </div>


                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
  
                  <div className="creator__detail">
                    <p>Surfer</p>
                    <h6>{singleNft.creator}</h6>
                    
                  </div>

                  <div className=" d-flex align-items-center gap-2 single__nft-more">
                    <span className="share" onClick={copyToClip}>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                  
                </div>

                <p className="my-4">{singleNft.desc}</p>
                <a target="_blank" rel="noopener noreferrer" href={singleNft.link} className="cardLink">
                  <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                    <i className="ri-shopping-bag-line"></i>Place a Bid
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section  className="under animate__animated animate__slideInUp">
        <LiveAuction />
      </section>
      <NotificationToast />
    </>
  );
};

export default NftDetails;
