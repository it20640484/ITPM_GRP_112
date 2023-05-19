import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import axios from "axios";








export default function AgencyUpdateModel(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [agency_id, setAgencyID]= useState(props.agency_id);
  const [agency_name,setAgency_name]= useState(props.agency_name);
  const [id,setId] = useState(props.id);
//   const [image,setImage]= useState(null);
//   const [imageView,setImageView]= useState(props.image);
  const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const agency_idHandle = (event)=>{
    setError("");
    setMsg("");
    setAgencyID(event.target.value);
}

const agency_nameHandle = (event)=> {
    setError("");
    setMsg("");
    setAgency_name(event.target.value);
}

const UpdateData =async (e)=>{

		e.preventDefault();
		try {
  
			const url = `http://localhost:8070/agency/update/${id}`;
			const { data: res } = await axios.put(url,{agency_id,agency_name})
    //   swal({
    //     title: "Success!",
    //     text: "Agency Updated Successfully",
    //     icon: 'success',
    //     timer: 2000,
    //     button: false,
    //   }).then(()=>{
    //     window.location = '/add'
    //   })
      
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        setMsg("");
				setError(error.response.data.message);
       
       
			}
		}
      

  }
 

  return (
    <>
      <Button className='btn btn-primary' onClick={handleShow}>
      Update
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Update Agency</Modal.Title>
           
        </Modal.Header>
        <Modal.Body>

        <form>
  <div class="mb-3">
    <label for="agency_id" class="form-label">Agency agency_id:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={agency_idHandle}
    value={agency_id}
    />
  </div>
  <div class="mb-3">
    <label for="agency_name" class="form-label">Agency agency_name:</label>
    <textarea type="text" class="form-control wd" id="exampleInputPassword1"
     onChange={agency_nameHandle}
     value={agency_name}
    />
  </div>
  


  {/* <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setImage({ base64 })
          
        }
        /> */}
        <br></br>
    
    {error &&
            <div className="alert alert-danger" role="alert">
            {error}
          </div>}
            {msg && 
            <div className="alert alert-success" role="alert">
            {msg}
          </div>}


</form>

      

  </Modal.Body>
    <Modal.Footer>
   
      <Button variant="danger" onClick={handleClose}>
        Exit
      </Button>
      <Button variant="primary" onClick={UpdateData}>
        Update
      </Button>
 
    </Modal.Footer>
  </Modal>
</>
);
}