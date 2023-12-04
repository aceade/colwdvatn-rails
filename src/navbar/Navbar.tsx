import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header>
                <nav className={menuOpen ? "" : "collapsed"}>
                    <button onClick={toggleMenu}>Menu</button>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}