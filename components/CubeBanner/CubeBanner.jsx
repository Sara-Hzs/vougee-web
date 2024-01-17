import React from "react";

export const CubeBanner = () => {
    return (

        <div className="CubeBanner" id="Technology-section">

            <div className="verticalBar">
                <div className="segment segment1"></div>
                <div className="segment segment2"></div>
                <div className="segment segment3"></div>
                <div className="segment segment4"></div>
                <div className="segment segment5"></div>
                <span className="barText">VOUGEE</span>
                <div className="verticalLine"></div>
            </div>
            <div className="verticalBarRight">
                <div className="segment segment1"></div>
                <div className="segment segment2"></div>
                <div className="segment segment3"></div>
                <div className="segment segment4"></div>
                <div className="segment segment5"></div>
                <span className="barText">ADVANCED BLOCKCHAIN TECHNOLOGIES</span>
                <div className="verticalLine"></div>
            </div>
            <div className="infoSection">
                <button className="Btn">TECHNOLOGY</button>
                <h1>Proficient with Blockchain Dev - Mastering the Tools of the Trade</h1>
                <p>Becoming proficient with blockchain development means mastering an ever-expanding toolkit of
                    technologies. Whether it's creating smart contracts, building user interfaces, or connecting DApps
                    to real-world data, the world of blockchain development is full of exciting challenges and
                    opportunities.
                    In the rapidly evolving world of blockchain technology, staying proficient with blockchain
                    development is the key to unlocking a world of innovation and opportunity. For those in the know,
                    blockchain offers far more than just cryptocurrencies; it's a transformative force reshaping
                    industries, finance, supply chains, and more. To be at the forefront of this revolution, we daily
                    must
                    master an array of blockchain-relevant technologies.</p> <br/>
                <h2>Strong Focus on R&D - Forging the Spearhead of Blockchain Innovation</h2><br/>
                <p>At the heart of our blockchain development prowess lies a deep-rooted commitment to Research and
                    Development (R&D). This focus is pivotal in navigating the complex and rapidly evolving blockchain
                    landscape. Our R&D efforts are geared towards exploring the cutting edge of blockchain technology,
                    where we delve into the latest advancements and seek innovative solutions to current and emerging
                    challenges.</p>
            </div>
            <div className="imageSection">
                <img src="/assets/Technologies.png" alt="Technologies"/>
            </div>

            <svg className="curvy" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="none">
                <path d="M0,0 L200,0 V2 L198,2 C192,3 197,27 179,25 L23,25 C3,25 8,3 2,2 L0,2 Z" fill="#445918" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V30 H0 Z" fill="#fdfdfd" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#445918" strokeWidth="1" fill="none" />
            </svg>
        </div>
    )
}


