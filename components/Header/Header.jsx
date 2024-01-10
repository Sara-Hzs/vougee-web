import React from "react";
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="header" >
            <div className="logo-container">
                <Link href="/">
                    <a>
                        <img src='/assets/logo.png' alt="Company Logo" className="logo" />
                    </a>
                </Link>


            </div>
            <nav className="nav-container">
                <ul>
                    <li><a href="/#who-we-are-section">Who we are</a></li>
                    <li><a href="/#Technology-section">Technologies</a></li>
                    <li><a href="/#services-section">Services</a></li>
                    <li><Link href="/jobs">Careers</Link></li>
                </ul>
            </nav>
            <div className="btn-container">
                <button className="contact-btn" onClick={() => {
                    document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'});
                }}>
                    Contact Us
                </button>
            </div>
        </header>
    )
}