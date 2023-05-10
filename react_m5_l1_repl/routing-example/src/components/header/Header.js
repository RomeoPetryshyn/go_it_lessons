import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Header () {
    const location = useLocation();
    return <div style={{width: 500, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link to={'/'}> Home </Link>
        <Link to={'/posts'}> Posts </Link>
        <Link state={{from: location}} to={'/products'}> Products </Link>
        <Link to={'/about'}> About </Link>

    </div>
}

export default Header;
