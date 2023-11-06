import React, { useState } from "react";

export const MobileBanner = () => {
    const [activeSlide, setActiveSlide] = useState(1);  // Keep track of the active slide

    const DefaultSlideContent = () => (
        <>
            <button className="ourServiceBtn">Our Services</button>
            <h3>What we can do to unlock your future</h3>
            <div className="divider"></div>
            <div className="imageSection">
                <img src="/assets/MobileAppDevelopment.png" alt="MobileAppDevelopment"/>
            </div>
            <h1>Mobile Application</h1>
            <p>We can push the boundaries with large-scale complex solutions. Our blockchain development company can implement multi-currency EVM-based wallets into your software.</p>
        </>
    );

    const Slide2Content = () => (
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
    const Slide3Content = () => <DefaultSlideContent />;
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
    );


    return (
        <div className="MobileBanner" id="services-section">
            {activeSlide === 1 && <DefaultSlideContent />}
            {activeSlide === 2 && <Slide2Content />}
            {activeSlide === 3 && <Slide3Content />}
            {activeSlide === 4 && <Slide4Content />}
            {activeSlide === 5 && <Slide5Content />}
            {activeSlide === 6 && <Slide6Content />}

            <div className="rightSection">
                <div className="circle topCircle"></div>
                <div className="topLine"></div>
                <div className="numbers">
                    <span onClick={() => setActiveSlide(1)}>01.</span>
                    <span onClick={() => setActiveSlide(2)}>02.</span>
                    <span onClick={() => setActiveSlide(3)}>03.</span>
                    <span onClick={() => setActiveSlide(4)}>04.</span>
                    <span onClick={() => setActiveSlide(5)}>05.</span>
                    <span onClick={() => setActiveSlide(6)}>06.</span>

                </div>
                <div className="bottomLine"></div>
                <div className="circle bottomCircle"></div>
            </div>
        </div>
    )
}