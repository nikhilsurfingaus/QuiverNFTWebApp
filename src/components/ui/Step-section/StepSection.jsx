import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Build Your NFT Quiver",
    desc: "Own your own digital NFT collection of surfboards. Collect them all to build your surfboard Quiver",
    icon: "ri-tools-line",
    link: "/market",
  },

  {
    title: "Follow  Our Roadmap",
    desc: "Quiver has revolutionary visions both within the Crypto and in Surfing society, find out more with our interactive Roadmap",
    icon: "ri-treasure-map-line",
    link: "/map",
  },

  {
    title: "Quiver Community",
    desc: "The Quiver community derrives from your input on our NFT art, future projects and current projects",
    icon: "ri-group-line",
    link: "/chat",
  },

  {
    title: "Etherum Projects",
    desc: "Our projects heavily revolve around the Ethereum Crypto space specfically on the security of Smart Contracts ",
    icon: "ri-vip-diamond-line",
    link: "/project",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Embrace Quiver</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <Link to={item.link} style={{ textDecoration: 'none' }} >
              <Tilt perspective={600} glareEnable={false} glareMaxOpacity={0} scale={1.05} gyroscope={false} tiltMaxAngleX={0} tiltMaxAngleY={7}>
                <div className="single__step__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div className="step__item__content">
                    <h5>
                      {item.title}
                    </h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </Tilt>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
