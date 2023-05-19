import React from "react";

import { Nav, Navbar, Carousel, Row, Col, Container, Button, } from 'react-bootstrap';





export default function AdminHome() {



    return (
        <div  >
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperset.com/w/full/a/a/d/60270.jpg" alt='slide'
                        style={{ height: '20vh' }}
                    />

                    <Carousel.Caption>
                        <div style={{ paddingBottom: '2px' }}>
                            <img src='https://res.cloudinary.com/iplus/image/upload/v1680665738/shac_Logo_ac3enu.png' alt='Logo' style={{ width: '9%', float: 'left' }} />

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Navbar variant="dark" style={{ height: '5vh', backgroundColor: '#0047AB', color: 'white' }}>
                <Container>
                    <div style={{ paddingLeft: '5vh' }}>

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/acountry">Country Management</Nav.Link>
                            <Nav.Link href="/ajobcountry">Job Category Management</Nav.Link>
                            <Nav.Link href="/aquali">Qulification Management</Nav.Link>

                        </Nav>
                    </div>

                </Container>
            </Navbar>
            <br />


            <center>
                <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>

                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>
                        <a href="/acountry"><Button style={{paddingTop:'3vh',paddingBottom:'3vh',paddingLeft:'30vh',paddingRight:'30vh',backgroundColor:'darkblue'}}>Country Management</Button></a>
                    </div>
                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>
                        <a href="/ajobcountry"><Button style={{paddingTop:'3vh',paddingBottom:'3vh',paddingLeft:'27vh',paddingRight:'27vh',backgroundColor:'darkblue'}}>Job Category Management</Button></a>
                    </div>
                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>
                        <a href="/aquali"><Button style={{paddingTop:'3vh',paddingBottom:'3vh',paddingLeft:'28vh',paddingRight:'28vh',backgroundColor:'darkblue'}}>Qulification Management</Button></a>
                    </div>
                </div>
            </center>

            <br />
            <div style={{ height: '26vh', backgroundColor: '#000080', color: 'white' }}>
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
