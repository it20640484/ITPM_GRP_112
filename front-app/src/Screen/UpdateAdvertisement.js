import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Carasoul from "./Carasoul";


export default function UpdateAdvertisement() {

  const [advertisements, setAdvertisement] = useState("");

  const navigate = useNavigate();


  const { state } = useLocation();
  const { AdvertisementId } = state;

  const { prevJobCategory } = state;
  const { prevAgName } = state;
  const { prevMgrId } = state;
  const { prevMgrName } = state;
  const { prevMgrConNo } = state;
  const { prevMgrEmail } = state;
  const { prevFrom } = state;
  const { prevTo } = state;
  

  const [job_category, setJbCategory] = useState(prevJobCategory);
  const [ag_name, setAgName] = useState(prevAgName);
  const [mngr_id, setMgrID] = useState(prevMgrId);
  const [mngr_name, setMgName] = useState(prevMgrName);
  const [contact_no, setContactNo] = useState(prevMgrConNo);
  const [mgr_email, setMgEmail] = useState(prevMgrEmail);
  const [from, setDateFr] = useState(prevFrom);
  const [to, setDateT] = useState(prevTo);
  


  function sendData(e) {

    e.preventDefault();


    const newAdvertisement = {
      job_category,
      ag_name,
      mngr_id,
      mngr_name,
      contact_no,
      mgr_email,
      from,
      to,
      
    };

    axios
      .put(`http://localhost:8070/advertisement/update/${AdvertisementId}`, newAdvertisement)
      .then(() => {
        alert("Advertisement Updated successfully!!!");
        navigate("/agencyViewAdvertisement");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newAdvertisement);
  }

  return (
    <div>
      <Carasoul/>
            
      <Header/>
      <div className="container my-5">
        <h1> Update the Advertisement </h1>
        <Form className="rounded container my-5 p-3 mb-2 bg-dark text-white" style={{ border: "1px solid black" }} onSubmit={sendData}>

          <br />
          <Form.Group className="mb-3" controlId="formJobCategory">
            <Form.Label>Job Category</Form.Label>
            <Form.Control type="text"
              placeholder="-Type here-"
              required
              defaultValue={prevJobCategory}
              onChange={(e) => {
                setJbCategory(e.target.value);
              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAgName">
            <Form.Label>Agency Name</Form.Label>
            <Form.Control type="text"
              placeholder="ABC Company"
              required
              defaultValue={prevAgName}
              onChange={(e) => {
                setAgName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPubId">
            <Form.Label> Advertisement publishers' ID</Form.Label>
            <Form.Control type="text"
              placeholder="AG001"
              required
              defaultValue={prevMgrId}
              onChange={(e) => {
                setMgrID(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPubName">
            <Form.Label for="text">Advertisement publishers' Name</Form.Label>
            <Form.Control placeholder="Perera A.B.C."
              required
              defaultValue={prevMgrName}
              onChange={(e) => {
                setMgName(e.target.value);
              }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPubCon">
            <Form.Label for="text">Contact No.</Form.Label>
            <Form.Control placeholder="071 234 567 8"
              required
              defaultValue={prevMgrConNo}
              onChange={(e) => {
                setContactNo(e.target.value);
              }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label for="text">Email</Form.Label>
            <Form.Control placeholder="abc@gmail.com"
              required
              defaultValue={prevMgrEmail}
              onChange={(e) => {
                setMgEmail(e.target.value);
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
                    <Form.Control placeholder="DD/MM/YYYY"
                      required
                      defaultValue={prevFrom}
                      onChange={(e) => {
                        setDateFr(e.target.value);
                      }} />
                  </Col>
                  <Col>
                    <Form.Label>To</Form.Label>
                    <Form.Control placeholder="DD/MM/YYYY"
                      required
                      defaultValue={prevTo}
                      onChange={(e) => {
                        setDateT(e.target.value);
                      }} />
                  </Col>
                </Row>
              </Form>
            </Form.Group>
          </Form.Group>

          

          <td>
            <Button variant="success" size="sm" type="submit">Update Advertisement</Button>
          </td>

          <td>
            <a href={`/agencyViewAdvertisement`}>
              <Button type="button" variant="secondary" size="sm" class="btn btn-link">Cancel</Button>
            </a>
          </td>
          <br />
        </Form>

      </div>
    </div>
  );

}
