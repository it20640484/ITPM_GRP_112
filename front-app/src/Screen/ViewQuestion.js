import React, {useState,useEffect} from "react";
import axios from "axios";
//import { renderMatches } from "react-router-dom";
//import { Link } from "react-router-dom";
//import "./subject.css";
import { useNavigate } from "react-router-dom";
import QuestionSearch from "./QuestionSearch";
import Table from 'react-bootstrap/Table';
import { Form, Button }  from 'react-bootstrap';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Carasoul from "./Carasoul";


function ViewQuestion(){

    const[qnas, setQuestion] = useState([]);
    const [_id, setQuestionId ] = useState("");
    const [cus_id,  setcID] = useState("");
    const [cus_name,  setCName] = useState("");
    const [cus_contact_no,  setCContactNo] = useState("");
    const [question, setDescription]=useState("");
    //const[status, setStatus] = useState([]);
    
    let navigate = useNavigate();

    useEffect(()=>{
       function getQuestion(){
            axios.get(`http://localhost:8070/qna/viewQuestion`).then((res)=>{
                setQuestion(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
        getQuestion();


    },[]);

    const deleteQuestion=(cus_id)=>{
        axios.delete(`http://localhost:8070/qna/deleteQuestion/${cus_id}`).then((res)=>{
                alert("Question deleted successfully");
                window.location.reload(false);
            }).catch((err)=>{
                console.log(err.message)
            })
    };

    function updateUser(e) {
        e.preventDefault();
        navigate(`/updateQuestion/${_id}`,{ state: {QuestionId: _id , prevCusId:cus_id , prevCusName:cus_name, prevCusContactNo:cus_contact_no, prevQuestion:question} }); 
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
    
    return(
    <div>
        <Carasoul/>
        <Header/>
        <div className="container my-3">
            <center><div><h1> Q & A </h1></div></center>
        
            <div className="container" id="all">
                <div className="allQuestions">
                   
                    <center><h2> View your questions... </h2></center>
                </div>
                    <center>
                    <QuestionSearch
                        refreshFunction={updateSearchTerms}
                    />
                    </center>
            </div>   

            

                    <center><Table className="container my-5">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Name</th>
                                <th>Contact No.</th>
                                <th>Description</th>
                                <th>Action</th>
                                <th></th>
                                <th>Answer</th>

                            </tr>
                        </thead>
                        <tbody>
                            {qnas.map((item)=>(
                                <tr>
                                    <td>{item.cus_id}</td>
                                    <td>{item.cus_name}</td>
                                    <td>{item.cus_contact_no}</td>
                                    <td>{item.question}</td>
                                    

                                    <td>
                                        <Button variant="danger" onClick={()=>deleteQuestion(item._id)}>Delete</Button>
                                    </td>
                                    

                                    <td>
                                        <Form onSubmit={updateUser}>
                                            <Button type="submit" value={item._id} variant="success" onClick={(e)=>{
                                                setQuestionId(e.target.value);
                                                setcID(item.cus_id);
                                                setCName(item.cus_name);
                                                setCContactNo(item.cus_contact_no);
                                                setDescription(item.question);                     
                                            }}>Update</Button>
                                        </Form>

                                    </td>
                                    <td>{item.answer}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table></center>
                
            
            
            <center><div className="my-2">
                <a href={`/addQuestion`}>
                    <Button variant="primary" type="button" size="sm"> + Create New </Button>
                </a>
                </div>

                <div className="my-2">
                <a href={`/`}>
                    <Button type="button" variant="secondary" class="btn btn-link" size="sm">Back to Home page</Button>
                </a>
            </div>
        
            </center>

            </div>
        </div>
    );

}

export default ViewQuestion;