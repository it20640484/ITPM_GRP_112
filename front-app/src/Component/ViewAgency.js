import React, { useState, useEffect } from 'react';
import axios from "axios";

//import { NavLink} from 'react-router-dom';
//import '../PaymentsManagement/paymentStyles.css'
 export default function ViewAgency() {

    
    const [ViewAgency, setViewAgency] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8070/agency/").then((response)=>{
               console.log(response)
                setViewAgency(response.data)
           })
           .catch(()=>{
               console.log("ERR");
           } );
           }

   , []);


   

   return(
       <div>
           

       <div className="container" id="all">
       <div className="all">      
      
       <h4 style={{textAlign: "center", margin:"5px 0px 5px 0px"}}>Approved Agencies</h4>      
       <div style={{padding: "5px 0px 5px opx"}}>       
                  
                 
                   <table class="table table-striped table-dark paytable">
                       <thead>
                           <tr>
                           <th scope="col">Agency ID</th>
                                <th scope="col">Agency Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email</th>
                                <th scope="col">Fax</th>
                                <th scope="col">Vaild up to</th>
                               
                           </tr>
                       </thead>
                       <tbody>
                           {ViewAgency.map((val) => (
                               <tr class="bg-primary">
                                   <td class="bg-primary">{val.agency_id}</td>
                                    <td class="bg-primary">{val.agency_name}</td>
                                    <td class="bg-primary">{val.address}</td>
                                    <td class="bg-primary">{val.contact}</td>
                                    <td class="bg-primary">{val.email}</td>
                                    <td class="bg-primary">{val.fax}</td>
                                    <td class="bg-primary">{val.vaild_up_to}</td>
                                   
                                    
                                  

                                
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
             
           </div></div>
           </div>
   )


















 }