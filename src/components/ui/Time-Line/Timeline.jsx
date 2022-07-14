import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";
import { Link } from "react-router-dom";

function Timeline() {
  return (
    <div className='Time'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(27, 153, 188)' }}
                date="2022 - Present"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-plant-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">Quiver Project Concieved</h3>
                <h4 className="vertical-timeline-element-subtitle">Mr Nikhil Naik (Director)</h4>
                <p>
                Quiver project launches within the space of Crypto and NFT on the Ethereumn Blockchain
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2022 - 2028"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-gallery-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Quiver NFT Collection</h3>
                <h4 className="vertical-timeline-element-subtitle">Surfboard Art</h4>
                <p>
                Own a peice of surfing history from men and women that have competed or shaped
                the world of surfing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2022 - 2023"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-file-shield-line"/>}
            >
                <h3 className="vertical-timeline-element-title">PySolSweep</h3>
                <h4 className="vertical-timeline-element-subtitle">Smart Contract Program Analysis</h4>
                <p>
                A Static Program Analysis tool, drawing from Python libraries in securing the
                saftey of Ethereum Solidity Smart Contracts
                </p>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-eye-line"></i>
                  <Link to="/create">Quiver Visionary</Link>
                </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2023 - Present"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-copper-coin-line" />}
            >
                <h3 className="vertical-timeline-element-title">QuiverCoin</h3>
                <h4 className="vertical-timeline-element-subtitle">Cryptocurrency Trading</h4>
                <p>
                QuiverCoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. 
                QuiverCoin is an open source, global payment network that is fully decentralized without any central authorities.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2023 - Present"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-hand-heart-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">SaveOurWaves</h3>
                <h4 className="vertical-timeline-element-subtitle">TheOceanCleanUp Partner</h4>
                <p>
                Quiver has partnered with TheOceanCleanUp to support and fund the continual
                efforts of the largest ocean cleanup project to save our worlds oceans. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2024 - 2029"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-xbox-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">Xbox NFT Metaverse</h3>
                <h4 className="vertical-timeline-element-subtitle"> Xbox NFT Metaverse Integration</h4>
                <p>
                Microsoft has annouced that Quiver will be working with Xbox in its transition towards
                integration of the Metaverse project and NFT architecture.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2023 - 2030"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-rocket-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Ethereum Transaction Efficiency</h3>
                <h4 className="vertical-timeline-element-subtitle">Ethereum Layer 2 Protocol</h4>
                <p>
                Instead of running all computation and data on the Ethereum network, Quiver puts all transaction 
                data on-chain and runs computation off-chain, increasing Ethereum's transactions per second 
                and decreasing transaction fees.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2026 - 2032"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-plane-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Quiver Air Industries</h3>
                <h4 className="vertical-timeline-element-subtitle">Aircraft Blockchain Based Software</h4>
                <p>
                Quiver Air Industries partners with Airbus, Boeing and Lockheed Martin in overhauling current
                avionic systems and programs towards a more secure and effecient blockchain based system.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(12, 38, 79)', color: '#fff' }}
                date="2028 - Present"
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-building-2-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Quiver Metaverse Metropolis</h3>
                <h4 className="vertical-timeline-element-subtitle">Quiver Community Built Metaverse City</h4>
                <p>
                The end goal of the Quiver project is a metaverse metropolis city hub. With locations in the Gold Coast, California,
                 London, Goa, Rio De Janeiro, Jeffreys Bay, Fiji, Tahiti and Bali. Quiver owners of NFT surfboards can then use these 
                 surfboards in the metaverse wavepool. 
                </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(11, 74, 145)', color: '#fff' }}
                icon={<i className="ico ri-medal-2-fill"/>}
            />
        </VerticalTimeline>

    </div>
  )
}

export default Timeline