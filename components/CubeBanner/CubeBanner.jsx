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
                <h1>Proficient with <br/> Blockchain Dev</h1>
                <p>As one of the first Austrian companies, we have been dealing with cryptocurrencies since 2011. Our intensive research and the resulting gain in knowledge enable a serious and thus sustainable view of future-oriented technologies, especially blockchain technology. We therefore see ourselves as a competent partner when it comes to the questions of the future of your company. As a full-service provider, we offer tailor-made SaaS, PaaS and individual solutions.</p>
            </div>
            <div className="imageSection">
                <img src="/assets/Technologies.png" alt="Technologies"/>
            </div>

            <svg className="curvy" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" preserveAspectRatio="none">
                <path d="M0,0 L200,0 V2 L198,2 C192,3 197,27 179,25 L23,25 C3,25 8,3 2,2 L0,2 Z" fill=" #445819" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V30 H0 Z" fill="#fdfdfd" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke=" #445819" strokeWidth="1" fill="none" />
            </svg>
        </div>
    )
}


