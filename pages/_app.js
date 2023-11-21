import React, { useState, useEffect } from 'react';
import Head from "next/head";
import '../globals.scss'
import {Header} from "../components/Header/Header";
import {MobileHeader} from "../components/MobileHeader/MobileHeader";
import {Footer} from "../components/Footer/Footer";
import '../components/Jobs/Jobs.scss'
import '../components/ComicBanner/ComicBanner.scss'
import '../components/CrewBanner/CrewBanner.scss'
import '../components/CubeBanner/CubeBanner.scss'
import '../components/FloatingBanner/FloatingBanner.scss'
import '../components/Footer/Footer.scss'
import '../components/Header/Header.scss'
import '../components/HeroBanner/HeroBanner.scss'
import '../components/MobileBanner/MobileBanner.scss'
import '../components/MobileHeader/MobileHeader.scss'
import '../components/EmpCount/EmpCount.scss'

function VouGeeWeb({ Component, pageProps }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href={"assets/favicon.ico"} />
                <title>VouGee</title>
            </Head>
            {isMobile ? <MobileHeader /> : <Header />}
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default VouGeeWeb;