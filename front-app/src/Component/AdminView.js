import React, { useState, useEffect } from 'react';
import axios from "axios";
///import '../PaymentsManagement/paymentStyles.css'
//import AdminSideNav from "../CommonComponents/AdminSideNav"; 
//import AdminViewFooter from "../CommonComponents/AdminViewFooter";

import Search from "./Search";
import { NavLink} from 'react-router-dom';
 export default function AllAgencies() {

    
    

    
    const deleteAgency = (id) =>{
        axios.delete(`http://localhost:8070/agency/delete/${id}`).then(()=>{
            setAllAgencies(AllAgencies.filter((val)=>{
                return val._id !== id;
            }))
        });
    };


    const [AllAgencies, setAllAgencies] = useState([]);

    useEffect(()=> {
         axios.get("http://localhost:8070/agency/").then((response)=>{
                console.log(response)
                 setAllAgencies(response.data)
            })
            .catch(()=>{
                console.log("ERR");
            } );
            }

    , []);

    function updateSearchTerms (newSearchTerm){
        console.log(newSearchTerm);
        function getSearchedAgencies(){
            axios.get(`http://localhost:8070/agency/displaySearch/${newSearchTerm}`).then((res)=>{
                setAllAgencies(res.data);
    
            }).catch((err)=>{
               console.log(err.message)
            })
        }
        function getAllAgencies(){
            axios.get("http://localhost:8070/agency/").then((res)=>{
                setAllAgencies(res.data);
    
            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
    
        if (newSearchTerm !== ''){
            getSearchedAgencies();
        }
        else{
            getAllAgencies();
        }
        
        
    }
    

   
    return(
        

        <div className="container" id="all">

        <div className="all">      
            
       
                
                
                    
                    <h2 style= {{textAlign: "center",display: "flex", margin:"20px"}}>Approved Agencies</h2>
                    <div style={{ margin:"2rem"}}>
                        <br></br>
                    <Search
                        refreshFunction={updateSearchTerms}
                        />
                    </div>
                    <br/>
                    <div style={{padding: "5px 0px 5px opx",display: "block"}}>
                     
                    

                    <table class="table table-striped table-light">
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
                            {AllAgencies.map((val) => (
                                <tr class="bg-primary">
                                     <td class="bg-primary">{val.agency_id}</td>
                                    <td class="bg-primary">{val.agency_name}</td>
                                    <td class="bg-primary">{val.address}</td>
                                    <td class="bg-primary">{val.contact}</td>
                                    <td class="bg-primary">{val.email}</td>
                                    <td class="bg-primary">{val.fax}</td>
                                    <td class="bg-primary">{val.vaild_up_to}</td>



                                    <td className="d-flex justify-content-between">

                                    
                               
                            
                            {/* <button className="btn btn-success">Read</button>  */}
                                    <button className="btn btn-danger" onClick={() => deleteAgency(val._id)}>Delete</button>
                                    
                                    
                           

                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
               
            </div>
            </div>
            </div>
    )
 
}
