import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import contract from '../contracts/Ads.json';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const contractAddress = "0xB46Da19840033fdaE1635f9EDe38E0a7ed8241E9";
const abi = contract.abi;

const AdModal = ({ data, normaltype }) => {

  console.log(normaltype);
  const { account, activate } = useWeb3React();

  const [videoended, setVideoended] = useState(false);

  function VideoEnd(e) {
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
      <Modal.Header closeButton style={{ backgroundColor: "#2B3437", color: "#ffffff" }}>
        <Modal.Title id="example-modal-sizes-title-lg" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
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
      <Modal.Body style={{ backgroundColor: "#2B3437", color: "#ffffff" }}>
        <Modal.Title>
          Script
        </Modal.Title>
        <p style={{ color: "$ffffff" }}>{data.metadata.keyvalues.script}</p>
        
        { videoended ?
          (normaltype == "true" ?
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Let's get reward!</Tooltip>}>
              <span className="d-inline-block">
                <Button variant="primary" size="sm" disabled={false} onClick={mintERC20Handler} style={{ backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                  Verify
                </Button>
              </span>
            </OverlayTrigger>
            : <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">You need to sign in...</Tooltip>}>
              <span className="d-inline-block">
                <Button variant="primary" size="sm" disabled={true} style={{ backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                  Wait...
                </Button>
              </span>
            </OverlayTrigger>
          ) :
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Please wait for the D-Ad to end!</Tooltip>}>
            <span className="d-inline-block">
              <Button variant="primary" size="sm" disabled style={{ backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                Wait...
              </Button>
            </span>
          </OverlayTrigger>
        }
      </Modal.Body>
    </>
  )
}
export default AdModal;