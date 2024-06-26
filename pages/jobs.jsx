import React from "react";
import {CrewBanner} from "../components/CrewBanner/CrewBanner";
import {ComicBanner} from "../components/ComicBanner/ComicBanner";
import {Jobs} from "../components/Jobs/Jobs";
import {EmpCount} from "../components/EmpCount/EmpCount";

function JobsPage() {
    return (
        <>
            <CrewBanner/>
            <EmpCount/>
            <ComicBanner/>
            <Jobs/>
        </>

    )
}

export default JobsPage;


