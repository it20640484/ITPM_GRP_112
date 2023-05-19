import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Navbar, Carousel, Row, Col, Container, Stack, Tabs, Tab, Button, Card, Form } from 'react-bootstrap';


export default function UserActivity() {
    const [currentTab, setCurrentTab] = React.useState(0);
    const [job, setjob] = useState('');

    const [country, setcountry] = useState('');

    const [allcountry, setallcountry] = useState([]);
    const [allJobModal, setallJobModal] = useState([]);
    const [Qulification, setQulification] = useState([]);
    const [status, setstatus] = useState('Applied');

    const selectcountry = (name) => {
        setcountry(name)
        setCurrentTab((prev) => prev + 1)
    };
    const selectjob = () => {
        setCurrentTab((prev) => prev + 1)
    };
    const confirm = () => {
        setstatus('Applied');
        sendData();
    };

  //Add 
  function sendData() {



    const newqq = {
        country,
        job,
        status
    }

    axios.post("http://localhost:6500/api/userjob/userjob/", newqq).then(() => {
        ("Qulification added")

        setcountry('');
        setjob('');
        setstatus('');
       
        alert('Please Contact to Agency..! ')
        window.location="/applied"

    }).catch((err) => {
        alert("error" + err);

    })
}




    useEffect(() => {


        const GetCountry = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/country/country",

                    )

                    .then((res) => {
                        console.log(res.data.allcountry);
                        setallcountry(res.data.allcountry);



                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        };
        const GetAlljob = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/job/job",

                    )

                    .then((res) => {
                        console.log(res.data.allJobModal);
                        setallJobModal(res.data.allJobModal);



                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        };
        const GetQulification = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/qulification/qulification/",

                    )

                    .then((res) => {
                        console.log(res.data.allQulification);
                        setQulification(res.data.allQulification);



                    })
                    .catch((err) => {
                        alert("Error occured!!! : " + err);
                    });
            } catch (error) {
                alert("Error occured!!! : " + error);
            }
        };
        GetCountry();
        GetAlljob();
        GetQulification();
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
            <Row>
                <Col>
                    <Tabs activeKey={currentTab} id="controlled-tab-example" >
                        <Tab eventKey={0} title="Select Country" disabled={currentTab !== 0}>
                            <br />
                            <div style={{ paddingLeft: '2vh', paddingRight: '2vh' }}>
                                <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
                                    <Card border="primary">
                                        <div style={{ paddingLeft: '1vh', paddingRight: '1vh', paddingTop: '2px', paddingBottom: '2px', color: 'blue' }}>
                                            <h2>Select your Country</h2>
                                            <h6>Readily Available Vacancies</h6>
                                        </div>
                                    </Card>
                                </div>
                                <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '2vh', paddingBottom: '2vh' }}>
                                    <Row xs={1} md={3} className="g-4">
                                        {allcountry.map((allcountry) => {
                                            return (
                                                <Col>
                                                    <Card onClick={() => selectcountry(allcountry.name)}>
                                                        <Card.Body>
                                                            <Row>
                                                                <Col>
                                                                    <img src={allcountry.countryPicture.imageSecURL} alt="country" style={{ width: '20vh' }} />
                                                                </Col>
                                                                <Col>
                                                                    <br />
                                                                    <h4>{allcountry.name}</h4>
                                                                    <br />
                                                                </Col>
                                                            </Row>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                        }
                                        )}
                                    </Row>
                                </div>

                            </div>
                        </Tab>
                        <Tab eventKey={1} title="Select Job Category" disabled={currentTab !== 1}>
                            <br />
                            <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
                                <Card border="primary">
                                    <div style={{ paddingLeft: '1vh', paddingRight: '1vh', paddingTop: '2px', paddingBottom: '2px', color: 'blue' }}>
                                        <h2>Select your Job Category</h2>
                                        <h6>Readily Available Vacancies</h6>
                                    </div>
                                </Card>
                                <br />
                            </div>
                            <div style={{ paddingLeft: '5vh' }}>
                                <h3>{country}</h3>

                                <div >
                                    <Form >

                                        <Form.Label>Job category : </Form.Label >
                                        <Form.Select aria-label="Default select example"
                                            onChange={(e) => setjob(e.target.value)}
                                        >
                                            <option value='select' >select</option>

                                            {allJobModal.filter(allJobModal => {

                                                if (allJobModal.Country === country) {
                                                    return allJobModal
                                                }

                                                return null
                                            }).map((allJobModal) => {
                                                return (
                                                    <option Key={allJobModal._id} value={allJobModal.Categoryname} >{allJobModal.Categoryname}</option>

                                                )
                                            })}

                                        </Form.Select>
                                        <br />
                                        <Button variant="warning" onClick={selectjob}>Done</Button>

                                    </Form>
                                </div>

                            </div>

                            <br />

                        </Tab>
                        <Tab eventKey={2} title="Qulifications" disabled={currentTab !== 2}>
                            <br />
                            <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
                                <center><h3 style={{ color: 'red' }}>Job Category :{job}</h3></center>
                                <center><h6>Do You Have theese qulifications</h6></center>

                                {Qulification.filter(Qulification => {

                                    if (Qulification.jobcategory === job) {
                                        return Qulification
                                    }

                                    return null
                                }).map((Qulification) => {
                                    return (
                                        <div Key={Qulification._id}>
                                            <div>
                                                <Card >
                                                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '5px' }}>
                                                        <h6>Job Order Details :</h6>
                                                        <div style={{ paddingLeft: '15vh', paddingRight: '5vh', paddingTop: '2px' }}>
                                                            <p>Job No : {Qulification.jobNo}</p>
                                                            <p>Issue Date: {Qulification.issuedate}</p>
                                                            <p>Expire Date: {Qulification.expiredate}</p>

                                                        </div>
                                                        <hr />
                                                        <h6>Job Category Details :</h6>
                                                        <div style={{ paddingLeft: '15vh', paddingRight: '5vh', paddingTop: '2px' }}>
                                                            <p>Contract Period : {Qulification.Period}</p>
                                                            <p>Salary : {Qulification.Salary}</p>
                                                            <p>Expirience : {Qulification.Expirience}</p>
                                                            <p>Description : {Qulification.description}</p>

                                                        </div>
                                                    </div>

                                                </Card>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Approve" disabled={currentTab !== 3}>
                            <br />
                            <div style={{ paddingLeft: '5vh', paddingRight: '5vh' }}>
                                <center><h3 style={{ color: 'red' }}>Job Category :{job}</h3></center>
                                <center><h6>Do You Have theese qulifications</h6></center>


                                <Card >
                                    <div style={{ paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '5px' }}>
                                        <h6>Terms & Conditions :</h6>
                                        <div style={{ paddingLeft: '15vh', paddingRight: '5vh', paddingTop: '2px' }}>
                                            <p>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service.
                                                ere are a few examples of how this agreement can help you:
                                            </p>
                                            <p>Food : free</p>
                                            <p>Acomadation : free</p>
                                            <p>Air Ticket : Return</p>
                                        </div>
                                        <hr />
                                        <center>
                                            <Button onClick={confirm}>Yes, I have Conditions</Button>
                                        </center>
                                        <br/>
                                    </div>

                                </Card>

                            </div>                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <div style={{ paddingLeft: '2vh', paddingRight: '2vh' }}>
                <Stack gap={2} direction="horizontal" className="mt-3">
                    <Button
                        className="success"
                        disabled={currentTab === 0}
                        onClick={() => setCurrentTab((prev) => prev - 1)}
                    >
                        Prev
                    </Button>
                    <Button
                        className="success"
                        disabled={currentTab === 3}
                        onClick={() => setCurrentTab((prev) => prev + 1)}
                    >
                        Next
                    </Button>
                    <Button
                        className="success"
                        disabled={currentTab === 4}
                        onClick={() => setCurrentTab(0)}
                    >
                        {"<"} Back To Select Country
                    </Button>
                </Stack>
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
