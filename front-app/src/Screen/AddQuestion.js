import React, {useState} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Carasoul from "./Carasoul";

export default function AddQuetion(){

    const [cus_id , setCusNo] = useState("");
    const [cus_name , setName] = useState("");
    const [cus_contact_no , setCusContactNo] = useState("");
    const [question , setQuestion] = useState("");
    const navigate = useNavigate();
    


    function sendData(event){

        event.preventDefault();

        const newQuestion ={
            cus_id,
            cus_name,
            cus_contact_no,
            question
            
            
        }

        
        axios.post("http://localhost:8070/qna/addQuestion",newQuestion).then(()=>{
            alert("Question submitted successfully!!!")
            navigate("/viewQuestion");
            window.location.reload(false);
           

        }).catch((err)=>{
            alert(err)
        })

    }


    return(         
       <div>
        <Carasoul/>
        <Header/>
        <div className="container my-5 ">
               <h1> Type here your question </h1>        
           <Form className="rounded container my-5 mb-2 bg-dark text-white" style={{border:"1px solid black"}} onSubmit={sendData}>
                
               <br/>
               <Form.Group className="mb-3" controlId="formCusId">
                   <Form.Label >Customer ID</Form.Label>
                   <Form.Control type="text" placeholder="C1234" required onChange={(event)=>{
                           setCusNo(event.target.value);
                       }}/>   
               </Form.Group>
   
               <Form.Group className="mb-3" controlId="formCusName">
                   <Form.Label >Your Name</Form.Label>
                       <Form.Control type="text" placeholder="Perera A.B.C." required onChange={(event)=>{
                           setName(event.target.value);
                       }}/>
               </Form.Group>
   
               <Form.Group className="mb-3" controlId="formCusCon">
               <Form.Label>Contact No.</Form.Label>
                       <Form.Control type="text" placeholder="071 234 567 8" required onChange={(event)=>{
                           setCusContactNo(event.target.value);
                       }}/>
               </Form.Group>
               
                   
                <Form.Group className="mb-3">
                    <Form.Label for="exampleFormControlTextarea1"> Type your Question Here ...</Form.Label>
                    <Form.Control as="textarea" rows={3} required onChange={(event)=>{
                        setQuestion(event.target.value);
                    }}/>
                </Form.Group>
            
               <div>
                    <td> 
                        <Button variant="primary" size="sm" type="submit">Submit</Button>
                    </td> 
                   <td>
                   <a href={`/viewQuestion`}>
                      <Button type="button" variant="secondary" size="sm" class="btn btn-link">Cancel</Button>
                   </a> 
                   </td> 
                   <br/>
               </div>
           </Form>
       </div> 
       </div>   
    )
}
