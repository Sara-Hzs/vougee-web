import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export const Footer = () => {



    return (
        <div className="footer">
            {/* Left Column */}
            <div className="column-left">
                <div className="footer-logo">
                    <img src="/assets/logo.png" alt="VouGee Logo"/>
                </div>
                <h2>We would love to hear from you!</h2>
                <p>Are you ready for your blockchain project? Yes? Great!<br/>We start with you in your future.</p>
                <a href="mailto:office@vougee.gmbh" className="oval-button">Become a Client</a>

            </div>


            {/* Middle Column */}
            <div className="column-middle">

                <div className="footer-contact" id="contact-section">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone}/> +43 316 332211 0</li>
                        <li><FontAwesomeIcon icon={faEnvelope}/> office@vougee.gmbh</li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt}/>  Körösistrasse  21/5, 8010 Graz, Austria</li>
                    </ul>
                </div>
            </div>

            {/* Right Column
            <div className="column-right">
                <div className="footer-social">
                    <h3>FOLLOW US</h3>
                    <div>
                        <div className="icon-circle"><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className="icon-circle"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                        <div className="icon-circle"><FontAwesomeIcon icon={faTwitter} /></div>
                    </div>
                </div>
            </div>*/}
            <div className="footer-rights">
                &copy; VouGee 2024. All rights reserved.
                <Link href="/#hero-banner">
                    <a className="footer-link">Home</a>
                </Link>
                <Link href="/privacypolicy">
                    <a className="footer-link">AGB(DE)</a>
                </Link>
                <Link href="/privacypolicy">
                    <a className="footer-link">Privacy Policy</a>
                </Link>
            </div>


        </div>
    )
}


