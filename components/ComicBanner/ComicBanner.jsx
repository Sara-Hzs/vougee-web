import React from "react";

export const ComicBanner = () => {
    return (
        <div className="ComicBanner">
            <button className="workBtn">WORKING AT VOUGEE</button>
            <div className="textsWrapper">

                <p className="textA">Crypto, Blockchain, & BBQ {/*Enthusiasts*/}</p>
                <p className="textB">VouGee is more than a workplace; it's a microcosm of the world, rich in cultures,
                    languages,
                    and ideas. We celebrate diversity, not just in our team’s makeup but in our approach to
                    technology and life. Here, coding meets cooking, parties blend with programming, and every
                    day is an adventure. </p>
            </div>
            <img src='/assets/TeamIllustration.png' alt='Team Illustration' className='teamIllustration'/>
            <div className="textsWrapper" ><p className="textB third">Join us in this unique journey where work feels like
                play, and every challenge is an opportunity to learn,
                grow, and celebrate. Welcome to our world, where every code line, every dish, and every laugh is a part
                of the extraordinary tapestry that is our company spirit. </p></div>

            <svg className="curvy" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"
                 preserveAspectRatio="none">
                <path d="M0,0 L200,0 V2 L198,2 C192,3 197,27 179,25 L23,25 C3,25 8,3 2,2 L0,2 Z" fill="#fdfdfd"/>
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V30 H0 Z"
                      fill="#363f24"/>
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#363f24"
                      strokeWidth="1" fill="none"/>
            </svg>
        </div>
    );
}

