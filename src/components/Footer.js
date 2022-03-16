import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css'

const Footer = () => {
    return (
        <MDBFooter className="footer-styling">
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>About Us
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>



                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3'>
                            <h6 className='text-uppercase fw-bold mb-4'>Connect with Us</h6>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright: Coding Connoisseurs
            </div>
        </MDBFooter>
    );
};

export default Footer;