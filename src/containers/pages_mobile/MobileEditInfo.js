import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button, Container, Stack } from "react-bootstrap";
import { MDBBtnGroup, MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaRegSave } from "react-icons/fa";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import FadeInAnimation from "../../functions/FadeInAnimation";
import { Checkbox } from "rimble-ui";

const MobileEditInfo = () => {

    const [sumcate, setSumcate] = useState([0, 0, 0, 0, 0, 0]);

    const [ca_fashion, setCa_fasion] = useState([false, false, false, false, false, false]);
    const [ca_food, setCa_food] = useState([false, false, false, false, false, false]);
    const [ca_travel, setCa_travel] = useState([false, false, false, false, false, false]);
    const [ca_medical, setCa_medical] = useState([false, false, false, false, false, false]);
    const [ca_education, setCa_education] = useState([false, false, false, false, false, false]);
    const [ca_exercise, setCa_exercise] = useState([false, false, false, false, false, false]);

    const navigate = useNavigate();

    function Loadinfo() {
        localStorage.getItem("arr", sumcate);
    }

    function Saveinfo() {
        console.log(sumcate);
        localStorage.removeItem("arr");
        localStorage.setItem("arr", sumcate);
        navigate('/');
    }

    function CategorySetting(index, value, array) {
        // fashion, food, travel, medical, education, exercise //
        console.log(value);
        console.log(array);
        let sum = sumcate;
        if (value) {
            sum[0] += array[0];
            sum[1] += array[1];
            sum[2] += array[2];
            sum[3] += array[3];
            sum[4] += array[4];
            sum[5] += array[5];
        } else {
            sum[0] -= array[0];
            sum[1] -= array[1];
            sum[2] -= array[2];
            sum[3] -= array[3];
            sum[4] -= array[4];
            sum[5] -= array[5];
        }

        let temp = [, , , , ,];

        if (state == 1) {
            temp = ca_fashion;
            temp[index] = value;
            setCa_fasion(temp);
        } else if (state == 2) {
            temp = ca_food;
            temp[index] = value;
            setCa_food(temp);
        } else if (state == 3) {
            temp = ca_travel;
            temp[index] = value;
            setCa_travel(temp);
        } else if (state == 4) {
            temp = ca_medical;
            temp[index] = value;
            setCa_medical(temp);
        } else if (state == 5) {
            temp = ca_education;
            temp[index] = value;
            setCa_education(temp);
        } else if (state == 6) {
            temp = ca_exercise;
            temp[index] = value;
            setCa_exercise(temp);
        }
        console.log("res");
        console.log(sum);
        setSumcate(sum);
    }

    // console.log(sumcate);
    // console.log(ca_fashion);
    // console.log(ca_food);
    // console.log(ca_travel);

    const [state, setState] = useState(1);
    const [LRstate, setLRState] = useState("right");

    return (
        <div className="MbCommon-wrapper">
            <Container>
                <Row>
                    <Col>
                        {state == 1 ?
                            <FadeInAnimation>
                                <h2>Fashion</h2>
                                <div>Choose what interests you!</div>
                                <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                    <Stack gap={2}>
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch0' wrapperClass='m-2' wrapperTag='fashion-ch0' label='selfcare' defaultChecked={ca_fashion[0]} onClick={(e) => CategorySetting(0, e.target.checked, [20, 2, 2, 2, 2, 2])} />
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch1' wrapperClass='m-2' wrapperTag='fashion-ch0' label='cosmetics' defaultChecked={ca_fashion[1]} onClick={(e) => CategorySetting(1, e.target.checked, [20, 2, 2, 2, 2, 2])} />
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch2' wrapperClass='m-2' wrapperTag='fashion-ch0' label='casual' defaultChecked={ca_fashion[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch3' wrapperClass='m-2' wrapperTag='fashion-ch0' label='luxury' defaultChecked={ca_fashion[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch4' wrapperClass='m-2' wrapperTag='fashion-ch0' label='design' defaultChecked={ca_fashion[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                        <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch5' wrapperClass='m-2' wrapperTag='fashion-ch0' label='winter' defaultChecked={ca_fashion[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    </Stack>
                                </MDBBtnGroup>
                            </FadeInAnimation>
                            : state == 2 ?
                                <FadeInAnimation>
                                    <h2>Food</h2>
                                    <div>Choose what interests you!</div>
                                    <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                        <Stack gap={2}>
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch0' wrapperClass='m-2' wrapperTag='food-ch0' label='bread' defaultChecked={ca_food[0]} onClick={(e) => CategorySetting(0, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch1' wrapperClass='m-2' wrapperTag='food-ch0' label='rice' defaultChecked={ca_food[1]} onClick={(e) => CategorySetting(1, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch2' wrapperClass='m-2' wrapperTag='food-ch0' label='cooking' defaultChecked={ca_food[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 20, 2, 2, 2, 2])} />
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch3' wrapperClass='m-2' wrapperTag='food-ch0' label='brunch' defaultChecked={ca_food[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 20, 2, 2, 2, 2])} />
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch4' wrapperClass='m-2' wrapperTag='food-ch0' label='festival' defaultChecked={ca_food[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                            <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch5' wrapperClass='m-2' wrapperTag='food-ch0' label='dessert' defaultChecked={ca_food[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                        </Stack>
                                    </MDBBtnGroup>
                                </FadeInAnimation>
                                : state == 3 ?
                                    <FadeInAnimation>
                                        <h2>Travel</h2>
                                        <div>Choose what interests you!</div>
                                        <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                            <Stack gap={2}>
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch0' wrapperClass='m-2' wrapperTag='travel-ch0' label='forest' defaultChecked={ca_travel[0]} onClick={(e) => CategorySetting(0, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch1' wrapperClass='m-2' wrapperTag='travel-ch0' label='Singapore' defaultChecked={ca_travel[1]} onClick={(e) => CategorySetting(1, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch2' wrapperClass='m-2' wrapperTag='travel-ch0' label='pilgrimage' defaultChecked={ca_travel[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch3' wrapperClass='m-2' wrapperTag='travel-ch0' label='Seoul' defaultChecked={ca_travel[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 2, 20, 2, 2, 2])} />
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch4' wrapperClass='m-2' wrapperTag='travel-ch0' label='overseas' defaultChecked={ca_travel[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 20, 2, 2, 2])} />
                                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch5' wrapperClass='m-2' wrapperTag='travel-ch0' label='Aurura' defaultChecked={ca_travel[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                            </Stack>
                                        </MDBBtnGroup>
                                    </FadeInAnimation>
                                    : state == 4 ?
                                        <FadeInAnimation>
                                            <h2>Medical</h2>
                                            <div>Choose what interests you!</div>
                                            <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                                <Stack gap={2}>
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch0' wrapperClass='m-2' wrapperTag='medical-ch0' label='vitamin' defaultChecked={ca_medical[0]} onClick={(e) => CategorySetting(0, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch1' wrapperClass='m-2' wrapperTag='medical-ch0' label='oralcare' defaultChecked={ca_medical[1]} onClick={(e) => CategorySetting(1, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch2' wrapperClass='m-2' wrapperTag='medical-ch0' label='walk' defaultChecked={ca_medical[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 2, 2, 20, 2, 2])} />
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch3' wrapperClass='m-2' wrapperTag='medical-ch0' label='vegan' defaultChecked={ca_medical[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 2, 2, 20, 2, 2])} />
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch4' wrapperClass='m-2' wrapperTag='medical-ch0' label='cold' defaultChecked={ca_medical[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch5' wrapperClass='m-2' wrapperTag='medical-ch0' label='turtleneck' defaultChecked={ca_medical[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                </Stack>
                                            </MDBBtnGroup>
                                        </FadeInAnimation>
                                        : state == 5 ?
                                            <FadeInAnimation>
                                                <h2>Education</h2>
                                                <div>Choose what interests you!</div>
                                                <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                                    <Stack gap={2}>
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch0' wrapperClass='m-2' wrapperTag='education-ch0' label='hackathon' defaultChecked={ca_education[0]} onClick={(e) => CategorySetting(0, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch1' wrapperClass='m-2' wrapperTag='education-ch0' label='tutoring' defaultChecked={ca_education[1]} onClick={(e) => CategorySetting(1, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch2' wrapperClass='m-2' wrapperTag='education-ch0' label='friends' defaultChecked={ca_education[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 2, 2, 2, 20, 2])} />
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch3' wrapperClass='m-2' wrapperTag='education-ch0' label='discussion' defaultChecked={ca_education[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch4' wrapperClass='m-2' wrapperTag='education-ch0' label='language' defaultChecked={ca_education[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 2, 2, 20, 2])} />
                                                        <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch5' wrapperClass='m-2' wrapperTag='education-ch0' label='pen pal' defaultChecked={ca_education[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                    </Stack>
                                                </MDBBtnGroup>
                                            </FadeInAnimation>
                                            : state == 6 ?
                                                <FadeInAnimation>
                                                    <h2>Exercise</h2>
                                                    <div>Choose what interests you!</div>
                                                    <MDBBtnGroup style={{ display: "block", justifyContent: "space-between" }}>
                                                        <Stack gap={2}>
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch0' wrapperClass='m-2' wrapperTag='exercise-ch0' label='soccer' defaultChecked={ca_exercise[0]} onClick={(e) => CategorySetting(0, e.target.checked, [2, 2, 2, 2, 2, 20])} />
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch1' wrapperClass='m-2' wrapperTag='exercise-ch0' label='Serie A' defaultChecked={ca_exercise[1]} onClick={(e) => CategorySetting(1, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch2' wrapperClass='m-2' wrapperTag='exercise-ch0' label='ball sport' defaultChecked={ca_exercise[2]} onClick={(e) => CategorySetting(2, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch3' wrapperClass='m-2' wrapperTag='exercise-ch0' label='NBA' defaultChecked={ca_exercise[3]} onClick={(e) => CategorySetting(3, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch4' wrapperClass='m-2' wrapperTag='exercise-ch0' label='climbing' defaultChecked={ca_exercise[4]} onClick={(e) => CategorySetting(4, e.target.checked, [2, 2, 2, 2, 2, 20])} />
                                                            <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch5' wrapperClass='m-2' wrapperTag='exercise-ch0' label='racing' defaultChecked={ca_exercise[5]} onClick={(e) => CategorySetting(5, e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                                        </Stack>
                                                    </MDBBtnGroup>
                                                </FadeInAnimation>
                                                : <div>something wrong!</div>}
                    </Col>
                </Row>
            </Container>
            <Container className="EI-page-button">
                <Row>
                    <Col>
                        {state == 1 ? <></> : <button className="Mb-edit-nextprev-btn" onClick={(e) => setState(state => state - 1) || setLRState("left")}><FaAngleLeft />prev</button>}
                    </Col>
                    <Col>
                        {state == 6 ? <button className="Mb-edit-nextprev-btn" onClick={(e) => Saveinfo()}><FaRegSave />save</button> : <button className="Mb-edit-nextprev-btn" onClick={(e) => setState(state => state + 1) || setLRState("right")}>next<FaAngleRight /></button>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MobileEditInfo;