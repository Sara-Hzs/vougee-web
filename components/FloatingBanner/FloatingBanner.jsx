import React from "react";

export const FloatingBanner = () => {
    return (
        <div className="FloatingBanner"  id="who-we-are-section">

            <div className="infoContainer">
                <img src="/assets/WebDevelopment.png" alt="Web Development"/>
                <div>
                    <button className="infoButton">WHO WE ARE</button>
                    <div className="verticalLine"></div>
                    <h3>Austria’s Crypto & Blockchain Experts</h3>
                    <p>At VouGee, we are pioneers in the world of cryptocurrencies and blockchain technology. Established in Austria in 2011, we have been at the forefront of this revolutionary industry from the very beginning. Our journey in the world of cryptocurrencies and blockchain has been marked by relentless research, continuous learning, and a steadfast commitment to understanding the nuances of this ever-evolving landscape.</p>
                    <h3>Unlock the Future with Our Cutting-Edge Crypto Solutions</h3>
                    <p>We are driven by innovation and fueled by a relentless commitment to research and development. Our unwavering focus on R&D empowers us to consistently deliver cutting-edge products to the market, ensuring that our clients remain at the forefront of the crypto application industry.</p>
                    <h3>Leading the Way with Innovation</h3>
                    <p>In a rapidly evolving crypto landscape, staying ahead of the curve is not just an advantage – it's a necessity. Our dedication to pushing the boundaries of technology allows us to develop solutions that are not just current but ahead of their time. Our customers get access to the latest advancements and innovations in the crypto world.</p>
                    {/* <h3>Empowering Crypto Application Providers</h3>
                    <p>We understand that being a pioneer in the crypto application space is about more than just keeping up; it's about setting the pace. With our cutting-edge products and solutions, you can position yourself as a spearhead in the industry, offering your clients unparalleled technology and services.</p>
               */} </div>
            </div>
            <svg className="curvyLine" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 75" preserveAspectRatio="none">
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V100 H0 Z" fill="#363f24" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#363f24" strokeWidth="1" fill="none" />
            </svg>
        </div>
    )
}