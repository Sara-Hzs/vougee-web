import React, { useState } from 'react';
import { jobs_example } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Jobs = () => {
    const [openFrame, setOpenFrame] = useState(null);

    const handleFrameClick = (frameNumber) => {
        setOpenFrame(frameNumber === openFrame ? null : frameNumber);
    };

    const formatNumber = (number) => String(number).padStart(2, '0');

    return (
        <div className="jobs">
            <div className="headlines">
                <h1 className="headline-main">Open Positions</h1>
                <h2 className="headline-sub">All positions are remote and full time</h2>
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
                                <h1 className="number-title">{formatNumber(jobs_example.length - index)}</h1>
                                <h2 className="job-title">{job.name}</h2>
                                <p>{job.description}</p>
                                <p>{job.requirements}</p>
                                <Link href="/#otherpage">
                                    <a className="apply-btn">
                                        Apply Position
                                        <div className="icon-arrow"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
                                    </a>
                                </Link>
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