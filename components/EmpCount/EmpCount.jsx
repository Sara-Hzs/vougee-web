import React from "react";

export const EmpCount = () => {
    return (
        <div className="EmpCount">
            <div className="StatsContainer">
                <div className="statsBox">

                    <div className="statsHeader">
                        <span>Stats</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10">
                            <path d="M5,0 L2,0 L5,5 L190,5 Q195,5 198,8 L200,10 L200,0 L5,0" fill="#b8d900" />
                            <path d="M5,5 L2,0 L5,5 L190,5 Q195,5 198,8 L200,10" fill="none" stroke="#b8d900" strokeWidth="1" />
                        </svg>
                        <div className="designContainer">
                            <div className="horizontalLine"></div>
                            <div className="rectangles">
                                <div className="rectangle"></div>
                                <div className="rectangle"></div>
                                <div className="rectangle"></div>
                                <div className="rectangle"></div>
                                <div className="rectangle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="statItem">
                        <span>15</span>
                        <span>Nationalities</span>
                    </div>
                    <div className="statItem">
                        <span>30</span>
                        <span>Languages</span>
                    </div>
                    <div className="statItem">
                        <span>60+</span>
                        <span>Gourmet</span>
                    </div>
                </div>
            </div>

            <svg className="curved" width="100%" height="60%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" preserveAspectRatio="none">
                <path d="M0,0 L200,0 V2 L198,2 C192,3 197,27 179,25 L23,25 C3,25 8,3 2,2 L0,2 Z" fill="#f0f0f0" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2 V30 H0 Z" fill="#fdfdfd" />
                <path d="M0,2 L2,2 C10,3 8,10 23,11 L110,11 L177,11 C192,10 190,3 198,2 L200,2" stroke="#fdfdfd" strokeWidth="1" fill="none" />
            </svg>
        </div>
    )
}