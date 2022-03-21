import React from 'react';
import {MDBIcon} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../css/Footer.css'

const Footer = () => {
    return (
        //TODO: Left off making custom styling to footer
        <>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Project<span>Serve</span></h3>

                    <p className="footer-company-name">Coding Connoisseurs &copy;2022</p>
                </div>

                <div className="footer-center">


                    <p className="footer-links">
                        <span>Useful Links</span>
                        <div>
                            <a href="#">Contact Us</a>
                        </div>
                        <div>
                            <a href="#">Help</a>
                        </div>
                        <div>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </p>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Us</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu
                        auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><MDBIcon fab icon='facebook-f' /></a>
                        <a href="#"><MDBIcon fab icon='twitter' /></a>
                        <a href="#"><MDBIcon fab icon='google' /></a>
                        <a href="#"><MDBIcon fab icon='instagram' /></a>

                    </div>

                </div>

            </footer>
        </>
    );
};

export default Footer;