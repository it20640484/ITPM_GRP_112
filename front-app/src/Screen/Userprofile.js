import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from 'antd';
import Carousel from 'react-bootstrap/Carousel';


export default function Userprofile() {
    let hasToken;
    if (localStorage.getItem("authToken")) {
        hasToken = localStorage.getItem("authToken");
    }

    const [image, setimage] = useState("");
    const [username, setusername] = useState("");
    const [contact, setcontact] = useState("");
    const [name, setname] = useState("");

    const [email, setemail] = useState("");
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
                        setid(res.data.profile._id);
                        setcontact(res.data.profile.contact);
                        setname(res.data.profile.name)
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

    //Update profile
    function update() {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };
        const newTime = {
            name, contact, username

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

    const updateUser = (e) => {
        e.preventDefault();
        update(e)
    };

    return (
        <div  >
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.pixel4k.com/wp-content/uploads/2018/09/hong-kong-china-skyscrapers-night-city-city-lights-4k_1538068866.jpg"
                        alt="Second slide"
                        style={{ height: '40vh' }}
                    />

                    <Carousel.Caption>
                        <div style={{ paddingBottom: '10%' }}>
                            <img src='https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png' alt='Logo' style={{ width: '10%', float: 'left' }} />
                            <i><h1 style={{ fontSize: '80px' }}>Welcome To SHAC SL !</h1></i>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <div style={{ paddingLeft: '50vh' }}>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Q & A</Nav.Link>
                            <Nav.Link href="/feedback">Feedback</Nav.Link>
                            <Nav.Link href="/uprofile">Profile</Nav.Link>
                            <Nav.Link href="/uprofile">
                                <div style={{ paddingLeft: '70vh' }}>
                                    <Avatar size={65} icon={<img src={image} alt="logo" />} />
                                </div>

                            </Nav.Link>
                        </Nav>
                    </div>

                </Container>
            </Navbar>


            {hasToken && (

                <div style={{
                    paddingLeft: '2vh', paddingTop: '2vh', backgroundImage: `url(${'https://wallpapercave.com/wp/wp4831715.jpg'})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover'
                }}>
                    <div style={{ float: 'right', paddingRight: '4vh', paddingTop: '2vh' }}>
                        <Button onClick={logOutHandler} >Log Out</Button>
                        {' '}
                        <Button variant="danger" onClick={() => onDelete(_id)}>Delete Profile</Button>
                    </div><br />


                    <div style={{ paddingTop: '4vh', paddingLeft: '25vh', paddingRight: '35vh', paddingBottom: '10vh' }}>

                        <Card >
                            <div style={{ paddingTop: '3vh', paddingBottom: '2vh', paddingLeft: '5vh', paddingRight: '2vh' }}>
                                <Row>
                                    <Col>
                                        <h4>My Profile</h4>
                                    </Col>
                                    <Col>
                                        <div style={{ paddingLeft: '30vh' }}>
                                            <Avatar size={120} icon={<img src={image} alt="post" />} />
                                        </div>

                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>
                                        <Form >


                                            <Form.Group as={Col} md={12} controlId="email">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="email"
                                                    value={email}
                                                    disabled
                                                />
                                            </Form.Group>


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


        </div>
    );
}
