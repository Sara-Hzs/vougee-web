import Head from "next/head";
import '../globals.scss'

function VouGeeWeb({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={"./favicon.ico"} />
                <title>VouGee</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default VouGeeWeb;