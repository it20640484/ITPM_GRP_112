import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to="/" className="nav-link">JOB LANKA</Link></Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#countries">Vacancies</Nav.Link>
                    <Nav.Link href="#categories">Emergancy Vacancies </Nav.Link>
                    <Nav.Link href="#pricing">Vacancies</Nav.Link>
                    <Nav.Link href="/viewQuestion">Q&A</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header;