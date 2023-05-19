import React, { useState, useEffect } from "react";
import SideNavBar from "../Component/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

import { Avatar } from 'antd';


export default function Aprofilepage() {
  let hasToken;
  if (localStorage.getItem("authToken")) {
    hasToken = localStorage.getItem("authToken");
  }
  function updateUser() {
    alert('Password Changed');
  }
  const [image, setimage] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

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
            setpassword(res.data.profile.password);
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




  return (
    <div  >
    <div>
      <h2>Welcome! </h2>
    </div>
    <br/>
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

                <Card style={{ backgroundColor: '#330A6A', borderRadius: '18px' }}>
                  <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                    <h5 style={{ color: 'white' }}>Change password</h5>
                    <p style={{ color: '#8FE5FF' }}>Changing the login password frequently prevents unauthorized users from modifying configurations</p>
                  </div>
                  <div style={{ paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '4vh', paddingTop: '2vh' }}>
                    <Form>
                      <Row>

                        <Col sm={3}>
                          <p style={{ color: 'white' }}>Current Password</p>
                        </Col>
                        <Col sm={9}>
                          <div style={{ paddingRight: '15vh' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                              <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Enter password" value={password} />
                            </Form.Group>
                          </div>
                        </Col>


                        <Col sm={3}>
                          <p style={{ color: 'white' }}>New Password</p>
                        </Col>
                        <Col sm={9}>
                          <div style={{ paddingRight: '15vh' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            >
                              <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Enter New Password" />
                            </Form.Group>
                          </div>
                        </Col>

                        <Col sm={3}>
                          <p style={{ color: 'white' }}>Confirm Password</p>
                        </Col>
                        <Col sm={9}>
                          <div style={{ paddingRight: '15vh' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                              <Form.Control style={{ backgroundColor: '#D8B7FA', borderRadius: '18px' }} type="password" placeholder="Confirm Password" />
                            </Form.Group>
                          </div>
                        </Col>
                      </Row>


                      <div style={{ paddingLeft: '40%', paddingTop: '8vh' }}>
                        <Button type="submit" onClick={() => updateUser()} style={{ backgroundColor: '#8FE5FF', color: 'black', paddingLeft: '7vh', paddingRight: '7vh', borderRadius: '18px' }} variant="primary" size="lm" >
                          ~ Save ~
                        </Button>
                      </div>

                    </Form>
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
