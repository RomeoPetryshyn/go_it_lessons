import React from "react";
import { Outlet } from 'react-router-dom';

function About () {
    return (
        <>
        <div>About page</div>
        <Outlet />
        </>
    )
}

export default About;