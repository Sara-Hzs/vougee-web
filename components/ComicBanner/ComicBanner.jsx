import React from "react";

export const ComicBanner = () => {
    return (
        <div className="ComicBanner">
            <button className="workBtn">WORKING AT VOUGEE</button>
            <div className="textsWrapper">

                <p className="textA">We are Crypto, Blockchain, & BBQ Enthusiasts</p>
                <p className="textB">At our core, we are a passionate team of blockchain and cryptocurrency experts, driven by a profound love for the transformative potential of blockchain technology.
                    But beyond our expertise in the digital realm, we also have a shared love for the simple joys of life, and one of our favorite ways to unwind and bond is through grilling BBQ together.</p>
            </div>
            <img src='/assets/TeamIllustration.png' alt='Team Illustration' className='teamIllustration' />
            <svg className="curvy" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" preserveAspectRatio="none">
                <path d="M0,0 L200,0 V2 L198,2 C192,3 197,27 179,25 L23,25 C3,25 8,3 2,2 L0,2 Z" fill="#fdfdfd" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V30 H0 Z" fill="#363f24" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#363f24" strokeWidth="1" fill="none" />
            </svg>
        </div>
    );
}