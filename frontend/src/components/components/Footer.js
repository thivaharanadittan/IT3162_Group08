import React from "react";
import '../css/Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'
import {faYoutube,faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Follow us</h4>
                        <div class="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </>
    )
}