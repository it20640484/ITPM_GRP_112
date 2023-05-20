import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdvertisementSearch from "./AdvertisementSearch";
import Table from 'react-bootstrap/Table';
//import dubai_image from '../images/dubai_image.png';
//import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import UserHeader from '../components/UserHeader';
import Carasoul from "./Carasoul";


function UserViewAdvertisement() {

    const [advertisements, setAdvertisement] = useState([]);
    //const [_id, setAdvertisementID ] = useState("");


    let navigate = useNavigate();

    useEffect(() => {
        function getAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/userViewAdvertisement`).then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log(err.message)
            })
        }
        getAdvertisement();


    }, []);

    function updateSearchTerms(newSearchTerm) {
        function getSearchedAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/advertisementss/${newSearchTerm}`).then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log()
            })
        }
        function getAdvertisement() {
            axios.get("http://localhost:8070/advertisement/userViewAdvertisement").then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log(err.message)
                alert(err.message)
            })
        }
        if (newSearchTerm != '') {
            getSearchedAdvertisement();
        }
        else {
            getAdvertisement();
        }
    }

    return (
        <div>
            <Carasoul/>
            <UserHeader />
            <div className="container my-3">
                <center><div><h1> Advertisements</h1></div></center>
                <div className="container" id="all">
                    <div className="allAdvertisements">

                        <center><h2> Emergency Advertisements... </h2></center>
                    </div>
                    <center>
                        <AdvertisementSearch className="container my-3"
                            refreshFunction={updateSearchTerms}
                        />
                    </center>
                </div>

                <Form className="rounded container my-5 " style={{ border: "1px solid blue" }}>
                    <center><Table className="container my-3">
                        <thead>
                            <tr>
                                <th>Job Category</th>
                                <th>Agency Name</th>
                                <th>Publishers' ID</th>
                                <th>Publishers' Name</th>
                                <th>Contact No.</th>
                                <th>Email</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Advertisement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {advertisements.map((item) => (
                                <tr>
                                    <td>{item.job_category}</td>
                                    <td>{item.ag_name}</td>
                                    <td>{item.mngr_id}</td>
                                    <td>{item.mngr_name}</td>
                                    <td>{item.contact_no}</td>
                                    <td>{item.mgr_email}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.advertisementImage}</td>




                                </tr>
                            ))}

                        </tbody>
                    </Table></center>
                </Form>
            </div>
        </div>

    );

}
export default UserViewAdvertisement;