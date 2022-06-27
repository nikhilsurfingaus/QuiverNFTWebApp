import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";

import QCoin from "../../assets/images/QuiverCoin.png";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Build your exclusive Surfboard collection and ride on Etherum Security with the
                <span> Quiver NFTs</span>  project
              </h2>
              <p>
                Quiver calls all ocean lovers and wave chargers to own pieces of surfing history
                with NFT surfboards ridden by current and past legends of proffessional surfing. Quiver
                also aims to contribute towards the security of Ethereum Smart Contarcts with numerous
                projects that need your support.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>{" "}
                  <Link to="/market">Explore</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={QCoin} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
