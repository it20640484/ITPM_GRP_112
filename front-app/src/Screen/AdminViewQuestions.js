import React, {useEffect, useState} from "react"
import axios from "axios";
import QuestionSearch from "./QuestionSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


function AdminViewQuestion(){

    const[qnas, setQuestion] = useState([]);
    const [questionId , setQuestionID] = useState("");
    const [answer, setAnswer] = useState("")
    

    useEffect(()=>{
       function getQuestion(){
            axios.get(`http://localhost:8070/qna/adminViewQuestion`).then((res)=>{
                setQuestion(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
        getQuestion();
        
    },[]);

    function UpdateStatus(questionId){
        console.log(questionId);
        axios.put(`http://localhost:8070/qna/update/${questionId}`, {answer: answer}).then((res)=>{
            setQuestion(res.data);
                alert("Answer sent!!!")
            }).catch((err)=>{
                alert(err.message)
            })
    }

    function updateSearchTerms(newSearchTerm){
        function getSearchedQuestion(){
            axios.get(`http://localhost:8070/qna/qnass/${newSearchTerm}`).then((res)=>{
                setQuestion(res.data);
            }).catch((err)=>{
                console.log()
            })
        }
        function getQuestion(){
            axios.get("http://localhost:8070/qna/adminViewQuestion").then((res)=>{
                setQuestion(res.data);
            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
        if (newSearchTerm !=''){
            getSearchedQuestion();
        }
        else{
            getQuestion();
        }
    }

    const componentRef = useRef();

    return(
        <div className="container my-3">
            <div><h1> Questions </h1></div>

            <ReactToPrint
        trigger={() => <Button variant="warning">Print this out!</Button>}
        content={() => componentRef.current}
      />
        
            <div className="container" id="all" ref={componentRef}>
                <div className="allTicket">
                   
                    <h2 className="text-center"> All Questions </h2>

                    <QuestionSearch
                        refreshFunction={updateSearchTerms}
                    />



                <Form className="rounded container my-5" style={{border:"1px solid blue"}}>

                    <Table class="container my-3">
                        <thead>
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact No.</th>
                                <th scope="col">Question</th>
                                <th scope="col">Answer</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {qnas.map((item)=>(
                                <tr>
                                    <td>{item.cus_id}</td>
                                    <td>{item.cus_name}</td>
                                    <td>{item.cus_contact_no}</td>
                                    <td>{item.question}</td>
                                    <td><input name="answer" onChange={(e) => setAnswer(e.target.value)} placeholder={item.answer} 
                                    disabled={item?.answer !== "Pending"? true: false}/></td>
                                    <td>
                                        <Button type="submit" variant="primary" size="sm" onClick={(e)=>{
                                            setQuestionID(item._id); 
                                            UpdateStatus(item._id)
                                            }}> Send the Answer </Button>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Form>
                </div>
            </div>
            
        </div>
    )


}

export default AdminViewQuestion;