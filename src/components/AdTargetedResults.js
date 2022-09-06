import React, { useState } from "react";
import { Card, Col, Modal } from "react-bootstrap";
import AdModal from "./AdModal";

const AdTargetedResults = (props) => {

    const [lgShow, setLgShow] = useState(false);
    const [mddata, setMddata] = useState(null);

    function setModaldata(data) {
        setLgShow(true);
        setMddata(data);
    }
    // console.log(props);
    return (
        <>
            {props.data.map((d, i) => {
                // console.log(d);
                return (
                    <Col key={i}>
                        <Card onClick={() => setModaldata(d)} style={{ backgroundColor: "#22292A" }} className="mb-3">
                            <video style={{ width: "100%", height: "200px" }}>
                                <source
                                    style={{ height: "300px" }}
                                    src={`${d.metadata.keyvalues.video}`}
                                    type="video/mp4"
                                />
                                <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
                            </video>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        display: "block",
                                        // display: "-webkit-box",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        WebkitLineClamp: "2",
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {d.metadata.keyvalues.title}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        fontSize: "15px",
                                        display: "block",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}>
                                    {d.metadata.keyvalues.script}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col >
                )
            })}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                fullscreen={props.fullscreen}
                aria-labelledby="example-modal-sizes-title-lg"
                style={{ backgroundColor: "#22292A" }}
            >
                <AdModal data={mddata} normaltype="true" />
            </Modal>
        </>
    )
}

export default AdTargetedResults;