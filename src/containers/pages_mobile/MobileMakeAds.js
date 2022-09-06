import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import RangeSlider from 'react-bootstrap-range-slider';

import { ethers } from "ethers";
import contract from '../../contracts/RegisterAds.json';

import VideoToIPFS from '../../functions/VideoToIPFS';
import { useWeb3React } from "@web3-react/core";

import Loading from "react-fullscreen-loading";

const MobileMakeAds = () => {
    const [video, setVideo] = useState("");
    const [title, setTitle] = useState("");
    const [script, setScript] = useState("");
    const [amount, setAmount] = useState(null);

    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    const [statusbtn, setStatusbtn] = useState(false);
    const [status, setStatus] = useState(false);
    const [show, setShow] = useState(false);

    const { account } = useWeb3React();

    async function AdSubmit() {
        setStatusbtn(true);
        console.log("submit");
        let data = new Object();
        let cat = new Array([value0, value1, value2, value3, value4, value5]);
        data.title = title;
        data.script = script;
        data.category = cat;
        data.amount = amount;
        console.log("GO To IPFS");
        // console.log(video);
        // console.log(data);
        let temp = await VideoToIPFS(video, data);
        setStatus(temp);
        // if (res) {
        //     console.log("Object Success!");
        // } else {
        //     console.log("Object Failed!");
        // }
    }

    useEffect((e) => {
        // console.log(status);
        // console.log(show);
        if (status === true) {
            setShow(true);
        }
        setStatus(false);
        setStatusbtn(false);
    }, [status]);

    return (
        <div className="MbCommon-wrapper">
            <Container>
                <Form.Group className="mb-3" controlId="Form.AdTitle" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Advertisement Title" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.AdScript">
                    <Form.Label>Script</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Input Advertisement Script" onChange={(e) => setScript(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Video File</Form.Label>
                    <Form.Control
                        type="file"
                        size="sm"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group>
                    <Row xxs={1} xs={1} sm={2} md={3} lg={3} xl={3} xxl={3} xxxl={3} className="mb-3">
                        <Col>
                            <Row>
                                <Form.Label>Fashion</Form.Label>
                            </Row>
                            <RangeSlider value={value0} onChange={e => setValue0(e.target.value)} />
                            <Form.Control type="number" value={value0} onChange={e => setValue0(e.target.value)} readOnly={true} />
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Food</Form.Label>
                            </Row>
                            <RangeSlider value={value1} onChange={e => setValue1(e.target.value)} />
                            <Form.Control type="number" value={value1} onChange={e => setValue1(e.target.value)} readOnly={true} />
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Travel</Form.Label>
                            </Row>
                            <RangeSlider value={value2} onChange={e => setValue2(e.target.value)} />
                            <Form.Control type="number" value={value2} onChange={e => setValue2(e.target.value)} readOnly={true} />
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Medical</Form.Label>
                            </Row>
                            <RangeSlider value={value3} onChange={e => setValue3(e.target.value)} />
                            <Form.Control type="number" value={value3} onChange={e => setValue3(e.target.value)} readOnly={true} />
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Education</Form.Label>
                            </Row>
                            <RangeSlider value={value4} onChange={e => setValue4(e.target.value)} />
                            <Form.Control type="number" value={value4} onChange={e => setValue4(e.target.value)} readOnly={true} />
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Exercise</Form.Label>
                            </Row>
                            <RangeSlider value={value5} onChange={e => setValue5(e.target.value)} />
                            <Form.Control type="number" value={value5} onChange={e => setValue5(e.target.value)} readOnly={true} />
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Form.AmountPerPersom">
                            <Form.Label>Amount per person</Form.Label>
                            <Form.Control type="number" placeholder="Amount per person" onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <div style={{ textAlign: "right" }}>
                    {account ?
                        (statusbtn == true ?
                            (
                                <Button disabled style={{ width: "100%", marginBottom:"10px", backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />Wait...
                                    <Loading loading={statusbtn} style={{zIndex:"300"}} background="#191D1F" loaderColor="#ADADAD" />
                                </Button>
                            ) : (
                                <Button onClick={(e) => AdSubmit()} style={{ width: "100%", marginBottom:"10px", backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                                    Submit
                                </Button>
                            )
                        ) : <Button disabled style={{ width: "100%", marginBottom:"10px", backgroundColor: "#E6007A", borderColor: "#E6007A" }}>
                            Need to connect first...
                        </Button>
                    }
                </div>
            </Container>
            <Toast bg="dark" className="d-inline-block m-1" onClose={() => setShow(false)} show={show} delay={10000} autohide style={{ position: "absolute",width:"100%", top: "80px", right: "30px" }}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Notification: {title}</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body className="Dark">Woohoo, your {title} D-Ad has been successfully uploaded!</Toast.Body>
            </Toast>
        </div>
    )
}

export default MobileMakeAds;