import React from "react";
import Login from "../pages/login/Login";

const ProtectedRoute = ({ isLoggedIn, children, loginHandler, path }) => {
    console.log({ isLoggedIn, children });
    if (!isLoggedIn) {
       return <Login loginHandler={() => loginHandler(true, path)} />;
    }
    return children;
};

export default ProtectedRoute;