import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineSpaceDashboard, MdModeEditOutline, MdAddToPhotos } from 'react-icons/md';
import { FaGithub, FaEdit } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { NavLink } from "react-router-dom";
import injected from '../../functions/connector';
import { FaWallet } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";

const MobileTopNavigationBar = () => {

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

    return(
        <div className="App MbTopNavigationBarContainer">
            <Container>
                <Row style={{alignItems: "center"}}>
                    <Col>
                        <span className="MbTitle">D-Ad</span>
                    </Col>
                    <Col xs={1} sm={3} md={7}>

                    </Col>
                    <Col>
                        { account ?
                        <div className="MbMetamaskLogined">
                            <FaWallet style={{ marginRight: "5px" }} />{account?.substr(0, 3)}...{account?.substr(39, 42)}
                        </div>
                        :<div className="MbMetamaskNotLogined" onClick={connectWallet}>Connect</div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MobileTopNavigationBar;