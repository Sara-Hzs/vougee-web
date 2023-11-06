import React from "react";
import {HeroBanner} from "../components/HeroBanner/HeroBanner";
import {FloatingBanner} from "../components/FloatingBanner/FloatingBanner";
import {CubeBanner} from "../components/CubeBanner/CubeBanner";
import {MobileBanner} from "../components/MobileBanner/MobileBanner";


function index() {
    return (
        <>
            <HeroBanner/>
            <FloatingBanner/>
            <CubeBanner/>
            <MobileBanner/>

        </>

    )

}

export default index;