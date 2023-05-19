
import { useReactToPrint } from "react-to-print";
import React, { useRef,useState, useEffect } from 'react';
import axios from "axios";


//import AdminSideNav from "../CommonComponents/AdminSideNav";
//import AdminViewFooter from "../CommonComponents/AdminViewFooter";

const Report= () => {  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


 // export default function Report() {
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


  return (<>
  <div>
  
  <div className="container" id="all">
  <div className="all"> 

  <div class="print_section"> 
  <div class="col-md-12">
  <div class="float_start">
  <div ref={componentRef} className="card">  
  <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}> Agency Report</h4>
  <div style={{padding: "5px 0px 5px opx"}}>
  <table class="table">
      <thead class="thead-light">
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
  </div>
  </div>
  <button onClick={handlePrint} class="btn btn-success">  Print </button> 
       
  </div> 
  </div>
  </div>
  
 
  
  </div>
  
  </div></>
  )
}
export default Report