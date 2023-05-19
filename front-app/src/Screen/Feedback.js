import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


export default function Feedback() {
    let hasToken;
    if (localStorage.getItem("authToken")) {
        hasToken = localStorage.getItem("authToken");
    }
    const handleClose = () => setShow(false);
    const [search, setSearch] = useState("");
    const [shows, setShows] = useState(false);

    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const [feedback, setfeedback] = useState([]);
    const [feedbackId, setfeedbackId] = useState("");
    const [agency, setagency] = useState([]);
    const [message, setmessage] = useState("");
    const [uemail, setemails] = useState("");
    const [image, setimage] = useState("");
    const [error, setError] = useState("");
    const [email, setemail] = useState("");
   
    const [show, setShow] = useState(false);
    const handleShow = (_id,
        feedbackId, agency, message,
    ) => {
        setShow(true);
        setid(_id);
        setagency(agency);
        setmessage(message);
        setfeedbackId(feedbackId);
    }
    
    const [_id, setid] = useState([]);
    const logOutHandler = () => {
        localStorage.removeItem("authToken");
        window.location = "/";
    };

  //Update 
  function update() {
 
    const newTime = {
        feedbackId,
        agency,
        message,
    }

    axios.put("http://localhost:6500/api/feedback/feedback/" + _id, newTime).then(() => {
        setfeedbackId(feedbackId);
        setagency(agency);
        setmessage(message);
      alert("Updated Successfully");
      window.location.reload();
    }).catch((err => {
      alert(err)
    }))

  }

    //Add Feedback
    function sendData(e) {
        e.preventDefault();
        if (feedbackId.trim().length === 0 || agency.trim().length === 0 || message.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        }


        const email = uemail
        const newProducr = {
            feedbackId,
            agency,
            message,
            email
        }

        axios.post("http://localhost:6500/api/feedback/feedback", newProducr).then(() => {
            ("Feedback added")

            setemail('');
            setagency('');
            setmessage('');
            setfeedbackId('');
            alert('Feedback Added By' + email)
            window.location.reload();

        }).catch((err) => {
            alert("error");
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

                        setimage(res.data.profile.profilePicture.imageSecURL);
                        setid(res.data.profile._id);
                        setemails(res.data.profile.email);

                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        }; //get funtion
        const GetFeedback = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/feedback/feedback",

                    )

                    .then((res) => {
                        console.log(res.data.allfeedback);
                        setfeedback(res.data.allfeedback);



                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        };
        GetProfile();
        GetFeedback();
    }, []);
    const updateUser = (e) => {
        e.preventDefault();
        update(e)
      };
    //delete funtion
    function onDelete(_id) {
     
        console.log(_id);
        axios.delete("http://localhost:6500/api/feedback/feedback/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }



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
                    </div><br />


                    <div style={{ paddingTop: '4vh', paddingLeft: '15vh', paddingRight: '20vh', paddingBottom: '10vh' }}>

                        <Card >
                            <div style={{ paddingTop: '3vh', paddingBottom: '2vh', paddingLeft: '5vh', paddingRight: '2vh' }}>
                                <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                                    <div>
                                        <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                            <input type="text" placeholder="Search from ' ID ' " className="mr-2"
                                                onChange={(e) => {
                                                    setSearch(e.target.value);
                                                }} /> {' '}
                                            <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)' }} onClick={handleShows} >
                                                ADD FEEDBACK
                                            </Button>{' '}
                                            <Modal show={shows} onHide={handleCloses} animation={false}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title> <span class="divider2" /> &nbsp; <b>ADD NEW LICENSE</b></Modal.Title>

                                                </Modal.Header>
                                                <Form onSubmit={sendData}>

                                                    &nbsp;{error && <span className="error-message" style={{ color: "blue" }}>{error}</span>}

                                                    <div style={{ paddingTop: '2vh', paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
                                                        <div >
                                                            <Form.Label>Feedback Id :</Form.Label>
                                                            <Form.Control placeholder="feedback Id"
                                                                onChange={(e) => setfeedbackId(e.target.value)} />
                                                        </div>

                                                        <div >
                                                            <Form.Label>Agency : </Form.Label >
                                                            <Form.Control placeholder="agency"
                                                                onChange={(e) => setagency(e.target.value)} />
                                                        </div>

                                                        <div >
                                                            <Form.Label>Message:</Form.Label >
                                                            <Form.Control placeholder="message"
                                                                onChange={(e) => setmessage(e.target.value)} />
                                                        </div>
                                                        <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                                            <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)', color: 'white' }} variant="warning" type="submit" >ADD LICENSE</Button>
                                                            {' '}<Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                        </div >

                                                    </div>

                                                </Form>
                                            </Modal>
                                        </div>

                                    </div>

                                </div>

                                <Table striped bordered hover size="sm" variant="light" >

                                    <thead>

                                        <tr>
                                            <th>Feedback ID</th>
                                            <th>Agency name</th>
                                            <th>Message</th>


                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {feedback.filter(feedback => {

                                            if (search === "" && uemail === feedback.email) {
                                                return feedback
                                            }
                                            else if (feedback.feedbackId.toLowerCase().includes(search.toLowerCase()) && uemail === feedback.email) {
                                                return feedback
                                            }
                                            return null
                                        }).map((feedback) => {


                                                return (

                                                    <tr key={feedback._id}>

                                                        <td>{feedback.feedbackId}</td>
                                                        <td>{feedback.agency}</td>
                                                        <td>{feedback.message}</td>
                                                        <td>
                                                            <Button variant="outline-success" onClick={() => handleShow(feedback._id, feedback.feedbackId, feedback.agency, feedback.message)} ><FaPencilAlt /></Button>
                                                        </td>

                                                        <td>
                                                            <Button variant="outline-danger" onClick={() => onDelete(feedback._id)}><FaTrashAlt /></Button>
                                                        </td>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title> <span class="divider2" /> &nbsp; <b>UPDATE LICENSE ( :{email})</b></Modal.Title>

                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <Form >

                                                                    <div >
                                                                        <Form.Label>Feedback Id :</Form.Label>
                                                                        <Form.Control placeholder="feedback Id"
                                                                        value={feedbackId}
                                                                            onChange={(e) => setfeedbackId(e.target.value)} />
                                                                    </div>

                                                                    <div >
                                                                        <Form.Label>Agency : </Form.Label >
                                                                        <Form.Control placeholder="agency"
                                                                        value={agency}
                                                                            onChange={(e) => setagency(e.target.value)} />
                                                                    </div>

                                                                    <div >
                                                                        <Form.Label>Message:</Form.Label >
                                                                        <Form.Control placeholder="message"
                                                                        value={message}
                                                                            onChange={(e) => setmessage(e.target.value)} />
                                                                    </div>


                                                                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                                                        <Button variant="warning" type="submit" onClick={(e) => updateUser(e)}>Update</Button>
                                                                        {' '}<Button variant="secondary" onClick={handleClose}>
                                                                            Close
                                                                        </Button>
                                                                    </div >

                                                                </Form>
                                                            </Modal.Body>

                                                        </Modal>

                                                    </tr>
                                                );
                                            })}

                                    </tbody>

                                </Table >
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
