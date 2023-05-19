import React, { useState, useEffect } from 'react';
import axios from "axios";




//import AdminSideNav from "../CommonComponents/AdminSideNav"; 
//import AdminViewFooter from "../CommonComponents/AdminViewFooter";



export default function AddAgency(){
    const [agency_id, setAgencyID] = useState("");
    const [agency_name, setAgencyName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [fax, setFax] = useState("");
    const [vaild_up_to, setVaildUpTo] = useState("");



    

    function sendData(e){

        e.preventDefault();
        
        const newAgency ={
            agency_id,
            agency_name,
            address,
            contact,
            email,
            fax,
            vaild_up_to
        }

       axios.post("http://localhost:8070/agency/add",newAgency).then(()=>{
           alert("Agency Added")
           
       }).catch((err)=>{
           alert(err)
       })

    }


    return(

        <div style={{ backgroundColor:"lightblue"}}>
            
            <div class="text-bg-light p-3" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
        <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Add Agency</h4>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
         
< span style={{ textAlign:"initial" }}>
    <div className="mb-3">
    <label for="agency_id" class="form-label">AgencyID</label>
    <input type="text" className="form-control" id="agency_id"  required placeholder="Enter Agency ID" 
    onChange={(e)=>{

        setAgencyID(e.target.value);
    }}
    />
    </div>

    <div className="mb-3">
        <label for="agency_name" class="form-label">AgencyName</label>
        <input type="text" className="form-control" id="agency_name"  required placeholder="Enter Agency Name" 
        onChange={(e)=>{

            setAgencyName(e.target.value);
        }}
        />
    </div>
        
    <div className="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" className="form-control" id="address" required placeholder="Enter Address" 
        onChange={(e)=>{

            setAddress(e.target.value);
        }}
        />
    </div>

    
    <div className="mb-3">
        <label for="contact" class="form-label">contact</label>
        <input type="text" className="form-control" id="contact" required placeholder="Enter contact number"
        onChange={(e)=>{

            setContact(e.target.value);
        }}/>
    </div>

    <div className="mb-3">
        
        <label for="email" class="form-label">Email</label>
        <input type="email" className="form-control" id="email"  required placeholder="Enter Email Address"
        onChange={(e)=>{

            setEmail(e.target.value);
        }}/>

    </div>
        
    <div className="mb-3">
        <label for="fax" class="form-label">Fax</label>
        <input type="text" className="form-control" id="fax" required placeholder="EnterFax number"
        onChange={(e)=>{

            setFax(e.target.value);
        }}/>
    </div>
        
    <div className="mb-3">
        <label for="vaild_up_to" class="form-label">Vaild Up To</label>
        <input type="date" className="form-control" id="vaild_up_to" required placeholder="Enter vaild dates"
        onChange={(e)=>{

            setVaildUpTo(e.target.value);
        }}/>
    </div>
</span>

<div>
<button type="submit" className="btn btn-primary">Submit</button>
</div>

  
  
</form>  
        </div>
        
</div>


    )
}