import React, { useState } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/Nft-card/NftCard";

import { NFT__DATA } from "../assets/data/data";

import { Container, Row, Col } from "reactstrap";

import "../styles/market.css";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "Event") {
      const filterData = NFT__DATA.filter((item) => item.cat === "EW");
      setData(filterData);
    }

    if (filterValue === "Champ") {
      const filterData = NFT__DATA.filter((item) => item.cat === "WT");
      setData(filterData);
    }

    if (filterValue === "Ledg") {
      const filterData = NFT__DATA.filter((item) => item.cat === "LG");
      setData(filterData);
    }


    if (filterValue === "allCat") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 0 );

      setData(filterData);
    }
  };


  // ====== SORTING DATA BY EPIC/RARE DROP =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 0.0334);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 0 && item.currentBid < 0.0334
      );

      setData(filterData);
    }
    if (filterValue === "all") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 0 );

      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"MarketPlace"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option value="allCat" >All Categories</option>
                      <option value="Event">Event Winner</option>
                      <option value="Champ">World Title</option>
                      <option value="Ledg">Legend</option>
                    </select>
                  </div>

                </div>

                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option value="all" >Sort By</option>
                    <option value="high">Epic Boards</option>
                    <option value="mid">Rare Boards</option>
                  </select>
                </div>
              </div>
            </Col>

            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4 animate__animated animate__slideInUp" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
