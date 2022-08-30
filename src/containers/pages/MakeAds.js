import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RangeSlider from 'react-bootstrap-range-slider';

import { ethers } from "ethers";
import contract from '../../contracts/RegisterAds.json';

import VideoToIPFS from '../../functions/VideoToIPFS';

// import { ethers } from "ethers";

const MakeAds = () => {
    const [selected, setSelected] = useState(false);
    const [video, setVideo] = useState("");
    const [title, setTitle] = useState("");
    const [script, setScript] = useState("");
    const [category, setCategory] = useState([, , , , ,]);
    const [amount, setAmount] = useState(null);

    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    const [ res, setRes ] = useState("");

    const contractAddress = "0x5293cbd6fe9A2981355eEe561c01fe513620f14A";
    const abi = contract.abi;

    const RegisterAds = async(url) => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
            
        let tx = await contract.registerAds(
            url,
            title,
            value0,
            value1,
            value2,
            value3,
            value4,
            value5,
        );    
    }

    async function AdSubmit() {
        console.log("submit");
        let data = new Object();
        let cat = new Array([value0,value1,value2,value3,value4,value5]);
        data.title = title;
        data.script = script;
        data.category = cat;
        data.amount = amount;
        console.log("GO To IPFS");
        console.log(video);
        console.log(data);
        await VideoToIPFS(video, data);
        if (res) {
            console.log("Object Success!");
        } else {
            console.log("Object Failed!");
        }
    }

    return (
        <div className="Common-wrapper">
            <Form.Group className="mb-3" controlId="Form.AdTitle" >
                <Form.Label>Title</Form.Label>
                <Form.Control size="md" type="text" placeholder="Advertisement Title" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.AdScript">
                <Form.Label>Script</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Input Advertisement Script" onChange={(e) => setScript(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Video Upload</Form.Label>
                <Form.Control
                    type="file"
                    size="sm"
                    onChange={(e) => setVideo(e.target.files[0])}
                />
            </Form.Group>
            <Form.Group>
                <Row xxs={3} xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} xxxl={3} className="mb-3">
                    <Col>
                        <Form.Label>Fashion</Form.Label>
                        <RangeSlider defaultValue={value0} onChange={e => setValue0(e.target.value)} />
                        <Form.Control type="number" value={value0} onChange={e => setValue0(e.target.value)} readOnly={true} />
                    </Col>
                    <Col>
                        <Form.Label>Food</Form.Label>
                        <RangeSlider defaultValue={value1} onChange={e => setValue1(e.target.value)} />
                        <Form.Control type="number" value={value1} onChange={e => setValue1(e.target.value)} readOnly={true}/>
                    </Col>
                    <Col>
                        <Form.Label>Travel</Form.Label>
                        <RangeSlider defaultValue={value2} onChange={e => setValue2(e.target.value)} />
                        <Form.Control type="number" value={value2} onChange={e => setValue2(e.target.value)} readOnly={true}/>
                    </Col>
                    <Col>
                        <Form.Label>Medical</Form.Label>
                        <RangeSlider defaultValue={value3} onChange={e => setValue3(e.target.value)} />
                        <Form.Control type="number" value={value3} onChange={e => setValue3(e.target.value)} readOnly={true}/>
                    </Col>
                    <Col>
                        <Form.Label>Education</Form.Label>
                        <RangeSlider defaultValue={value4} onChange={e => setValue4(e.target.value)} />
                        <Form.Control type="number" value={value4} onChange={e => setValue4(e.target.value)} readOnly={true}/>
                    </Col>
                    <Col>
                        <Form.Label>Exercise</Form.Label>
                        <RangeSlider defaultValue={value5} onChange={e => setValue5(e.target.value)} />
                        <Form.Control type="number" value={value5} onChange={e => setValue5(e.target.value)} readOnly={true}/>
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
            <div style={{ marginTop: "30px" }}>
                <Button variant="secondary" size="sm">
                    Reset
                </Button>{' '}
                <Button variant="primary" size="sm" onClick={AdSubmit} style={{ backgroundColor: "#7B4CE4", borderColor: "#7B4CE4" }}>
                    Submit
                </Button>
            </div>
        </div>
    )
}
export default MakeAds;