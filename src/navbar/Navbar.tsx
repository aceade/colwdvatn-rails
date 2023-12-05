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
                <img id="logo" src="/colwdvatn-rails/headerLogo.webp" alt="Colwdvatn & Kerbalstead Rails"></img>
                <nav className={menuOpen ? "" : "collapsed"}>
                    <button onClick={toggleMenu}>Menu</button>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/fares">Fares & Tickets</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}