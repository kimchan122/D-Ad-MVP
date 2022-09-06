import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { MDBBtnGroup, MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import { reactLocalStorage } from 'reactjs-localstorage';

const EditInfo = () => {
    // const [fashionchecked, setFashionChecked] = useState([false, false, false, false, false, false]);
    // const [foodchecked, setFoodChecked] = useState([false, false, false, false, false, false]);
    // const [travelchecked, setTravelChecked] = useState([false, false, false, false, false, false]);
    // const [medicalchecked, setMedicalChecked] = useState([false, false, false, false, false, false]);
    // const [educationchecked, setEducationChecked] = useState([false, false, false, false, false, false]);
    // const [exercisechecked, setExerciseChecked] = useState([false, false, false, false, false, false]);

    const [sumcate, setSumcate] = useState([0, 0, 0, 0, 0, 0]);
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    function Saveinfo() {
        console.log(sumcate);
        localStorage.setItem("arr", sumcate);
        navigate('/');
        // reactLocalStorage.clear();
        // reactLocalStorage.setObject('arr', sumcate);
        // reactLocalStorage.set('sw', 1);
    }

    function CategorySetting(value, array) {
        // fashion, education, exercise, food, travel, medical //
        console.log(value);
        console.log(array);
        let cate = category;
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
        console.log("res");
        console.log(sum);
        setCategory(cate);
        setSumcate(sum);
    }
    return (
        <div className="Common-wrapper">
            <Form>
                <Row className="mb-3">
                    {/* <ButtonGroup as={Col} md="12">
                        <ToggleButton id='fashion-ch0' name='Fashion' type="checkbox" variant="primary" value="1" onChange={(e) => CategorySetting(e.target.checked, [30, 2, 3, 4, 5, 6])} >Checked</ToggleButton>
                    </ButtonGroup> */}
                    <Form.Group as={Col} md="12" controlId="checkboxes">
                        {/* <Form.Label>Gender</Form.Label> */}
                        <Form.Group>
                            <Form.Label>Fashion</Form.Label>
                            <MDBBtnGroup style={{ display: "block", justifyContent: "space-between", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch0' wrapperClass='m-2' wrapperTag='span' label='selfcare' onClick={(e) => CategorySetting(e.target.checked, [20, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch1' wrapperClass='m-2' wrapperTag='span' label='cosmetics' onClick={(e) => CategorySetting(e.target.checked, [20, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch2' wrapperClass='m-2' wrapperTag='span' label='casual' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch3' wrapperClass='m-2' wrapperTag='span' label='luxury' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch4' wrapperClass='m-2' wrapperTag='span' label='design' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch5' wrapperClass='m-2' wrapperTag='span' label='winter' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch0' wrapperClass='m-2' wrapperTag='span' label='bread' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch1' wrapperClass='m-2' wrapperTag='span' label='rice' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch2' wrapperClass='m-2' wrapperTag='span' label='cooking' onClick={(e) => CategorySetting(e.target.checked, [2, 20, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch3' wrapperClass='m-2' wrapperTag='span' label='brunch' onClick={(e) => CategorySetting(e.target.checked, [2, 20, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch4' wrapperClass='m-2' wrapperTag='span' label='festival' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch5' wrapperClass='m-2' wrapperTag='span' label='dessert' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Travel</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch0' wrapperClass='m-2' wrapperTag='span' label='forest' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch1' wrapperClass='m-2' wrapperTag='span' label='Singapore' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch2' wrapperClass='m-2' wrapperTag='span' label='pilgrimage' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch3' wrapperClass='m-2' wrapperTag='span' label='Seoul' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 20, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch4' wrapperClass='m-2' wrapperTag='span' label='overseas' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 20, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch5' wrapperClass='m-2' wrapperTag='span' label='Aurura' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Medical</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch0' wrapperClass='m-2' wrapperTag='span' label='vitamin' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch1' wrapperClass='m-2' wrapperTag='span' label='oralcare' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch2' wrapperClass='m-2' wrapperTag='span' label='walk' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 20, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch3' wrapperClass='m-2' wrapperTag='span' label='vegan' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 20, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch4' wrapperClass='m-2' wrapperTag='span' label='cold' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch5' wrapperClass='m-2' wrapperTag='span' label='turtleneck' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Education</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch0' wrapperClass='m-2' wrapperTag='span' label='hackathon' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch1' wrapperClass='m-2' wrapperTag='span' label='tutoring' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch2' wrapperClass='m-2' wrapperTag='span' label='friends' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 20, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch3' wrapperClass='m-2' wrapperTag='span' label='discussion' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch4' wrapperClass='m-2' wrapperTag='span' label='language' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 20, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch5' wrapperClass='m-2' wrapperTag='span' label='pen pal' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Exercise</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <Col>
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch0' wrapperClass='m-2' wrapperTag='span' label='soccer' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 20])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch1' wrapperClass='m-2' wrapperTag='span' label='Serie A' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch2' wrapperClass='m-2' wrapperTag='span' label='ball sport' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch3' wrapperClass='m-2' wrapperTag='span' label='NBA' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch4' wrapperClass='m-2' wrapperTag='span' label='climbing' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 20])} />
                                    <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch5' wrapperClass='m-2' wrapperTag='span' label='racing' onClick={(e) => CategorySetting(e.target.checked, [2, 2, 2, 2, 2, 2])} />
                                </Col>
                            </MDBBtnGroup>
                        </Form.Group>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Button onClick={(e) => Saveinfo()} style={{ disply: "flex", float: "right", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "#E6007A", borderColor: "#E6007A" }}>Save</Button>{' '}
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default EditInfo;