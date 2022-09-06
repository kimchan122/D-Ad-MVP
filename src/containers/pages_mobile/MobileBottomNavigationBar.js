import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineSpaceDashboard, MdModeEditOutline, MdAddToPhotos } from 'react-icons/md';
import { FaGithub, FaEdit } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { NavLink } from "react-router-dom";

const MobileBottomNavigationBar = () => {
    return(
        <div className="App MbBottomNavigationBarContainer">
            <Container>
                <Row style={{marginTop:"10px"}}>
                    <Col>
                        <Row>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "MB-BNB-highlight-on" : "MB-BNB-highlight-off")}>
                            <div className="MB-BNB-icon"><MdOutlineSpaceDashboard style={{ width:"25px", height:"25px" }}/></div>
                                <p className="MB-BNB-text">Dashboard</p>
                            </NavLink>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <NavLink to="/makeads" className={({ isActive }) => (isActive ?  "MB-BNB-highlight-on" : "MB-BNB-highlight-off")}>
                                <div className="MB-BNB-icon"><MdAddToPhotos style={{ width:"25px", height:"25px" }}/></div>
                                <p className="MB-BNB-text">Make Ads</p>
                            </NavLink>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <NavLink to="/editinfo" className={({ isActive }) => (isActive ?  "MB-BNB-highlight-on" : "MB-BNB-highlight-off")}>
                                <div className="MB-BNB-icon"><MdModeEditOutline style={{ width:"25px", height:"25px" }}/></div>
                                <p className="MB-BNB-text">Edit Info</p>
                            </NavLink>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MobileBottomNavigationBar;