import React from "react";

import { Container, Nav, Navbar, Carousel, Row, Col, Card, Button } from 'react-bootstrap';


export default function Mainview() {



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

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tripsavvy.com/thmb/rAW8o1KrwiFBzXnpaeoPcKtod2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1094984028-b10df220e87d4bedb7b6ecf7c7e6ff40.jpg" alt='slide'
                        style={{ height: '75vh' }}
                    />

                    <Carousel.Caption>
                        <div style={{ paddingBottom: '2px' }}>
                            <h3>Welcome to SHAC SL </h3>
                            <h6>Join with us</h6>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hcicolombo.gov.in/images/RAS_1920_1.JPG" alt='slide'
                        style={{ height: '75vh' }}
                    />

                    <Carousel.Caption>
                        <div style={{ paddingBottom: '2px' }}>
                            <h3>Welcome to SHAC SL </h3>
                            <h6>Join with us</h6>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <br />
            <div style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '1vh' }}>
                <Row xs={1} md={4} className="g-4">
                    <div >
                        <Col>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Select A Country</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </div>
                    <div>
                        <Col>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Select a Job From Job Category</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </div>
                    <div>
                        <Col>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>See Needed Qulifications</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </div>
                    <div>
                        <Col>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Select an Agency</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                        </Col>
                    </div>

                </Row>

            </div>

            <br />
            <center>
               <a href="/useractivity"><Button >Visit to Select Country {">"} </Button></a> 
            </center>
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
