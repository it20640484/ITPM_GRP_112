import React from "react";
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
<<<<<<< Updated upstream
//import Button from 'react-bootstrap/Button';
=======
>>>>>>> Stashed changes
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    
    return (
<<<<<<< Updated upstream
    
        <Navbar bg="primary" variant="dark">
=======
        <Navbar  bg="primary" variant="dark">
>>>>>>> Stashed changes
            <Container>
            <Navbar.Brand href="#home"><Link to="/" className="nav-link">JOB LANKA</Link></Navbar.Brand>
            
            <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
<<<<<<< Updated upstream
            <Nav.Link href="#countries">Countries</Nav.Link>
            <Nav.Link href="#categories">Job Categories</Nav.Link>
            <Nav.Link href="#pricing">Vacancies</Nav.Link>
            <Nav.Link href="/agencyViewAdvertisement">Emergency Vacancies</Nav.Link>
            </Nav> 
            </Container>
        </Navbar>
        
=======
            <Nav.Link href="#countries">Vacancies</Nav.Link>
            <Nav.Link href="#categories">Emergancy Vacancies </Nav.Link>
            <Nav.Link href="#pricing">Vacancies</Nav.Link>
            <Nav.Link href="/viewQuestion">Q&A</Nav.Link>
            </Nav> 
            </Container> 
        </Navbar>
>>>>>>> Stashed changes
    )
}

export default Header ;