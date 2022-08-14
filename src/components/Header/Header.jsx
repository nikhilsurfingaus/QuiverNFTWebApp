import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container } from "reactstrap";

import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/QuiverCoin.png";

import {ethers} from 'ethers'

import {
  IToasterTypes,
  NotificationToast,
  ToastEvent,
  toastEventManager
} from "dyzz-toaster";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Road Map",
    url: "/map",
  },
  {
    display: "Live Chat",
    url: "/chat",
  },
  {
    display: "Projects",
    url: "/project",
  },
  {
    display: "Trading",
    url: "/trading",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");


  //Metamask Shenanigans
  const [connText, setConnText] = useState("Connect Wallet")
	const [userBalance, setUserBalance] = useState(null);
  const [ethText, setEthText] = useState("")


  const connectWallet = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
			// console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then((result) => {
				// console.log("Wallet Connected")
        getAccountBalance(result[0]);
			})
			.catch(() => {
				// console.log("Request Rejected");
        fail()
			});

		} else {
			// console.log('Need to install MetaMask');
      fail()
		}
  }

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
      setConnText("Metamask Wallet Funds: ")
      setEthText(" Eth")
      success()
		})
		.catch(() => {
      // console.log("Request Rejected");
      fail()
		});
	};


  const success = () => {
    toastEventManager.emit(ToastEvent.CREATE,
      {timeOutDelay: 7000, indicateLine: true, text: 'SUCCESS Metamask Wallet Connected', type: IToasterTypes.NOTIFICATION})
  };

  const fail = () => {
    toastEventManager.emit(ToastEvent.CREATE,
      {timeOutDelay: 7000, indicateLine: true, text: 'ERROR Metamask Not Connected', type: IToasterTypes.ERROR})
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <Link to="/home"> 
                  <img src={logo} alt='logo' className="logo"/>
                </Link>
              </span>
              Quiver
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i className="ri-wallet-line"></i>
              </span>
              <Link to="#" onClick={connectWallet} >{connText} {userBalance} {ethText}</Link>
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
      <NotificationToast />

    </header>
  );
};

export default Header;
