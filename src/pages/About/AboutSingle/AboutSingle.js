import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const AboutSingle = ({about}) => {

    const {title_icon,img_url, card_title, card_desc} = about;

    return (
        <Col md={4} sm={12}>
            <div>
                <img className='img-fluid' src={img_url} alt="" />
            </div>
            <div className='d-flex justify-content-center mt-4 ms-3 gap-3'>
            <FontAwesomeIcon className='mt-1 bg-light fs-5 text-danger' icon={title_icon}></FontAwesomeIcon>
            <div>
            <h5>{card_title}</h5>
            <p className='text-secondary'>{card_desc}</p>
            <div>
            <Link className='text-decoration-none' to='/more'>See More</Link>&nbsp;
            <FontAwesomeIcon className='text-success' icon={faArrowCircleRight}></FontAwesomeIcon>
            </div>
            </div>
            </div>
        </Col>
    );
};

export default AboutSingle;