import React, { useState } from 'react';
import Link from 'next/link';

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <header className={`mobile-header ${isOpen ? 'menu-open' : ''}`}>
            <Link href="/">
                <div className="logo-container">
                    <img src='/assets/logo.png' alt="Company Logo" className="logo"/>
                </div>
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? '×' : '☰'}
            </button>

            <nav className={`mobile-nav-container ${isOpen ? 'open' : ''}`} onClick={() => {
                setIsOpen(false)
            }}>
                <ul>
                    <li><a href="/#who-we-are-section">Who we are</a></li>
                    <li><a href="/#Technology-section">Technologies</a></li>
                    <li><a href="/#services-section">Services</a></li>
                    <li><Link href="/jobs">Careers</Link></li>
                </ul>
            </nav>
        </header>
    );
};