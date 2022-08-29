import React from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";


const Dashboard = () => {
    let arrfromedit = reactLocalStorage.getObject('arr');
    let sw = reactLocalStorage.get('sw');
    return(
        <div className="App">
            {arrfromedit}
        </div>
    )
}
export default Dashboard;