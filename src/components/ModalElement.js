import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import contract from '../contracts/Ads.json';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import injected from "../functions/connector";
const contractAddress = "0xB46Da19840033fdaE1635f9EDe38E0a7ed8241E9";
const abi = contract.abi;
const ModalElement = ({ data }) => {

    const { account, active, activate } = useWeb3React();

    const connectWallet = async () => {
      try {
        await activate(injected, (error) => {
          // 크롬 익스텐션 없을 경우 오류 핸들링
          console.log(error);
          if ("/No Ethereum provider was found on window.ethereum/")
            throw new Error("Metamask 익스텐션을 설치해주세요");
        });
      } catch (err) {
        alert(err);
        window.open("https://metamask.io/download.html");
      }
    };
    console.log(account);


    const [videoended, setVideoended] = useState(false);

    function VideoEnd(e){
        setVideoended(true);
    }

    const mintERC20Handler = async () => {
        try {
          const { ethereum } = window;
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const Ads = new ethers.Contract(contractAddress, abi, signer);
    
            console.log("Initialize payment");
            let erctxn = await Ads.reward(account);
            
            console.log("mining... please wait");
            await erctxn.wait();
    
            console.log(`mind, see transaction: ${erctxn.hash}`);
    
          } else {
            console.log("Ethereum object does not exist");
          }
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <>
            <Modal.Header closeButton style={{backgroundColor:"#2B3437", color:"#ffffff"}}>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {data.metadata.keyvalues.title}
                </Modal.Title>
            </Modal.Header>
            <video style={{ width: "100%" }} autoPlay onEnded={(e) => VideoEnd(e)} >
                <source
                    src={`${data.metadata.keyvalues.video}`}
                    type="video/mp4"
                />
                <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
            </video>
            <Modal.Body style={{backgroundColor:"#2B3437", color:"#ffffff"}}>
                <Modal.Title>
                    Script
                </Modal.Title>
                <p style={{color: "$ffffff"}}>{data.metadata.keyvalues.script}</p>
            </Modal.Body>
            <Modal.Body style={{backgroundColor:"#2B3437"}}>
                <Button variant="primary" size="sm" disabled={!videoended} onClick={mintERC20Handler} style={{backgroundColor:"#7B4CE4", borderColor:"#7B4CE4"}}>
                    {!videoended?"Wait..." : "Verify"}
                </Button>{' '}
            </Modal.Body>
        </>
    )
}
export default ModalElement;