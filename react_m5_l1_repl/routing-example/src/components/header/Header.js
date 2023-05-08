import React from "react";
import { Link } from 'react-router-dom';

function Header () {
    return <div style={{width: 500, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link to={'/'}> Home </Link>
        <Link to={'/posts'}> Posts </Link>
        <Link to={'/products'}> Products </Link>
        <Link to={'/about'}> About </Link>
        
    </div>
}

export default Header;