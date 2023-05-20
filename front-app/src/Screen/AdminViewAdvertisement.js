import React, { useEffect, useState } from "react"
import axios from "axios";
import QuestionSearch from "./AdvertisementSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Header from "./Header";

function AdminViewAdvertisement() {

    const [advertisements, setAdvertisement] = useState([]);
    const [advertisementId, setAdvertisementID] = useState("");


    useEffect(() => {
        function getAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/adminViewAdvertisement`).then((res) => {
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


    function updateSearchTerms(newSearchTerm) {
        function getSearchedAdvertisement() {
            axios.get(`http://localhost:8070/advertisement/advertisementss/${newSearchTerm}`).then((res) => {
                setAdvertisement(res.data);
            }).catch((err) => {
                console.log()
            })
        }
        function getAdvertisement() {
            axios.get("http://localhost:8070/advertisement/adminViewAdvertisement").then((res) => {
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

    const componentRef = useRef();

    return (
        <div>
            <Header/>
            <div className="container my-3">
                <div><h1> Advertisements </h1></div>

                <ReactToPrint
                    trigger={() => <Button variant="warning">Print this out all the Avertisements!</Button>}
                    content={() => componentRef.current}
                />

                <div className="container" id="all" ref={componentRef}>
                    <div className="allTicket">

                        <h2 className="text-center"> All Advertisements </h2>

                        <QuestionSearch
                            refreshFunction={updateSearchTerms}
                        />



                        <Form className="rounded container my-5" style={{ border: "1px solid blue" }}>
                            <Table class="container my-3">
                                <thead>
                                    <tr>
                                        <th scope="col">Job Category</th>
                                        <th scope="col">Agency Name</th>
                                        <th scope="col">Publishers' ID</th>
                                        <th scope="col">Publishers' Name</th>
                                        <th scope="col">Contact No.</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">From</th>
                                        <th scope="col">To</th>
                                        
                                        <th></th>

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

                                                <Button type="button" size="sm" variant="danger" onClick={(e) => deleteAdvertisement(item._id)}> Remove </Button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                        </Form>
                    </div>
                </div>

            </div>
        </div>
    )


}

export default AdminViewAdvertisement;