import React, {useState} from "react";
import axios from "axios";
import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import jsPDF from 'jspdf'

export default function QuestionReport(){
    const [statusData, setStatusData] = useState([]);
    const [showQuestionReport, setShowQuestionReport] = useState(false);

    function generate(e){
        e.preventDefault();

        axios.get(`http://localhost:8070/adminViewQuestion/reportQuestion`).then((res)=>{
            setStatusData(res.data);
        }).catch((err)=>{
            console.log(err.message)
        })

        showQuestionReport(true)
    }

    return (
        <div className="container">
            <div style={{display:"flex", flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                <Form style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="form-inline" onSubmit={generate}>
                <Button style= {{marginTop:"5px"}} type="submit" className="btn btn-primary mb-2">Generate pending Question count</Button>
                </Form>
            </div>

            {showQuestionReport?(<div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",
            marginTop:"20px", marginLeft:"250px", padding:"20px",border:"1px solid blue"}}>
                <h4 style={{marginBottom:"50px"}}><b><u> 'Pending' questions count report {year}</u></b></h4>

                {statusData.totPendQuestions?(
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{paddingBottom:"10px", paddingTop:"10px"}}><b>Total no. of questions</b></p>
                                <p style={{paddingBottom:"10px", paddingTop:"10px"}}><b>{statusData.totPendQuestions}</b></p>
                            </div>
                ):<p></p>}

      

        </div>):<p></p>}
        </div>
    )
}