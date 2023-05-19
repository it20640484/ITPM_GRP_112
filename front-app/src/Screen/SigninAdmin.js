import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import FileBase from "react-file-base64";
import '../Screen/signin.css';

import Banner from "../Component/Banner";

export default function SigninAdmin() {
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);

    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fileEnc, fileEncData] = useState(null);
    const [username, setusername] = useState("");
    const [error, setError] = useState("");
    const regex = /\S+@\S+\.\S+/;
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const loginHandler = async (e) => {
        const role = "admin";

        e.preventDefault();
        if (email.trim().length === 0 || password.trim().length === 0 || username.trim().length === 0 || fileEnc.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        } else if (password.trim().length < 6) {
            setTimeout(() => {
                setError("Time Out");
            }, 5000);
            return setError("Please use a valid password with at least 6 characters");
        }
        else if (!email.trim().match(regex)) {
            setTimeout(() => {
                setError("Time Out");
            }, 5000);
            return setError("Please provide valid email");
        }

        else {
            let postObject = { email, password, fileEnc, role, username,name,contact };

            await axios
                .post("http://localhost:6500/api/auth/reg", postObject)
                .then((res) => {
                    localStorage.setItem("authToken", res.data.token);
                    window.location = `/ahome`;


                })
                .catch((err) => {
                    setError(err.response.data.desc);
                    setTimeout(() => {
                        setError("");
                    }, 5000);
                });
        }

    };


    const login = async (e) => {
        e.preventDefault();
        if (email.trim().length === 0 || password.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        } else if (password.trim().length < 6) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return alert("Please use a valid password");
        } else {
            let postObject = { email, password };

            await axios
                .post("http://localhost:6500/api/auth/login", postObject)
                .then((res) => {
                    localStorage.setItem("authToken", res.data.token);
                    window.location = `/ahome`;
                })
                .catch((err) => {
                    setError(err.response.data.desc);
                    setTimeout(() => {
                        setError("");
                    }, 5000);
                });
        }
    };

    return (
        <div  >
            <Banner />
            <div>
                <div style={{ paddingLeft: '85%', backgroundColor: '#57B9DD', paddingTop: '3vh', paddingBottom: '2vh' }}>
                    <Button variant="primary" onClick={handleShow} >
                        Sign In                                </Button>{'  '}

                    <Button variant="primary" onClick={handleShows}  >
                        LogIn                                </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Register to the System</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card border="dark" >
                                <Card.Body>
                                    <Form onSubmit={loginHandler}>
                                        {error && <span className="error-message" style={{ color: "red" }}>{error}</span>}


                                        <Form.Group as={Col} md={12} controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md={12} controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                minLength={6}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
                                        <Form.Group controlId="fileupload">
                                            <Form.Label>Profile Picture</Form.Label>
                                            <h6>**Please do not exceed the amount of file size 25MB </h6>
                                            <FileBase
                                                type="file"
                                                multiple={false}
                                                onDone={({ base64 }) => {
                                                    fileEncData(base64);
                                                }}
                                            />
                                        </Form.Group>
                                    
                                        <div>
                                            <br />

                                            <Form.Group as={Col} md={12} className="login-btn">
                                                <div className="d-grid gap-2">
                                                    <Button style={{ backgroundColor: "#5791b3", border: "#5791b3" }} type="submit"  >
                                                        Register
                                                    </Button>

                                                </div>

                                            </Form.Group>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} >
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>


                <Modal show={shows} onHide={handleCloses} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login to the System</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ paddingLeft: '5vh', paddingRight: '10vh' }}>
                            <Form onSubmit={login}>
                                {error && <span className="error-message" style={{ color: "red" }}>{error}</span>}

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type="email" placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password"
                                        minLength={6}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <div style={{ paddingLeft: '3vh', paddingRight: '3vh' }}>
                                    <div className="d-grid gap-2">
                                        <Button size="lg" type="submit" >
                                            Login
                                        </Button>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>


            </div>

            <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                <h6>Card Data </h6>
                <br />
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>




        </div>
    );
}
