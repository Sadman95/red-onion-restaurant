import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Row className='bg-dark text-secondary p-4 mt-5'>
            <Col md={12}>
                <Row className='mb-5'>
                    <Col md={8}><img className='w-25' src="https://i.ibb.co/gypgG5T/logo2.png" alt="" /></Col>
                    <Col md={2}>
                        <ul className='footer-list'>
                            <li><Link className='text-decoration-none text-light'>About online food</Link></li>
                            <li><Link className='text-decoration-none text-light'>Read our blog</Link></li>
                            <li><Link className='text-decoration-none text-light'>Sing up to deliver</Link></li>
                            <li><Link className='text-decoration-none text-light'>Add your restaurant</Link></li>                     
                        </ul>
                    </Col>
                    <Col md={2}>
                        <ul className='footer-list'>
                            <li><Link className='text-decoration-none text-light'>Get help</Link></li>
                            <li><Link className='text-decoration-none text-light'>Read FAQs</Link></li>
                            <li><Link className='text-decoration-none text-light'>View all cities</Link></li>
                            <li><Link className='text-decoration-none text-light'>Restaurants near me</Link></li>                     
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}><small>copyright @2021 online food</small></Col>
                    <Col md={1}><Link className='text-decoration-none text-light'><small>Privacy policy</small></Link></Col>
                    <Col md={1}><Link className='text-decoration-none text-light'><small>Terms of use</small></Link></Col>
                    <Col md={1}><Link className='text-decoration-none text-light'><small>Pricing</small></Link></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Footer;