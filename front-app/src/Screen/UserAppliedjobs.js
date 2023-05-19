import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Navbar, Carousel, Row, Col, Container, Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";


export default function UserAppliedjobs() {


    const [userjob, setuserjob] = useState([]);
    //delete funtion
    function onDelete(_id) {

        console.log(_id);
        axios.delete("http://localhost:6500/api/userjob/userjob/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }
    useEffect(() => {


        const Getuserjob = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/userjob/userjob/",

                    )

                    .then((res) => {
                        console.log(res.data.allJobModal);
                        setuserjob(res.data.allJobModal);



                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        };

        Getuserjob();

    }, []);

    return (
        <div  >
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://eskipaper.com/images/light-blue-wallpaper-22.jpg" alt='slide'
                        style={{ height: '20vh' }}
                    />

                    <Carousel.Caption>
                        <div style={{ paddingBottom: '2px' }}>
                            <img src='https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png' alt='Logo' style={{ width: '9%', float: 'left' }} />

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Navbar bg="primary" variant="dark" style={{ height: '5vh' }}>
                <Container>
                    <div style={{ paddingLeft: '5vh' }}>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/feedback">Emagency vacancy</Nav.Link>
                            <Nav.Link href="/uprofile">News</Nav.Link>
                            <Nav.Link href="/uprofile">About Us</Nav.Link>
                            <Nav.Link href="/uprofile">Q and A</Nav.Link>
                            <Nav.Link href="/uprofile">Contact</Nav.Link>

                        </Nav>
                    </div>

                </Container>
            </Navbar>
            <br />
            <div style={{ paddingLeft: '2vh' }}>
                <a href="/useractivity"><Button>Back to Apply {'<'}</Button></a>
            </div>
            <br />
            <div style={{paddingLeft:'5vh',paddingRight:'5vh',paddingBottom:'25vh'}}>
                <Table striped bordered hover size="sm" variant="light" >

                    <thead>

                        <tr>
                            <th>Country</th>
                            <th>Job name</th>
                            <th>Status</th>


                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userjob.map((userjob) => {


                            return (

                                <tr key={userjob._id}>

                                    <td>{userjob.country}</td>
                                    <td>{userjob.job}</td>
                                    <td>{userjob.status}</td>


                                    <td>
                                        <Button variant="outline-danger" onClick={() => onDelete(userjob._id)}><FaTrashAlt /></Button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>

                </Table >
            </div>

            <br />



            <Navbar bg="primary" variant="dark" style={{ height: '5vh' }}>
                <Container>
                    <div style={{ paddingLeft: '5vh' }}>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/feedback">Emagency vacancy</Nav.Link>
                            <Nav.Link href="/uprofile">News</Nav.Link>
                            <Nav.Link href="/uprofile">About Us</Nav.Link>
                            <Nav.Link href="/uprofile">Q and A</Nav.Link>
                            <Nav.Link href="/uprofile">Contact</Nav.Link>

                        </Nav>
                    </div>

                </Container>
            </Navbar>

            <div style={{ height: '16vh', backgroundColor: 'blue', color: 'white' }}>
                <div>
                    <br />
                    <center>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col><img src="https://res.cloudinary.com/iplus/image/upload/v1681709746/Facebook_f_logo__2021_.svg_sksier.png" alt="fb" style={{ width: '30px' }} /></Col>
                            <Col><img src="https://res.cloudinary.com/iplus/image/upload/v1681709746/pngtree-twitter-social-media-round-icon-png-image_6315985_eypscl.png" alt="twitter" style={{ width: '30px' }} /></Col>
                            <Col><img src="https://res.cloudinary.com/iplus/image/upload/v1681709746/youtube-logo-icone-bleue_y7cad0.png" alt="Youtube" style={{ width: '30px' }} /></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </center>
                    <br />
                </div>

                <center>
                    <h6>@Copyright2023 -SHAC SL</h6>
                </center>
            </div>

        </div>
    );
}
