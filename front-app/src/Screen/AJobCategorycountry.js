import React, { useState, useEffect } from "react";


import axios from "axios";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Nav, Navbar, Carousel, Row, Col, Container, Modal, Button, Form, Card, Table } from 'react-bootstrap';



export default function AJobCategorycountry() {

    const [shows, setShows] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = (_id,
        Id,
        Country,
        Categoryname
    ) => {
        setShow(true);
        setid(_id);
        setId(Id);
        setCategoryname(Categoryname);
        setcountry(Country)
    }

    const [search, setSearch] = useState("");
    const handleClose = () => setShow(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const [Id, setId] = useState("");
    const [Categoryname, setCategoryname] = useState("");
    const [Country, setcountry] = useState("");
    const [allJobModal, setallJobModal] = useState([]);
    const [cc, setcc] = useState([]);


    const [error, setError] = useState("");



    const [_id, setid] = useState([]);



    //Update 
    function update() {

        const newTime = {
            Id,
            Country,
            Categoryname
        }

        axios.put("http://localhost:6500/api/job/job/" + _id, newTime).then(() => {
            setId(Id);
            setCategoryname(Categoryname);
            setcountry(Country)
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

    //Add country
    function sendData(e) {
        e.preventDefault();
        if (Id.trim().length === 0 || Categoryname.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        }


        const newProducr = {
            Id,
            Country,
            Categoryname
        }

        axios.post("http://localhost:6500/api/job/job", newProducr).then(() => {
            ("Job Category added")

            setId('');
            setCategoryname('');
            setcountry('')

            alert('Job Category Added')
            window.location.reload();

        }).catch((err) => {
            alert("error");
        })
    }



    //delete  funtion
    function onDelete(_id) {

        console.log(_id);
        axios.delete("http://localhost:6500/api/job/job/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    useEffect(() => {


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
        const GetCountry = async () => {

            try {
                await axios
                    .get(
                        "http://localhost:6500/api/country/country",

                    )

                    .then((res) => {
                        console.log(res.data.allcountry);
                        setcc(res.data.allcountry);



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
                                        <input type="text" placeholder="Search 'Category name' " className="mr-2"
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }} /> {' '}
                                        <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)' }} onClick={handleShows} >
                                            ADD Job Category
                                        </Button>{' '}
                                        <Modal show={shows} onHide={handleCloses} animation={false}>
                                            <Modal.Header closeButton>
                                                <Modal.Title> <span class="divider2" /> &nbsp; <b>ADD NEW COUNTRY</b></Modal.Title>

                                            </Modal.Header>
                                            <Form onSubmit={sendData}>

                                                &nbsp;{error && <span className="error-message" style={{ color: "blue" }}>{error}</span>}

                                                <div style={{ paddingTop: '2vh', paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
                                                    <div >
                                                        <Form.Label>Id :</Form.Label>
                                                        <Form.Control placeholder="Id"
                                                            onChange={(e) => setId(e.target.value)} />
                                                    </div>

                                                    <div >
                                                        <Form.Label>Category Name : </Form.Label >
                                                        <Form.Control placeholder="Category Name"
                                                            onChange={(e) => setCategoryname(e.target.value)} />
                                                    </div>


                                                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                                        <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)', color: 'white' }} variant="warning" type="submit" >ADD Job Category</Button>
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
                                        <th>Id</th>
                                        <th>Country</th>
                                        <th>Category Name</th>


                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {allJobModal.filter(allJobModal => {

                                        if (allJobModal === "") {
                                            return allJobModal
                                        }
                                        else if (allJobModal.Categoryname.toLowerCase().includes(search.toLowerCase())) {
                                            return allJobModal
                                        }
                                        return null
                                    }).map((allJobModal) => {


                                        return (

                                            <tr key={allJobModal._id}>

                                                <td>{allJobModal.Id}</td>
                                                <td>{allJobModal.Country}</td>
                                                <td>{allJobModal.Categoryname}</td>
                                                <td>
                                                    <Button variant="outline-success" onClick={() => handleShow(allJobModal._id, allJobModal.Id, allJobModal.Country, allJobModal.Categoryname)} ><FaPencilAlt /></Button>
                                                </td>

                                                <td>
                                                    <Button variant="outline-danger" onClick={() => onDelete(allJobModal._id)}><FaTrashAlt /></Button>
                                                </td>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>&nbsp; <b>Asign Country </b></Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Form >

                                                            <div >
                                                                <Form.Label>Id :</Form.Label>
                                                                <Form.Control placeholder="Id"
                                                                    value={Id}
                                                                    onChange={(e) => setId(e.target.value)} />
                                                            </div>

                                                            <div >
                                                                <Form.Label>Category Name : </Form.Label >
                                                                <Form.Control placeholder="Category name"
                                                                    value={Categoryname}
                                                                    onChange={(e) => setCategoryname(e.target.value)} />
                                                            </div>




                                                            <div >
                                                                <Form.Label>Country : </Form.Label >
                                                                <Form.Select aria-label="Default select example"
                                                                    onChange={(e) => setcountry(e.target.value)} >
                                                                    <option value='Select Country'>Select Country</option>

                                                                    {cc.map((cc) => {
                                                                        return (
                                                                            <option Key={cc._id} value={cc.name}>{cc.name}</option>

                                                                        )
                                                                    })}

                                                                </Form.Select>

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
