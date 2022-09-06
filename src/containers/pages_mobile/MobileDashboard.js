import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import contract from '../../contracts/RegisterAds.json';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import AdModal from "../../components/AdModal";
import Proof from "../../functions/Proof";
import AdResults from "../../components/AdResults";
import AdTargetedResults from "../../components/AdTargetedResults";
import Spinner from 'react-bootstrap/Spinner';
import Loading from "react-fullscreen-loading";

// import zkeyFile from '../../functions/ad_js/ad_0001.zkey';
// import verificationKey from '../../functions/ad_js/verification_key.json';

const snarkjs = require('snarkjs');

const makeProof = async (_proofInput, _wasm, _zkey) => {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(_proofInput, _wasm, _zkey);
    return { proof, publicSignals };
};

const verifyProof = async (_verificationkey, signals, proof) => {
    const vkey = await fetch(_verificationkey).then(function (res) {
        return res.json();
    });
    const res = await snarkjs.groth16.verify(vkey, signals, proof);
    return res;
};

let ArrfromEdit = null;
let ArrfromEdit_temp = null;
let ArrfromEdit_temp2 = null;

const MobileDashboard = () => {
    if (localStorage != null && localStorage.length>0) {
        // console.log(localStorage);
        ArrfromEdit_temp = localStorage.getItem("arr");
        // console.log(ArrfromEdit_temp);
        ArrfromEdit_temp2 = ArrfromEdit_temp.split(",");
        // console.log(ArrfromEdit_temp2);
        ArrfromEdit = ArrfromEdit_temp2.map((x) => {
            return parseInt(x, 10);
        });
        console.log(ArrfromEdit);
    }

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const [realresults, setRealresults] = useState(null);

    const [proof, setProof] = useState("");
    const [signals, setSignals] = useState("");
    const [isValid, setIsValid] = useState(false);

    const contractAddress = "0x5293cbd6fe9A2981355eEe561c01fe513620f14A";
    const abi = contract.abi;

    // function setModaldata(data) {
    //     setLgShow(true);
    //     setMddata(data);
    // }

    const { account } = useWeb3React();

    const AdvertisementComponents = async () => {
        try {
            const pinataSDK = require('@pinata/sdk');
            const pinata = pinataSDK(process.env.REACT_APP_PINATA_API_KEY, process.env.REACT_APP_PINATA_API_SECRET);

            const metadataFilter = {
                name: 'unchainads',
            };

            const filters = {
                status: 'pinned',
                pageLimit: 20,
                pageOffset: 0,
                metadata: metadataFilter
            };
            let tempres = null;

            await pinata.pinList(filters).then((result) => {
                tempres = result;
            }).catch((err) => {
                console.log(err);
            });
            setResults(tempres);
            if (ArrfromEdit != null && ((account != undefined) && (account != null))) {
                runProofs(tempres);
            }
        } catch (error) {
            console.log("Error Get List From IPFS: ");
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        if ((loading && results==null) || realresults) {
            AdvertisementComponents();
        }
    }, [results]);

    const runProofs = async (res) => {
        let temp = new Array();

        const wasmFile = `https://unchainads.mypinata.cloud/ipfs/QmYAjZGHpeg1PT8rDXNHbN4kVW5V3rid346PHENW424ftR`;
        const zkeyFile = `https://unchainads.mypinata.cloud/ipfs/QmUoB5pgRY9NYJRQT3AGbcZKKSiTm3yPbzkasmHS6QvykX`;
        const verificationKey = "https://unchainads.mypinata.cloud/ipfs/QmR34ZwdQMj7pZvdVeJz2Lru9zgTkQrX6YDjsQCpcm7xJP";

        res.rows.map((d) => {
            let arr = (d.metadata.keyvalues.category).split(",");
            let proofInput = {
                "fashion": ["0", "0", ArrfromEdit[0], "0", "0", "0", "0", "0"],
                "food": ["0", "0", ArrfromEdit[1], "0", "0", "0", "0", "0"],
                "travel": ["0", "0", ArrfromEdit[2], "0", "0", "0", "0", "0"],
                "medical": ["0", "0", ArrfromEdit[3], "0", "0", "0", "0", "0"],
                "education": ["0", "0", ArrfromEdit[4], "0", "0", "0", "0", "0"],
                "exercise": ["0", "0", ArrfromEdit[5], "0", "0", "0", "0", "0"],
                "slotIndex": 2,
                "operator": 3,
                "valueFashion": arr[0],
                "valueFood": arr[1],
                "valueTravel": arr[2],
                "valueMedical": arr[3],
                "valueEducation": arr[4],
                "valueExercise": arr[5]
            };
            makeProof(proofInput, wasmFile, zkeyFile).then(({ proof: _proof, publicSignals: _signals }) => {
                setProof(JSON.stringify(_proof, null, 2));
                setSignals(JSON.stringify(_signals, null, 2));
                verifyProof(verificationKey, _signals, _proof).then((_isValid) => {
                    setIsValid(_isValid);
                });
                if (_signals[0] == "6") {
                    temp.push(d);
                }
            })
            console.log(temp);
        });
        setRealresults(temp);
        setLoading(false);
    };
    
    return(
        <div className="MbCommon-wrapper">
            <Container>
                {/* <Row className="mb-3"><Button onClick={(e) => runProofs()} disabled>{clicked ? "Refresh" : "Load targeted Ads!" }</Button></Row> */}
                <Row xxs={1} xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} xxxl={4} style={{ justifyContent: "left" }}>
                    {results != null ?
                        // if results is not null
                        (
                            (realresults != null) ?
                                (
                                    // if realresults is not null
                                    (account && !loading && ArrfromEdit!=null) ?
                                        // if metamask logined and exists informations
                                        <AdTargetedResults data={realresults} fullscreen={true} />
                                        // !(if metamask logined and exists informations)
                                        : <AdResults data={results} fullscreen={true} />
                                )
                                // if realresults is null
                                : <AdResults data={results} fullscreen={true} />
                        )
                        // if results is null
                        : <Loading loading={loading} background="#191D1F" loaderColor="#ADADAD" />
                        // : <div style={{ width: "100px", minHeight: "100vh", left: "50%", top: "50%" }}><Spinner animation="grow" variant="light" style={{ width: "100px", height: "100px" }} /></div>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MobileDashboard;