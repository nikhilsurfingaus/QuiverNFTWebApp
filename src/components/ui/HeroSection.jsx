import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";
import Tilt from "react-parallax-tilt";


import QCoin from "../../assets/images/QuiverCoin.png";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="animate__animated animate__slideInLeft">
                Build your exclusive Surfboard collection and ride on Etherum Security with the
                <span> Quiver NFTs</span>  project
              </h2>
              <p className="animate__animated animate__slideInLeft">
                Quiver calls all ocean lovers and wave chargers to own pieces of surfing history
                with NFT surfboards ridden by current and past legends of proffessional surfing. Quiver
                also aims to contribute towards the security of Ethereum Smart Contarcts with numerous
                projects that need your support.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4 animate__animated animate__slideInLeft">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>{" "}
                  <Link to="/market">Explore NFT Collection</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i class="ri-eye-line"></i>
                  <Link to="/create">Quiver Visionary</Link>
                </button>
              </div>
              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img animate__animated animate__rotateIn">
              <Tilt perspective={400} glareEnable={true} glareMaxOpacity={0} scale={1.1} gyroscope={true}>
                <img src={QCoin} alt="" className="w-100" />
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
