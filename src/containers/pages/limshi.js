// import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
// import contract from '../../contracts/RegisterAds.json';
// import { ethers } from "ethers";
// import { useWeb3React } from "@web3-react/core";
// import AdModal from "../../components/AdModal";
// import Proof from "../../functions/Proof";

// const snarkjs = require('snarkjs');

// const makeProof = async (_proofInput, _wasm, _zkey) => {
//     console.log(_proofInput);
//     const { proof, publicSignals } = await snarkjs.groth16.fullProve(_proofInput, _wasm, _zkey);
//     return { proof, publicSignals };
// };

// const verifyProof = async (_verificationkey, signals, proof) => {
//     const vkey = await fetch(_verificationkey).then(function (res) {
//         return res.json();
//     });
//     const res = await snarkjs.groth16.verify(vkey, signals, proof);
//     return res;
// };

// const Dashboard = () => {
//     const ArrfromEdit_temp = localStorage.getItem("arr");
//     const ArrfromEdit_temp2 = ArrfromEdit_temp.split(",");
//     const ArrfromEdit = ArrfromEdit_temp2.map((x) => {
//         return parseInt(x, 10);
//     });

//     const [loading, setLoading] = useState(true);
//     const [results, setResults] = useState(null);
//     const [realresults, setRealresults] = useState(null);
//     const [lgShow, setLgShow] = useState(false);
//     const [mddata, setMddata] = useState(null);
//     const [clicked, setClicked] = useState(true);

//     const [proof, setProof] = useState("");
//     const [signals, setSignals] = useState("");
//     const [isValid, setIsValid] = useState(false);

//     const contractAddress = "0x5293cbd6fe9A2981355eEe561c01fe513620f14A";
//     const abi = contract.abi;

//     function setModaldata(data) {
//         setLgShow(true);
//         setMddata(data);
//     }

//     const { account } = useWeb3React();

//     const AdvertisementComponents = async () => {
//         try {
//             setLoading(true);
//             const pinataSDK = require('@pinata/sdk');
//             const pinata = pinataSDK(process.env.REACT_APP_PINATA_API_KEY, process.env.REACT_APP_PINATA_API_SECRET);

//             const metadataFilter = {
//                 name: 'unchainads',
//             };

//             const filters = {
//                 status: 'pinned',
//                 pageLimit: 20,
//                 pageOffset: 0,
//                 metadata: metadataFilter
//             };

//             const Find = await pinata.pinList(filters).then((result) => {
//                 setLoading(true);
//                 setResults(result);
//             }).catch((err) => {
//                 console.log(err);
//             });
//         } catch (error) {
//             console.log("Error Get List From IPFS: ");
//             console.log(error);
//             return false;
//         }
//     }

//     useEffect(() => {
//         if (loading) {
//             AdvertisementComponents();
//         }
//     }, []);

//     let wasmFile = `https://unchainads.mypinata.cloud/ipfs/QmYAjZGHpeg1PT8rDXNHbN4kVW5V3rid346PHENW424ftR`;
//     let zkeyFile = `https://unchainads.mypinata.cloud/ipfs/QmUoB5pgRY9NYJRQT3AGbcZKKSiTm3yPbzkasmHS6QvykX`;
//     let verificationKey = "https://unchainads.mypinata.cloud/ipfs/QmR34ZwdQMj7pZvdVeJz2Lru9zgTkQrX6YDjsQCpcm7xJP";

//     const runProofs = async () => {
//         let temp = new Array();
//         results.rows.map((d) => {
//             let arr = (d.metadata.keyvalues.category).split(",");
//             console.log(ArrfromEdit);
//             console.log(arr);
//             let proofInput = {
//                 "fashion": ["0", "0", ArrfromEdit[0], "0", "0", "0", "0", "0"],
//                 "food": ["0", "0", ArrfromEdit[1], "0", "0", "0", "0", "0"],
//                 "travel": ["0", "0", ArrfromEdit[2], "0", "0", "0", "0", "0"],
//                 "medical": ["0", "0", ArrfromEdit[3], "0", "0", "0", "0", "0"],
//                 "education": ["0", "0", ArrfromEdit[4], "0", "0", "0", "0", "0"],
//                 "exercise": ["0", "0", ArrfromEdit[5], "0", "0", "0", "0", "0"],
//                 "slotIndex": 2,
//                 "operator": 3,
//                 "valueFashion": arr[0],
//                 "valueFood": arr[1],
//                 "valueTravel": arr[2],
//                 "valueMedical": arr[3],
//                 "valueEducation": arr[4],
//                 "valueExercise": arr[5]
//             };
//             makeProof(proofInput, wasmFile, zkeyFile).then(({ proof: _proof, publicSignals: _signals }) => {
//                 setProof(JSON.stringify(_proof, null, 2));
//                 setSignals(JSON.stringify(_signals, null, 2));
//                 verifyProof(verificationKey, _signals, _proof).then((_isValid) => {
//                     setIsValid(_isValid);
//                 });
//                 setLoading(false);
//                 setClicked(true);
//                 if (_signals[0] == "6") {
//                     temp.push(d);
//                 }
//             });
//         });
//         console.log(temp);
//         setRealresults(temp);
//     };

//     return (
//         <div className="Common-wrapper">
//             <Container>
//                 <Row className="mb-3"><Button onClick={(e) => runProofs()} disabled>{clicked ? "Refresh" : "Load targeted Ads!" }</Button></Row>
//                 <Row xxs={1} xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} xxxl={4} style={{justifyContent:"center"}}>
//                     {account ? (ArrfromEdit != undefined ? (realresults != null ? realresults.map((d, i) => {
//                         return (
//                             <Col key={i}>
//                                 {/* <div key={i}>{d.metadata.keyvalues.video}</div> */}
//                                 <Card onClick={() => setModaldata(d)} style={{ backgroundColor: "#22292A" }} className="mb-3">

//                                     <video style={{ width: "100%", height: "200px" }}>
//                                         <source
//                                             src={`${d.metadata.keyvalues.video}`}
//                                             type="video/mp4"
//                                         />
//                                         <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
//                                     </video>
//                                     <Card.Body>
//                                         <Card.Title
//                                             style={{
//                                                 display: "-webkit-box",
//                                                 textOverflow: "ellipsis",
//                                                 overflow: "auto",
//                                                 WebkitLineClamp: "2",
//                                                 WebkitBoxOrient: "vertical",
//                                             }}
//                                         >
//                                             {d.metadata.keyvalues.title}
//                                         </Card.Title>
//                                         <Card.Text style={{ fontsize: "5px" }}>{d.metadata.keyvalues.script}</Card.Text>
//                                     </Card.Body>
//                                 </Card>

//                             </Col>
//                         )
//                     })
//                         : <Card className="alertwrapper" style={{backgroundColor: "#22292A"}}>
//                             <span>Push the button...</span>
//                         </Card>)
//                         : <Card className="alertwrapper" >
//                             {/* {reactLocalStorage.clear()} */}
//                             <span>Please enter simple information through the EditInfo menu on the left side of our website!</span>
//                         </Card>)
//                         : <Card className="alertwrapper" >
//                             {/* {reactLocalStorage.clear()} */}
//                             <span>Please connect to MetaMask via the top right button on our website!</span>
//                         </Card>
//                     }
//                 </Row>
//             </Container>
//             <Modal
//                 size="lg"
//                 show={lgShow}
//                 onHide={() => setLgShow(false)}
//                 aria-labelledby="example-modal-sizes-title-lg"
//                 style={{ backgroundColor: "#22292A" }}
//             >
//                 <AdModal data={mddata} />
//             </Modal>
//         </div>
//     )
// }
// export default Dashboard;