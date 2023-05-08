import { Link } from 'react-router-dom';

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;