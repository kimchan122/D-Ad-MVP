import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { MDBBtnGroup, MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
// import { reactLocalStorage } from 'reactjs-localstorage';

const EditInfo = () => {

    const [checked, setChecked] = useState([false, false, false, false, false]);
    const [sumcate, setSumcate] = useState([0, 0, 0, 0, 0, 0]);
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    function Saveinfo() {
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
        <div className="App">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="checkboxes">
                        {/* <Form.Label>Gender</Form.Label> */}
                        <Form.Group>
                            <Form.Label>Fashion</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch0' wrapperTag='span' label='self care' onClick={(e) => CategorySetting(e.target.checked, [30, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch1' wrapperClass='mx-2' wrapperTag='span' label='cosmetics' onClick={(e) => CategorySetting(e.target.checked, [35, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch2' wrapperTag='span' label='Nike' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch3' wrapperClass='mx-2' wrapperTag='span' label='luxury' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch4' wrapperTag='span' label='design' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='Fashion' id='fashion-ch5' wrapperClass='mx-2' wrapperTag='span' label='winter clothes' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch0' wrapperTag='span' label='bread' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch1' wrapperClass='mx-2' wrapperTag='span' label='ricc' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch2' wrapperTag='span' label='foot tour' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch3' wrapperClass='mx-2' wrapperTag='span' label='brunch' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch4' wrapperTag='span' label='festival food' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='food-ch5' wrapperClass='mx-2' wrapperTag='span' label='dessert time' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Travel</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch0' wrapperTag='span' label='travel accident' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch1' wrapperClass='mx-2' wrapperTag='span' label='Singapore' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch2' wrapperTag='span' label='pilgrimage' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch3' wrapperClass='mx-2' wrapperTag='span' label='Seoul' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch4' wrapperTag='span' label='Mediterranean' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='travel-ch5' wrapperClass='mx-2' wrapperTag='span' label='Aurura Hunter' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Medical</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch0' wrapperTag='span' label='vitamin' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch1' wrapperClass='mx-2' wrapperTag='span' label='operation' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch2' wrapperTag='span' label='walk' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch3' wrapperClass='mx-2' wrapperTag='span' label='vegan' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch4' wrapperTag='span' label='fastfood' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='medical-ch5' wrapperClass='mx-2' wrapperTag='span' label='turtle neck' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Education</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch0' wrapperTag='span' label='hackathonr' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch1' wrapperClass='mx-2' wrapperTag='span' label='tutoring' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch2' wrapperTag='span' label='friends' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch3' wrapperClass='mx-2' wrapperTag='span' label='boot camp' onClick={(e) => CategorySetting(e.target.checked, [10, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch4' wrapperTag='span' label='language' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='education-ch5' wrapperClass='mx-2' wrapperTag='span' label='pen pal' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Exercise</Form.Label>
                            <MDBBtnGroup style={{ display: "block", marginBottom: "30px" }}>
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch0' wrapperTag='span' label='soccer' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch1' wrapperClass='mx-2' wrapperTag='span' label='Serie A' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch2' wrapperTag='span' label='Heung Min-son' onClick={(e) => CategorySetting(e.target.valcheckedue, [10, 0, 5, 0, 3, 0])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch3' wrapperClass='mx-2' wrapperTag='span' label='MBA' onClick={(e) => CategorySetting(e.target.checked, [1, 2, 3, 4, 5, 6])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch4' wrapperTag='span' label='climbing' onClick={(e) => CategorySetting(e.target.checked, [2, 4, 6, 5, 3, 1])} />
                                <MDBCheckbox btn btnColor='secondary' name='options' id='exercise-ch5' wrapperClass='mx-2' wrapperTag='span' label='racing' onClick={(e) => CategorySetting(e.target.checked, [10, 0, 5, 0, 3, 0])} />
                            </MDBBtnGroup>
                        </Form.Group>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Button variant="primary" onClick={(e) => Saveinfo()} style={{ disply: "flex", float: "right", paddingLeft: "30px", paddingRight: "30px", backgroundColor: "#7B4CE4", borderColor: "#7B4CE4" }}>Save</Button>{' '}
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default EditInfo;