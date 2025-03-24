import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [openFrame, setOpenFrame] = useState();

    useEffect(() => {
        const fetchJobs = async () => {
            try {

                const response = await fetch('https://vougee.gmbh/backend/api/jobs');
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data.data)
                setJobs(data.data);
                setOpenFrame(data.data.length - 1);

            } catch (error) {
                console.error("There was a problem fetching job data:", error);
            }
        };

        fetchJobs();
    }, []);

    const handleFrameClick = (frameNumber) => {
        setOpenFrame(frameNumber === openFrame ? -1 : frameNumber);
    };

    const formatNumber = (number) => String(number).padStart(2, '0');

    // to split semicolon-separated strings into arrays
    const splitStringBySemicolon = (str) => {
        return str?.split(';').map(s => s.trim()).filter(Boolean) || [];
    };

    return (
        <div className="jobs">
            <div className="headlines">
                <h1 className="headline-main">OPEN POSITIONS</h1>
                <div className="benefits-text">

                    <p className="opening">Our Benefits - Your Motivation - What we offer:</p>
                    <ul>
                        <li>THE coolest and talented blockchain team ever, is waiting for YOU!</li>
                        <li>You decide within your team, when and how you work. Home Office possibility and no
                            dress-code.
                        </li>
                        <li>Family company atmosphere – We are cooking and enjoy lunch together (paid by company) share
                            our ideas and thoughts and of course private stuff.
                        </li>
                        <li>Humor and team activities have always a place in our daily work.</li>
                        <li>You have the chance to work in the most attractive field in the area of IT at the moment.
                        </li>
                        <li>Feel your impact. Not only in having a meaningful job, also by implementing blockchain
                            projects that have a real influence for society/world out there.
                        </li>
                        <li>Bring your own ideas in and get a meaningful job.</li>
                        <li>Learning & Development possibilities.</li>
                        <li>No all-in contracts, attractive salary and bonus opportunity.</li>
                    </ul>
                </div>
            </div>
            {/*<div className="frames-container">*/}
            {/*    {jobs.length > 0 ? jobs.map((job, index) => (*/}
            {/*        <div*/}
            {/*            key={job.id}*/}
            {/*            className={`frame ${openFrame === index ? 'open' : ''}`}*/}
            {/*            onClick={() => handleFrameClick(index)}*/}
            {/*        >*/}
            {/*            {openFrame === index ? (*/}
            {/*                <div className='frame-content'>*/}
            {/*                    <a href={`mailto:jobs@vougee.gmbh?subject=Application for ${job.name}`}*/}
            {/*                       className="apply-btn">*/}
            {/*                        Apply Position*/}
            {/*                        <div className="icon-arrow">*/}
            {/*                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <h1 className="number-title">{formatNumber(jobs.length - index)}</h1>*/}
            {/*                    <h1 className="job-title">{job.attributes.Name}</h1>*/}
            {/*                    /!* Description *!/*/}
            {/*                    <h3 className="frame-section-title">Description</h3>*/}
            {/*                    <ul>*/}
            {/*                        {splitStringBySemicolon(job.attributes.Description).map((description, dIndex) => (*/}
            {/*                            <li key={dIndex}>{description}</li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}

            {/*                    /!* Requirements *!/*/}
            {/*                    <h3 className="frame-section-title">Requirements</h3>*/}
            {/*                    <ul>*/}
            {/*                        {splitStringBySemicolon(job.attributes.Requirements).map((requirement, rIndex) => (*/}
            {/*                            <li key={rIndex}>{requirement}</li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}

            {/*                    /!* Scope of Work *!/*/}
            {/*                    <h3 className="frame-section-title">Scope Of Work</h3>*/}
            {/*                    <ul>*/}
            {/*                        {splitStringBySemicolon(job.attributes.Scope).map((scopeItem, sIndex) => (*/}
            {/*                            <li key={sIndex}>{scopeItem}</li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                    <a>*/}
            {/*                        <br/>*/}
            {/*                    </a>*/}


            {/*                </div>*/}
            {/*            ) : (*/}
            {/*                <>*/}
            {/*                    <span className="vertical-text">{job.attributes.Name}</span>*/}
            {/*                    <div className="frame-number">{formatNumber(jobs.length - index)}</div>*/}
            {/*                </>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    )) : (*/}
            {/*        <p>Loading jobs...</p>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/* New no positions message */}
            <div className="no-positions-container">
                <div className="no-positions-card">
                    <div className="message-content">
                        <h2 className="message-title">No Open Positions Currently</h2>
                        <p className="message-text">
                            While we don't have any open positions at the moment, we invite you to check back regularly as new opportunities emerge. VouGee is committed to assembling a diverse team of forward-thinking professionals who share our passion for technology and collaborative culture.
                        </p>
                    </div>
                </div>
            </div>


            <h2 className="email">
                <a href="mailto:jobs@vougee.gmbh" className="custom-email-link">jobs@vougee.gmbh</a>
            </h2>


        </div>
    );
};