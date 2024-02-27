import React, { useState, useEffect } from 'react';
import { jobs_example } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Jobs = () => {
    const [openFrame, setOpenFrame] = useState(jobs_example.length - 1);
    //  fetching logic
    /*
    const [jobs, setJobs] = useState({
        loading: true,
        error: false,
        data: []
    });

    useEffect(() => {
        fetch('backend_url')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setJobs({ loading: false, error: false, data: data });
            })
            .catch(error => {
                console.error('There was an error fetching the jobs:', error);
                setJobs({ loading: false, error: true, data: [] });
            });
    }, []);
    */

    const handleFrameClick = (frameNumber) => {
        setOpenFrame(frameNumber === openFrame ? openFrame : frameNumber);
    };

    const formatNumber = (number) => String(number).padStart(2, '0');

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
            <div className="frames-container">
                {jobs_example.map((job, index) => (
                    <div
                        key={job.id}
                        className={`frame ${openFrame === index ? 'open' : ''}`}
                        onClick={() => handleFrameClick(index)}
                    >
                        {openFrame === index ? (
                            <>
                                <div className='frame-content'>
                                    <h1 className="number-title">{formatNumber(jobs_example.length - index)}</h1>
                                    <h1 className="job-title">{job.name}</h1>
                                    <p>{job.description}</p>


                                    {/* Requirements */}
                                    {job.requirements && job.requirements.length > 0 && (
                                        <>
                                            <h3 className="frame-section-title">Requirements</h3>
                                            <ul>
                                                {job.requirements.map((requirement, rIndex) => (
                                                    <li key={rIndex}>{requirement}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {/* Scope of Work */}
                                    {job.scope && job.scope.length > 0 && (
                                        <>
                                            <h3 className="frame-section-title">Scope Of Work</h3>
                                            <ul>
                                                {job.scope.map((scopeItem, sIndex) => (
                                                    <li key={sIndex}>{scopeItem}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    <br/>
                                    <br/>

                                </div>

                                <a href="mailto:jobs@vougee.gmbh" className="apply-btn">
                                    Apply Position
                                    <div className="icon-arrow"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </div>
                                </a>
                            </>

                        ) : (
                            <>
                                <span className="vertical-text">{job.name}</span>
                                <div className="frame-number">{formatNumber(jobs_example.length - index)}</div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};