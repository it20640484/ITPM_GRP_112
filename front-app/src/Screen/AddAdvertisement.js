import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
//import Badge from 'react-bootstrap/Badge';
//import FormContainer from '../components/FormContainer';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileBase from "react-file-base64";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

export default function AddAdvertisement() {

    const [job_category, setJbCateg] = useState("");
    const [ag_name, setAgencyName] = useState("");
    const [mngr_id, setMgrId] = useState("");
    const [mngr_name, setMgrName] = useState("");
    const [contact_no, setConNo] = useState("");
    const [mgr_email, setMgrEmail] = useState("");
    const [from, setDateFrom] = useState("");
    const [to, setDateTo] = useState("");
    const [advertisementImage, setAddImg] = useState("");



    function sendData(event) {

        event.preventDefault();

        const newAdvertisement = {
            job_category,
            ag_name,
            mngr_id,
            mngr_name,
            contact_no,
            mgr_email,
            from,
            to
            
        }


        axios.post("http://localhost:8070/advertisement/addAdvertisement", newAdvertisement).then(() => {
            alert("Advertisement published successfully!!!")
            window.location.reload(false);


        }).catch((err) => {
            alert(err)
        });

    }


    return (
        <div>
            <Header/>

            <div className="container my-5">
                <h1> Publish New Advertisement </h1>
                <Form className="rounded container my-5 p-3 mb-2 bg-dark text-white" style={{ border: "1px solid black" }} onSubmit={sendData}>

                    <br />
                    <Form.Group className="mb-3" controlId="formJobCategory">
                        <Form.Label > Job Category </Form.Label>
                        <Form.Control type="text" placeholder="-type here-" required onChange={(event) => {
                            setJbCateg(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAgName">
                        <Form.Label >Agency Name</Form.Label>
                        <Form.Control type="text" placeholder="ABC Company" required onChange={(event) => {
                            setAgencyName(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPubId">
                        <Form.Label>Advertisement publishers' ID</Form.Label>
                        <Form.Control type="text" placeholder="AG001" required onChange={(event) => {
                            setMgrId(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPubName">
                        <Form.Label>Advertisement publishers' Name</Form.Label>
                        <Form.Control type="text" placeholder="Perera A.B.C." required onChange={(event) => {
                            setMgrName(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPubCon">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="071 234 567 8" required onChange={(event) => {
                            setConNo(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="abc@gmail.com" required onChange={(event) => {
                            setMgrEmail(event.target.value);
                        }} />
                        <Form.Text className="text-muted">
                            Please enter valid email address.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTimeFr">
                        <Form.Label>Time period : </Form.Label>
                        <Form.Group className="mb-3" controlId="formTimeFr">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control type="Date" placeholder="DD/MM/YYYY" required onChange={(event) => {
                                            setDateFrom(event.target.value);
                                        }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="Date" placeholder="DD/MM/YYYY" required onChange={(event) => {
                                            setDateTo(event.target.value);
                                        }} />
                                    </Col>
                                </Row>
                            </Form>
                        </Form.Group>
                    </Form.Group>


                    <div>
                        <td>
                            <Button variant="primary" size="sm" type="submit">Submit</Button>
                        </td>
                        <td>
                            <a href={`/agencyViewAdvertisement`}>
                                <Button type="button" variant="secondary" size="sm" class="btn btn-link">Cancel</Button>
                            </a>
                        </td>
                        <br />
                    </div>
                </Form>
            </div>
        </div>
    )
}
