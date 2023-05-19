import React, { useState, useEffect } from "react";

import { Nav, Navbar, Carousel, Row, Col, Container, Modal, Button, Form, Card, Table } from 'react-bootstrap';

import axios from "axios";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";



export default function AQualification() {

    const [shows, setShows] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = (_id,
        jobcategory,
        jobNo,
        issuedate,
        expiredate,
        Period,
        Expirience,
        Salary,
        description
    ) => {
        setShow(true);
        setid(_id);
        setjobcategory(jobcategory);
        setjobNo(jobNo);
        setissuedate(issuedate);
        setexpiredate(expiredate);
        setPeriod(Period);
        setExpirience(Expirience);
        setSalary(Salary);
        setdescription(description);
    }

    const [search, setSearch] = useState("");
    const handleClose = () => setShow(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);
    const [error, setError] = useState("");

    const [jobNo, setjobNo] = useState("");
    const [jobcategory, setjobcategory] = useState("");

    const [issuedate, setissuedate] = useState("");
    const [expiredate, setexpiredate] = useState("");
    const [Period, setPeriod] = useState("");
    const [Expirience, setExpirience] = useState("");
    const [Salary, setSalary] = useState("");
    const [description, setdescription] = useState("");
    const [Qulification, setQulification] = useState([]);
    const [allJobModal, setallJobModal] = useState([]);

    const [_id, setid] = useState([]);


    //Update 
    function update() {

        const newTime = {
            jobcategory,
            jobNo,
            issuedate,
            expiredate,
            Period,
            Expirience,
            Salary,
            description
        }

        axios.put("http://localhost:6500/api/qulification/qulification/" + _id, newTime).then(() => {
            setjobNo(jobNo);
            setjobcategory(jobcategory);
            setissuedate(issuedate);
            setexpiredate(expiredate);
            setPeriod(Period);
            setExpirience(Expirience);
            setSalary(Salary);
            setdescription(description);
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

    //Add qulification
    function sendData(e) {
        e.preventDefault();
        if (jobcategory.trim().length === 0 || description.trim().length === 0 || Salary.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        }


        const newqq = {
            jobcategory,
            jobNo,
            issuedate,
            expiredate,
            Period,
            Expirience,
            Salary,
            description
        }

        axios.post("http://localhost:6500/api/qulification/qulification/", newqq).then(() => {
            ("Qulification added")

            setjobcategory('');
            setjobNo('');
            setissuedate('');
            setexpiredate('');
            setPeriod('');
            setExpirience('');
            setSalary('');
            setdescription('');
            alert('Qulification Added')
            window.location.reload();

        }).catch((err) => {
            alert("error" + err);

        })
    }



    //delete profile funtion
    function onDelete(_id) {

        console.log(_id);
        axios.delete("http://localhost:6500/api/qulification/qulification/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    useEffect(() => {


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
        GetAlljob();
        GetQulification();

    }, []);





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



            <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>


                <div style={{ paddingTop: '2vh', paddingLeft: '5vh', paddingRight: '5vh' }}>

                    <Card style={{ borderRadius: '18px', }}>
                        <div style={{ paddingTop: '3vh', paddingBottom: '2vh', paddingLeft: '5vh', paddingRight: '2vh' }}>
                            <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                                <div>
                                    <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                        <input type="text" placeholder="Search from ' Name ' " className="mr-2"
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }} /> {' '}
                                        <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)' }} onClick={handleShows} >
                                            ADD Qualification
                                        </Button>{' '}
                                        <Modal show={shows} onHide={handleCloses} animation={false}>
                                            <Modal.Header closeButton>
                                                <Modal.Title> <span class="divider2" /> &nbsp; <b>ADD NEW COUNTRY</b></Modal.Title>

                                            </Modal.Header>
                                            <Form onSubmit={sendData}>

                                                &nbsp;{error && <span className="error-message" style={{ color: "blue" }}>{error}</span>}

                                                <div style={{ paddingTop: '2vh', paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>

                                                    <div >
                                                        <Form.Label>Job Category : </Form.Label >
                                                        <Form.Select aria-label="Default select example"
                                                            onChange={(e) => setjobcategory(e.target.value)} >
                                                            {allJobModal.map((allJobModal) => {
                                                                return (
                                                                    <option Key={allJobModal._id} value={allJobModal.Categoryname}>{allJobModal.Categoryname}</option>

                                                                )
                                                            })}

                                                        </Form.Select>

                                                    </div>



                                                    <div >
                                                        <Form.Label>Job No : </Form.Label >
                                                        <Form.Control placeholder="job No"
                                                            onChange={(e) => setjobNo(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Issue Date : </Form.Label >
                                                        <Form.Control placeholder="Issue Date" type="date"
                                                            onChange={(e) => setissuedate(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Expire Date : </Form.Label >
                                                        <Form.Control placeholder="Expire Date" type="date"
                                                            onChange={(e) => setexpiredate(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Period : </Form.Label >
                                                        <Form.Control placeholder="Period"
                                                            onChange={(e) => setPeriod(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Expirience : </Form.Label >
                                                        <Form.Control placeholder="Expirience"
                                                            onChange={(e) => setExpirience(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Salary : </Form.Label >
                                                        <Form.Control placeholder="Salary"
                                                            onChange={(e) => setSalary(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Description : </Form.Label >
                                                        <Form.Control placeholder="Description"
                                                            onChange={(e) => setdescription(e.target.value)} />
                                                    </div>

                                                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                                        <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)', color: 'white' }} variant="warning" type="submit" >ADD Qualification</Button>
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
                                        <th>Job Category</th>
                                        <th>Job No</th>
                                        <th>Issue Date</th>
                                        <th>Expire Date</th>
                                        <th>Period</th>
                                        <th>Expirience</th>
                                        <th>Salary</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {Qulification.filter(Qulification => {

                                        if (search === "") {
                                            return Qulification
                                        }
                                        else if (Qulification.jobcategory.toLowerCase().includes(search.toLowerCase())) {
                                            return Qulification
                                        }
                                        return null
                                    }).map((Qulification) => {


                                        return (

                                            <tr key={Qulification._id}>

                                                <td>{Qulification.jobcategory}</td>
                                                <td>{Qulification.jobNo}</td>
                                                <td>{Qulification.issuedate}</td>
                                                <td>{Qulification.expiredate}</td>
                                                <td>{Qulification.Period}</td>
                                                <td>{Qulification.Expirience}</td>
                                                <td>{Qulification.Salary}</td>
                                                <td>{Qulification.description}</td>

                                                <td>
                                                    <Button variant="outline-success" onClick={() => handleShow(Qulification._id, Qulification.jobcategory, Qulification.jobNo, Qulification.issuedate, Qulification.expiredate, Qulification.Period, Qulification.Expirience, Qulification.Salary, Qulification.description)} ><FaPencilAlt /></Button>
                                                </td>

                                                <td>
                                                    <Button variant="outline-danger" onClick={() => onDelete(Qulification._id)}><FaTrashAlt /></Button>
                                                </td>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>&nbsp; <b>UPDATE Qulification Data </b></Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Form >

                                                            <div >
                                                                <Form.Label>Job Category : </Form.Label >
                                                                <Form.Select aria-label="Default select example"
                                                                    onChange={(e) => setjobcategory(e.target.value)} >
                                                                    {allJobModal.map((allJobModal) => {
                                                                        return (
                                                                            <option Key={allJobModal._id} value={allJobModal.Categoryname}>{allJobModal.Categoryname}</option>

                                                                        )
                                                                    })}

                                                                </Form.Select>

                                                            </div>

                                                            <div >
                                                                <Form.Label>Job No : </Form.Label >
                                                                <Form.Control placeholder="job No" value={jobNo}
                                                                    onChange={(e) => setjobNo(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Issue Date : </Form.Label >
                                                                <Form.Control placeholder="Issue Date" type="date" value={issuedate}
                                                                    onChange={(e) => setissuedate(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Expire Date : </Form.Label >
                                                                <Form.Control placeholder="Expire Date" type="date" value={expiredate}
                                                                    onChange={(e) => setexpiredate(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Period : </Form.Label >
                                                                <Form.Control placeholder="Period" value={Period}
                                                                    onChange={(e) => setPeriod(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Expirience : </Form.Label >
                                                                <Form.Control placeholder="Expirience" value={Expirience}
                                                                    onChange={(e) => setExpirience(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Salary : </Form.Label >
                                                                <Form.Control placeholder="Salary" value={Salary}
                                                                    onChange={(e) => setSalary(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Description : </Form.Label >
                                                                <Form.Control placeholder="Description" value={description}
                                                                    onChange={(e) => setdescription(e.target.value)} />
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
            </div>
            <br/>
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
