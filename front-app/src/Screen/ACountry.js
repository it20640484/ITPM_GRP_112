import React, { useState, useEffect } from "react";

import axios from "axios";
import { Nav, Navbar, Carousel, Row, Col, Container, Modal, Button, Form, Card, Table } from 'react-bootstrap';

import FileBase from "react-file-base64";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";



export default function ACountry() {

  const [shows, setShows] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = (_id,
    countryno, name
  ) => {
    setShow(true);
    setid(_id);
    setcountryno(countryno);
    setname(name);
  }

  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const [countryno, setcountryno] = useState("");
  const [name, setname] = useState("");
  const [fileEnc, setfileEncData] = useState("");
  const [error, setError] = useState("");

  const [country, setcountry] = useState([]);

  const [_id, setid] = useState([]);



  //Update 
  function update() {

    const newTime = {
      countryno,
      name,
    }

    axios.put("http://localhost:6500/api/country/country/" + _id, newTime).then(() => {
      setcountryno(countryno);
      setname(name);
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
    if (countryno.trim().length === 0 || name.trim().length === 0) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Please fill all the fields");
    }


    const newProducr = {
      countryno,
      name,
      fileEnc
    }

    axios.post("http://localhost:6500/api/country/country", newProducr).then(() => {
      ("Country added")

      setcountryno('');
      setname('');
      setfileEncData('');

      alert('Country Added')
      window.location.reload();

    }).catch((err) => {
      alert("error");
    })
  }



  //delete profile funtion
  function onDelete(_id) {

    console.log(_id);
    axios.delete("http://localhost:6500/api/country/country/" + _id).then((res) => {
      alert('Deleted Successfully');
      window.location.reload();
    }).catch((err) => {
      alert(err.message);
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
            setcountry(res.data.allcountry);



          })
          .catch((err) => {
            alert("Error occured!!! : " + err);
          });
      } catch (error) {
        alert("Error occured!!! : " + error);
      }
    };

    GetCountry();

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

      <Navbar  variant="dark" style={{ height: '5vh' ,backgroundColor:'#0047AB',color:'white' }}>
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


      <div style={{ paddingLeft: '5vh', paddingTop: '2vh' }}>



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
                      ADD COUNTRY
                    </Button>{' '}
                    <Modal show={shows} onHide={handleCloses} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title> <span class="divider2" /> &nbsp; <b>ADD NEW COUNTRY</b></Modal.Title>

                      </Modal.Header>
                      <Form onSubmit={sendData}>

                        &nbsp;{error && <span className="error-message" style={{ color: "blue" }}>{error}</span>}

                        <div style={{ paddingTop: '2vh', paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
                          <div >
                            <Form.Label>Country No :</Form.Label>
                            <Form.Control placeholder="country no"
                              onChange={(e) => setcountryno(e.target.value)} />
                          </div>

                          <div >
                            <Form.Label>Name : </Form.Label >
                            <Form.Control placeholder="name"
                              onChange={(e) => setname(e.target.value)} />
                          </div>

                          <Form.Group controlId="fileupload">
                            <Form.Label>Choose Image</Form.Label>
                            <h6>**Please do not exceed the amount of file size 25MB </h6>
                            <FileBase
                              type="file"
                              multiple={false}
                              onDone={({ base64 }) => {
                                setfileEncData(base64);
                              }}
                            />
                          </Form.Group>
                          <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                            <Button style={{ backgroundColor: 'rgba(44, 117, 207, 0.912)', border: 'rgba(44, 117, 207, 0.912)', color: 'white' }} variant="warning" type="submit" >ADD COUNTRY</Button>
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
                    <th>Country Number</th>
                    <th>Name</th>
                    <th>country Picture</th>


                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>

                  {country.filter(country => {

                    if (search === "") {
                      return country
                    }
                    else if (country.name.toLowerCase().includes(search.toLowerCase())) {
                      return country
                    }
                    return null
                  }).map((country) => {


                    return (

                      <tr key={country._id}>

                        <td>{country.countryno}</td>
                        <td>{country.name}</td>
                        <td><img src={country.countryPicture.imageSecURL} alt="country" style={{ width: '60px' }} ></img></td>
                        <td>
                          <Button variant="outline-success" onClick={() => handleShow(country._id, country.countryno, country.name)} ><FaPencilAlt /></Button>
                        </td>

                        <td>
                          <Button variant="outline-danger" onClick={() => onDelete(country._id)}><FaTrashAlt /></Button>
                        </td>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>&nbsp; <b>UPDATE Country </b></Modal.Title>

                          </Modal.Header>
                          <Modal.Body>
                            <Form >

                              <div >
                                <Form.Label>Country No :</Form.Label>
                                <Form.Control placeholder="Country No"
                                  value={countryno}
                                  onChange={(e) => setcountryno(e.target.value)} />
                              </div>

                              <div >
                                <Form.Label>Name : </Form.Label >
                                <Form.Control placeholder="name"
                                  value={name}
                                  onChange={(e) => setname(e.target.value)} />
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
