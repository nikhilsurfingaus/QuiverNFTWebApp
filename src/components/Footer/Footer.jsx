import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

import logo from "../../assets/images/QuiverCoin.png";


const MY__ACCOUNT = [
  {
    display: "Market",
    url: "/market",
    target: "_self",
  },
  {
    display: "Mintable Store",
    url: "https://mintable.app/u/nikhilsurfingaus",
    target: "_blank",
  },
  {
    display: "Collection",
    url: "/market",
    target: "_blank",
  },
];

const RESOURCES = [
  {
    display: "Road Map",
    url: "/map",
    target: "_self",
  },
  {
    display: "Live Chat",
    url: "/chat",
    target: "_self",
  },
  {
    display: "Projects",
    url: "/project",
    target: "_self",
  },
];

const COMPANY = [
  {
    display: "Ethereum",
    url: "https://ethereum.org/en/",
    target: "_blank",
  },
  {
    display: "WaveFlightSimulations",
    url: "https://www.youtube.com/c/WaveFlightSimulations",
    target: "_blank",
  },
  {
    display: "Binance",
    url: "/trading",
    target: "_self",
  },
];

const SOCIAL = [
  {
    display: "ri-linkedin-box-line",
    url: "https://www.linkedin.com/in/nikhil-naik-76724b133",
  },
  {
    display: "ri-instagram-line",
    url: "https://www.instagram.com/pixelsurfboardnft/",
  },
  {
    display: "ri-github-fill",
    url: "https://github.com/nikhilsurfingaus",
  },
  {
    display: "ri-youtube-fill",
    url: "https://www.youtube.com/c/WaveFlightSimulations",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="rowie">
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                <img src={logo} alt='logo' className="fot_logo"/>
                </span>
                Quiver
              </h2>
              <p>
                Quiver calls all ocean lovers and wave chargers to join the Quiver community.
                Together we can ride towards conquering the bottom and blast the top turns of the crypto wave.
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>NFTs</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target={item.target} rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Blockchain</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target="_self" rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Partners</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target={item.target} rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Socials</h5>
            {SOCIAL.map((item, index) => (

            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <a target="_blank" rel="noopener noreferrer" href={item.url}> <i class={item.display}></i></a>
              </span>
            </div>
            ))}

          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2022, Developed by Nikhil Naik. @WaveFlightSimulation
              All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
