import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Carasoul from "./Carasoul";


export default function UpdateQuestion(){

  const [qnas, setQuestion] = useState("");

  const navigate = useNavigate();

  
  const {state} = useLocation();
  const {QuestionId} = state;

  const {prevCusId} = state;
  const {prevCusName} = state;
  const {prevCusContactNo} = state;
  const {prevQuestion} = state;

  const [cus_id, setcID] = useState(prevCusId);
  const [cus_name, setCName] = useState(prevCusName);
  const [cus_contact_no, setCContactNo] = useState(prevCusContactNo);
  const [question, setDescription] = useState(prevQuestion);

  
  function sendData(e) {
    
    e.preventDefault();

  
    const newQuestion = {
      cus_id,
      cus_name,
      cus_contact_no,
      question
    };

    axios
      .put(`http://localhost:8070/qna/update/${QuestionId}`, newQuestion)
      .then(() => {
        alert("Question Updated successfully!!!");
        navigate("/viewQuestion");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newQuestion);
  }

  return (
    <div>
      <Carasoul/>
      <Header/>
    <div className="container my-5">
      <h1> Update Your Question </h1>
            <Form className="rounded container my-5 mb-2 bg-dark text-white" style={{border:"1px solid black"}} onSubmit={sendData}>

              <br/>
              <Form.Group className="mb-3" controlId="formCusId">
                      <Form.Label>CustomerID</Form.Label>7
                        <Form.Control type="text" 
                          placeholder="C1234" 
                          required 
                          defaultValue={prevCusId}
                            onChange={(e) => {          
                                setcID(e.target.value);
                            }}/>  
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCusName">
                      <Form.Label> Name</Form.Label>
                          <Form.Control type="text"  
                          placeholder="Perera A.B.C." 
                          required 
                          defaultValue={prevCusName} 
                          onChange={(e) => {
                            setCName(e.target.value);
                          }}
                          />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label> Contact No.</Form.Label>
                          <Form.Control type="text"
                          placeholder="071 234 567 8" 
                          required 
                          defaultValue={prevCusContactNo}
                          onChange={(e) => {
                            setCContactNo(e.target.value);
                          }}
                          />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                          <Form.Label for="exampleFormControlTextarea1"> Type your Question here...</Form.Label>
                          <Form.Control as="textarea" rows={3}  
                          required 
                          defaultValue={prevQuestion}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}/>
                  </Form.Group>
                    <td> 
                        <Button variant="success" size="sm" type="submit">Update Question</Button>
                    </td>

                    <td>
                   <a href={`/viewQuestion`}>
                      <Button type="button" variant="secondary" size="sm" class="btn btn-link">Cancel</Button>
                   </a> 
                   </td>
                    <br/>            
            </Form>
            </div>     
    </div>
  );
        
}
