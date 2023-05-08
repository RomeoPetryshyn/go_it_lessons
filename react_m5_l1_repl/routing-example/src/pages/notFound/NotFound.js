import React from "react";
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <>
            <div>Page not found</div>
            <div>
                <Link to={'/'} >Go back home</Link>
            </div>
        </>
    )
}

export default NotFound;