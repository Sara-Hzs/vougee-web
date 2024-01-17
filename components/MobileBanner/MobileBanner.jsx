import React, { useState } from "react";

export const MobileBanner = () => {
    const [activeSlide, setActiveSlide] = useState(1);



    const DefaultSlideContent = () => (
        <>
            <button className="ourServiceBtn">Our Services</button>
           <h4 id="top">What we can do to unlock your future</h4>
            <div className="divider"></div>
            <div className="imageSection">
                <img src="/assets/MobileAppDevelopment.png" alt="MobileAppDevelopment"/>
            </div>
            <h4>Pioneering the Blockchain Mobile Experience</h4>
            <h1>Mobile
                Application
                Development</h1>
            <p>As professionals in mobile application development in the blockchain space, we are committed to
                delivering innovative, secure and user-friendly solutions. Whether it's managing digital wallets,
                integration with WebOns, implementing of KYC applications, tracking balances or exploring the world of
                NFTs, our applications are designed to cater to the dynamic needs of the modern user in a highly
                innovative industry.</p>
        </>
    );

    const Slide2Content = () => (
        <>
            {/*<button className="ourServiceBtn">Our Services</button>*/}
            <div className="imageSection">
                <img src="/assets/WebDevelopment.png" alt="WebDevelopment"/>
            </div>
            <h4>Trailblazing the Blockchain Ecosystems</h4>
            <h1>Web and Backend Development</h1>
            <p>In the dynamic realm of blockchain and cryptocurrency, we are a beacon of innovation, specializing in
                sophisticated web
                and backend development. We are dedicated to building robust solutions that empower our clients to
                thrive in this
                cutting-edge industry.
                Tools, functions and services such as Blockchain Explorers, Price
                Services, Crypto
                Exchanges, Smart Contracts, Minting Services, Coin Listings or robust blockchain solutions, ensuring
                high performance
                and scalability, are our daily business</p>
        </>
    );
    {/* const Slide3Content = () => <DefaultSlideContent />;
    const Slide4Content = () => (
        <>
            <button className="ourServiceBtn">Web Development</button>
            <h3>Building Your Online Presence</h3>
            <div className="divider"></div>
            <div className="imageSection">
                <img src="/assets/WebDevelopment.png" alt="WebDevelopment"/>
            </div>
            <h1>Responsive Websites</h1>
            <p>We craft stunning websites to showcase your brand and impress your audience.</p>
        </>
    );
    const Slide5Content = () => <DefaultSlideContent />;
    const Slide6Content = () => (
        <>
            <button className="ourServiceBtn">Web Development</button>
            <h3>Building Your Online Presence</h3>
            <div className="divider"></div>
            <div className="imageSection">
                <img src="/assets/WebDevelopment.png" alt="WebDevelopment"/>
            </div>
            <h1>Responsive Websites</h1>
            <p>We craft stunning websites to showcase your brand and impress your audience.</p>
        </>
    );*/}


    return (
        <>
            <div className="MobileBanner" id="services-section">
                <DefaultSlideContent/>
                {/* {activeSlide === 3 && <Slide3Content />}
            {activeSlide === 4 && <Slide4Content />}
            {activeSlide === 5 && <Slide5Content />}
            {activeSlide === 6 && <Slide6Content />}*/}

                <div className="rightSection">
                    <div className="circle topCircle"></div>
                    <div className="topLine"></div>
                    <div className="numbers">
                        <span>01.</span>
                        {/* <span onClick={() => setActiveSlide(3)}>03.</span>
                    <span onClick={() => setActiveSlide(4)}>04.</span>
                    <span onClick={() => setActiveSlide(5)}>05.</span>
                    <span onClick={() => setActiveSlide(6)}>06.</span>*/}

                    </div>
                    <div className="bottomLine"></div>
                    <div className="circle bottomCircle"></div>
                </div>
            </div>
            <div className="MobileBanner no-margin" id="services-section">
                <Slide2Content/>
                {/* {activeSlide === 3 && <Slide3Content />}
            {activeSlide === 4 && <Slide4Content />}
            {activeSlide === 5 && <Slide5Content />}
            {activeSlide === 6 && <Slide6Content />}*/}

                <div className="rightSection">
                    <div className="circle topCircle"></div>
                    <div className="topLine"></div>
                    <div className="numbers">
                        <span>02.</span>
                        {/* <span onClick={() => setActiveSlide(3)}>03.</span>
                    <span onClick={() => setActiveSlide(4)}>04.</span>
                    <span onClick={() => setActiveSlide(5)}>05.</span>
                    <span onClick={() => setActiveSlide(6)}>06.</span>*/}

                    </div>
                    <div className="bottomLine"></div>
                    <div className="circle bottomCircle"></div>
                </div>
            </div>
        </>
    )
}