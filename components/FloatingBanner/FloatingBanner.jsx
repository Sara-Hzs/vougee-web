import React from "react";

export const FloatingBanner = () => {
    return (
        <div className="FloatingBanner"  id="who-we-are-section">

            <div className="infoContainer">
                <img src="/assets/WebDevelopment.png" alt="Web Development"/>
                <div>
                    <button className="infoButton">WHO WE ARE</button>
                    <div className="verticalLine"></div>
                    <h3>Austria’s Crypto & <br/>Blockchain Experts</h3>
                    <p>As one of the first Austrian companies, we have been dealing with cryptocurrencies since 2011.
                        Our intensive research and the  resulting gain in knowledge enable a serious and thus sustainable
                        view of future-oriented technologies, especially blockchain technology. We therefore see ourselves
                        as a competent partner when it comes to the questions of the future of your company. As a  full-service provider,
                        we offer tailor-made SaaS, PaaS and individual solutions.</p>
                </div>
            </div>
            <svg className="curvyLine" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 75" preserveAspectRatio="none">
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V100 H0 Z" fill="#363f24" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#363f24" strokeWidth="1" fill="none" />
            </svg>
        </div>
    )
}
