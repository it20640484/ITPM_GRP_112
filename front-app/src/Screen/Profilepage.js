import React, { useState, useEffect } from "react";
import SideNavBar from "../Component/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

import { Avatar } from 'antd';


export default function Profilepage() {
  let hasToken;
  if (localStorage.getItem("authToken")) {
    hasToken = localStorage.getItem("authToken");
  }
  const updateUser = (e) => {
    e.preventDefault();
    update(e)
  };
  const [image, setimage] = useState("");
  const [username, setusername] = useState("");
  const [contact, setcontact] = useState("");
  const [name, setname] = useState("");

  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [_id, setid] = useState([]);
  const logOutHandler = () => {
    localStorage.removeItem("authToken");
    window.location = "/";
  };

  //delete profile funtion
  function onDelete(_id) {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    console.log(_id);
    axios.delete("http://localhost:6500/api/profile/deleteprofile/" + _id, config).then((res) => {
      alert('Deleted Successfully');
      window.location = `/`;
    }).catch((err) => {
      alert(err.message);
    })
  }
  useEffect(() => {

    const GetProfile = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        await axios
          .get(
            "http://localhost:6500/api/profile/profile/",
            config
          )

          .then((res) => {
            console.log(res.data.profile);
            setusername(res.data.profile.username);
            setemail(res.data.profile.email);
            setimage(res.data.profile.profilePicture.imageSecURL);
            setrole(res.data.profile.role);
            setid(res.data.profile._id);
            setname(res.data.profile.name);
            setcontact(res.data.profile.contact);
          })
          .catch((err) => {
            alert("Error occured!!! : " + err);
          });
      } catch (error) {
        alert("Error occured!!! : " + error);
      }
    };
    GetProfile();

  }, []);



  //Update 
 function update() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const newTime = {
        name,contact,username

    }

    axios.put("http://localhost:6500/api/profile/updateuser/" + _id, newTime, config).then(() => {
      setusername(username);
      setname(name);
      setcontact(contact);
     
      alert("Updated Successfully");
      window.location.reload();
    }).catch((err => {
      alert(err)
    }))

  }





  return (
    <div  >
      <Row>
        <Col sm={2}>
          <SideNavBar />


        </Col>
        <Col sm={10}>
          <div style={{ float: 'right', paddingRight: '4vh', paddingTop: '2vh' }}>
            <Button onClick={logOutHandler} >Log Out</Button>
            {' '}
            <Button variant="danger" onClick={() => onDelete(_id)}>Delete Profile</Button>
          </div><br />
          {hasToken && (

            <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
              <p style={{ fontSize: '30px' }}>
                <Avatar size={140} icon={<img src={image} alt="post" />} />

                &nbsp; {username}</p>
              <h6>Login email : {email}</h6>
              <h6>Role: {role}</h6>

              <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

              <Card >
                            <div style={{ paddingTop: '3vh', paddingBottom: '2vh', paddingLeft: '5vh', paddingRight: '2vh' }}>
                                <Row>
                                        <h4>My Profile</h4>
                                    
                                </Row>
                                <hr />
                                <Row>
                                    <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                                        <Form >
                                            <Form.Group as={Col} md={12} controlId="username">
                                                <Form.Label>username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="username"
                                                    minLength={6}
                                                    value={username}
                                                    onChange={(e) => setusername(e.target.value)}

                                                />
                                            </Form.Group>


                                            <Form.Group as={Col} md={12} controlId="fullname">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Full Name"
                                                    minLength={6}
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}

                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} md={12} controlId="contact">
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Contact number"
                                                    minLength={6}
                                                    value={contact}
                                                    onChange={(e) => setcontact(e.target.value)}

                                                />
                                            </Form.Group>


                                            <div>
                                                <br />

                                                <Form.Group as={Col} md={12} className="login-btn">
                                                    <div className="d-grid gap-2">
                                                        <Button style={{ backgroundColor: "#5791b3", border: "#5791b3" }} onClick={(e) => updateUser(e)} type="submit"  >
                                                            Edit
                                                        </Button>

                                                    </div>

                                                </Form.Group>
                                            </div>
                                        </Form>
                                    </div>
                                </Row>
                            </div>


                        </Card>
              </div>
            </div>)}
          {!hasToken && (<div>
            <a href="/">
              Time Out Login again from here ...
            </a>
          </div>)}
        </Col>
      </Row>
      hello
    </div>
  );
}
