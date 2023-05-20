import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdvertisementSearch from "./AdvertisementSearch";
import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';
//import dubai_image from '../images/dubai_image.png';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Carasoul from "./Carasoul";


function AgencyViewAdvertisement() {

    const [advertisements, setAdvertisement] = useState([]);
    const [_id, setAdvertisementId] = useState("");
    const [job_category, setJbCategory] = useState("");
    const [ag_name, setAgName] = useState("");
    const [mngr_id, setMgrID] = useState("");
    const [mngr_name, setMgName] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [mgr_email, setMgEmail] = useState("");
    const [from, setDateFr] = useState("");
    const [to, setDateT] = useState("");
    const [advertisementImage, setAdvtsmntImg] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        function getAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/agencyViewAdvertisement`).then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log(err.message)
            })
        }
        getAdvertisement();


    }, []);

    const deleteAdvertisement = (mngr_id) => {
        axios.delete(`http://localhost:8070/advertisement/deleteAdvertisement/${mngr_id}`).then((res) => {
            alert("Advertisement deleted successfully");
            window.location.reload(false);
        }).catch((err) => {
            console.log(err.message)
        })
    };

    function updateUser(e) {
        e.preventDefault();
        navigate(`/updateAdvertisement/${_id}`, { state: { AdvertisementId: _id, prevJobCategory: job_category, prevAgName: ag_name, prevMgrId: mngr_id, prevMgrName: mngr_name, prevMgrConNo: contact_no, prevMgrEmail: mgr_email, prevFrom: from, prevTo: to, prevAddImg: advertisementImage } });
    }

    function updateSearchTerms(newSearchTerm) {
        function getSearchedAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/advertisementss/${newSearchTerm}`).then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log()
            })
        }
        function getAdvertisement() {
            axios.get("http://localhost:8070/advertisement/agencyViewAdvertisement").then((res) => {
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
            <Header />
            <div className="container my-3">
                <center><div><h1> Advertisements</h1></div></center>

                <div className="container" id="all">
                    <div className="allAdvertisements">

                        <center><h2> View your published Advertisements... </h2></center>
                    </div>
                    <center>
                        <AdvertisementSearch className="container my-3"
                            refreshFunction={updateSearchTerms}
                        />
                    </center>
                </div>

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
                            
                            <th>
                                <th>Action</th>
                            </th>

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
                                <td>{item.from.toString().substring(0,10)}</td>
                                <td>{item.to.toString().substring(0,10)}</td>

                                <td>
                                    <Button variant="danger" onClick={() => deleteAdvertisement(item._id)}>Delete</Button>
                                </td>


                                <td>
                                    <Form onSubmit={updateUser}>
                                        <Button type="submit" value={item._id} variant="success outline-secondary" onClick={(e) => {
                                            setAdvertisementId(e.target.value);
                                            setJbCategory(item.job_category);
                                            setAgName(item.ag_name);
                                            setMgrID(item.mngr_id);
                                            setMgName(item.mngr_name);
                                            setContactNo(item.contact_no);
                                            setMgEmail(item.mgr_email);
                                            setDateFr(item.from);
                                            setDateT(item.to);
                                        }}>Update</Button>{' '}
                                    </Form>

                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table></center>



                <center><div className="my-2">
                    <a href={`/addAdvertisement`}>
                        <Button variant="primary" type="button" size="sm"> + Publish New Advertisement </Button>
                    </a>
                </div>

                    <div className="my-2">
                        <a href={`/`}>
                            <Button type="button" variant="secondary" class="btn btn-link" size="sm"> Back to Home page</Button>
                        </a>
                    </div>

                </center>


            </div>
        </div>

    );

}
export default AgencyViewAdvertisement;