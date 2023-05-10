import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from 'react-router-dom';

function NotFound () {
    // const [goBackToHome, setGoBackToHome] = useState(false);

    // if (goBackToHome) {
    //     return <Navigate to="/" replace={true} />
    // }


    // useEffect(() => {
    //     const redirectHandler = () => navigate('/');
    //     redirectHandler();
    // }, []);

    const navigate = useNavigate();

    // return <Navigate to="/" replace={true} />

    return (
        <>
            <div>Page not found</div>
            <div>
                {/* <button onClick={() => setGoBackToHome(true)}>Go back home</button> */}
                <button onClick={() => navigate('/')}>Go back home</button>
            </div>
        </>
    )
}

export default NotFound;