import React, { useState, useEffect } from 'react';
import injected from '../../functions/connector';
import { FaWallet } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";

const TopNavigationBar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    const { account, active, activate } = useWeb3React();

    const connectWallet = async () => {
        try {
          await activate(injected, (error) => {
            console.log(error);
            if ("/No Ethereum provider was found on window.ethereum/")
              throw new Error("Metamask 익스텐션을 설치해주세요");
          });
        } catch (err) {
          alert(err);
          window.open("https://metamask.io/download.html");
        }
      };

    return (
        <div className="TopNavigationBar">
            {/* <div className={scrollPosition < 100 ? "original_header" : "change_header"}> */}
            <div className="original_header">
                <span className="pagetitle"></span>
                <div>
                    {active ? (
                        <div className="login-complete" /*onClick={handleOpenMenu}*/ style={{ backgroungcolor: "#fff", marginRight: "0px" }}>
                            <FaWallet style={{ marginRight: "5px" }} />
                            {account?.substr(0, 6)}...{account?.substr(36, 42)}
                        </div>
                    ) : (
                        <div className="login-notyet" onClick={connectWallet}>Connect</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopNavigationBar;