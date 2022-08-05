import { v4 as uuidv4 } from 'uuid';
import Sol from "../images/SOL2.jpg";
import Nft from "../images/NFT.jpg";
import Fly from "../images/FLY.png";
import CPT from "../images/CPT.jpg";
import ETH from "../images/ETH.jpg";
import MAX from "../images/MAX.jpg";
import TAG from "../images/TAG.jpg";

const projectData = [{
        id: uuidv4(),
        name: 'PySolSweep',
        desc: 'PySolSweep is a Static Program Analysis tool, which evaluates the securiity safety of a Solidity based Smart Contract. This tool offers coverage accross three classes of attacks from Overflow/Underflow, Syntax and DAO. This benefits of PySolSweep is its ability to overcome existing Solidity Static Analysis tools limitations of a systematic approach of Bug Attack Theme coverage of bugs rather than a randmom assortment, suggested solution to overcome bug, vulnrability or countermeasure. The tool also provides a log report of the Static Analysis results and a contract rating score.',
        img: Sol,
    },
    {
        id: uuidv4(),
        name: 'NFT Collection',
        desc: 'An NFT collection is an assortment of digital assets released by an artist (or group of artists) containing a limited number of individual NFTs. Own a peice of surfing history from men and women that have competed or shaped the world of surfing. Quiver calls all ocean lovers and wave chargers to own pieces of surfing history with NFT surfboards ridden by current and past legends of proffessional surfing. Own your own digital NFT collection of surfboards. Collect them all to build your surfboard Quiver to begin your ride into the globally rising NFT digital asset lineup trend.',
        img: Nft,
    },
    {
        id: uuidv4(),
        name: 'FlyInOz',
        desc: 'FlyInOz is a web application built to connect Australian domestic travellers and aviation enthusieasts to the airlines, aircraft and airports of Australia. Providing Aussies a guide to Airline Operators and Airports, through a collated exposition of booking links and navigation information for airports. Adding to the aviation hub expereience we also offer your you as domestic travllers the opporunity to post your flight reviews in out un-filtered reviews hub. By browsing through the features provided by FlyInOz domestic Australian travellers can make more informed travel choices.',
        img: Fly,
    },
    {
        id: uuidv4(),
        name: 'QIVC Crypto Trading',
        desc: 'Quiver Coin (QIVC) is a peer-to-peer (P2P) virtual currency, which means it is not governed by a central authority. Quiver Coins network offers instant, near-zero cost payments that can be conducted by individuals or institutions across the globe. The conesnsus implemented by Quiver Coin is Proof Of Stake (PoS), meaning blockchains, an individual or group is algorithmically chosen to verify transactions with computer hardware based on the tokens they have staked, or locked up, in the network as a form of collateral. You can trade QIVC/BUSD currently on the Binance exchange.',
        img: CPT,
    },
    {
        id: uuidv4(),
        name: 'Ethereum Layer 2 Protocol',
        desc: 'Quiver is one of the layer 2 scaling solutions. It is powered by a technology called Quiver Lineups, which bundle large amounts of transaction data into digestible batches. Quiver is much cheaper to use than Ethereum, and it is increasingly becoming popular along with other layer 2 protocols. For users, Quiver feels pretty much the same as Ethereum mainnet. Your Optimism address is the same as your Ethereum mainnet address. This project supports a bunch of decentralized finance (DeFi) wallets, including MetaMask, the most popular choice just to name a few use cases. ',
        img: ETH,
    },
    {
        id: uuidv4(),
        name: 'Terrorism Response Time Application',
        desc: 'The Counter Terrorism TAG Response Time is a Python based Tkinter GUI application which estimates the time taken for a specialist reponse team known as the Tactical Assualt Group (TAG). TAG is part of the Special Air Service Regiment (SASR), under the Australian Defence Force.  The TAG unit tasked with responding as a counter-terrorism force to respond to terrorism incidents in Australia on land and maritime environments and also with conducting overseas special recovery operations. ' +
            'The TAG unit is divided into TAG-East and TAG-West, seperating Australias two major coasts.',
        img: TAG,
    },
    {
        id: uuidv4(),
        name: 'F1 2021 Season Hub',
        desc: 'The Formula 1 season that occured in the year 2021 was one to remeber for the ages, and could quite possibly go down as the greatest. With multiple world champion Lewis Hamilton at Mercedes taking on the young and fiesty Dutchman Max Verstappen and the RedBull outfit. The F1 2021 Season Hub webpage takes F1 Fans through a tour of the season, including a race-by-race summary, driver reviews, season stats and a quiz. Also on show is a timeline section called the Champions Corner, which revists Max Verstappens path to glory of his first Formula 1 drivers championship. ',
        img: MAX,
    }
];

export default projectData;