import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Carousel} from 'react-bootstrap';

function Carasoul() {

    return (

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

    )
}

export default Carasoul;