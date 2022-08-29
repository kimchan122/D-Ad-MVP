import React from "react";
// import { reactLocalStorage } from 'reactjs-localstorage';
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";


const Dashboard = () => {
    // let arrfromedit = reactLocalStorage.getObject('arr');
    // let sw = reactLocalStorage.get('sw');
    let ArrfromEdit = localStorage.getItem("arr");
    console.log(ArrfromEdit); // localstorage value
    return(
        <div className="App">
            {ArrfromEdit}
        </div>
    )
}
export default Dashboard;