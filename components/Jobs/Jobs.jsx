import React, {useEffect, useState} from "react";
import {jobs_example} from "../../utils/constants";

export const Jobs = () => {
    const [openFrame, setOpenFrame] = useState(4);

    const [jobs, setJobs] = useState({
        loading: true,
        error: false,
        data: null
    })

    useEffect(() => {
        // here we fetch
        // fetch('backend_url')
        //     .then(res => {
        //         // check if data is valid
        //         setJobs({
        //             loading: false,
        //             error: false,
        //             data: res.data
        //         })
        //         // if res is not okay
        //         throw new Error()
        //     })
        //     .catch(() => {
        //         setJobs({
        //             loading: false,
        //             error: true,
        //             data: null
        //         })
        //     })
        setJobs({
            loading: false,
            error: false,
            data: jobs_example
        })
    }, [])


    const sentences = [
        "High five from frame five!",
        "Four is a cool number, right?",
        "Greetings from frame three!",
        "This is the second frame speaking!",
        "Welcome to the first frame!"
    ];

    const jobTitles = [
        "Java Developer",
        "Web Designer",
        "React Developer",
        "Data Scientist",
        "UX Designer"
    ];

    const handleFrameClick = (frameNumber) => {
        setOpenFrame(frameNumber);
    };

    return (
        <div className="jobs">
            <div className="headlines">
                <h1 className="headline-main">Open Positions</h1>
                <h2 className="headline-sub">All positions are remote and full time</h2>
            </div>
            <div className="frames-container">
                {
                    jobs.loading ?
                        <div>Loading</div> :
                        !jobs.error ?
                        sentences.map((sentence, index) => (
                                <div
                                    key={index}
                                    className={`frame ${openFrame === index ? 'open' : ''}`}
                                    onClick={() => handleFrameClick(index)}
                                >
                                    {openFrame === index ? (
                                        <>
                                            <h1 className="number-title">{String(sentences.length - index).padStart(2, '0')}</h1>
                                            <h2 className="job-title">{jobTitles[index]}</h2>
                                            <p>{sentence}</p>
                                            <button className="apply-btn">Apply Position</button>
                                        </>
                                    ) : (
                                        <>
                                            <span className="vertical-text">{jobTitles[index]}</span>
                                            <div className="frame-number">{String(sentences.length - index).padStart(2, '0')}</div>
                                        </>
                                    )}
                                </div>
                            )) :
                            <div>Error</div>
                }
            </div>
        </div>
    );
};