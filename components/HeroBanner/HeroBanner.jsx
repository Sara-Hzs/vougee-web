import React from "react";

export const HeroBanner = () => {
    return (
        <div className="HeroBanner banner" id="hero-banner">
            {/* For screens 769px and above */}
            <div className="layout-large">
                <div className="left">
                    <div className="a-text">UNLOCK <br/>THE <br/>FUTURE</div>
                    <div className="b-text">
                        VouGee is the expert on<br/>
                        Blockchain system solutions for<br/>
                        sustainable business and<br/>
                        ecosystem development<br/>
                        <button className="info-btn" onClick={() => {
                            document.getElementById('services-section').scrollIntoView({behavior: 'smooth'});
                        }}>
                            Find out more
                        </button>
                    </div>
                </div>

                <div className="GridContainer"></div>
                <div className="CenteredImage">
                    <img src="/assets/HeroIllustration1.png" alt="Centered Illustration"/>
                </div>
                <div className="right">
                    <div className="c-image">
                        <img src="/assets/round.png" alt="Round Illustration"/>
                    </div>
                    <div className="d-text">
                        <div className="upper-words">
                            OF<br/>
                            YOUR
                        </div>
                        COMPANY
                    </div>
                </div>
            </div>

            {/* For screens 768px and below */}
            <div className="layout-small">
                <div className="a-text">UNLOCK <br/>THE FUTURE</div>
                <div className="flex-row">
                    <div className="c-image">
                        <img src="/assets/round.png" alt="Round Illustration"/>
                    </div>
                    <div className="GridContainer-s"></div>
                    <div className="CenteredImage">
                        <img src="/assets/HeroIllustration1.png" alt="Centered Illustration"/>
                    </div>
                    <div className="d-text">
                        <div className="upper-words">
                            OF<br/>
                            YOUR
                        </div>
                        COMPANY
                    </div>
                </div>
                <div className="b-text">
                    <div className="c-image">
                        <img src="/assets/round.png" alt="Round Illustration"/>
                    </div>
                    VouGee is the expert on<br/>
                    Blockchain system solutions for<br/>
                    sustainable business and<br/>
                    ecosystem development<br/>
                    <button className="info-btn" onClick={() => {
                        document.getElementById('services-section').scrollIntoView({behavior: 'smooth'});
                    }}>
                        Find out more
                    </button>
                </div>
            </div>
        </div>
    )
}