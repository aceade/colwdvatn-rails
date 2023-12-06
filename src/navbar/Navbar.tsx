import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartTicket } from "../cart/CartContext";

import "./Navbar.css";



export default function Navbar() {

    const cart = useContext(CartContext);

    const emptyCartSrc = "/colwdvatn-rails/cart-empty.svg";
    const fullCartSrc = "/colwdvatn-rails/cart.svg";

    const [menuOpen, setMenuOpen] = useState(false);
    const [cartImageAlt, setCartImageAlt] = useState("0 tickets");
    const [cartImageSrc, setCartImageSrc] = useState(emptyCartSrc);
    const [cartCount, setCartCount] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const length = cart.length;
            setCartCount(length);
            setCartImageAlt(`${length} tickets`);
            if (length > 0) {
                setCartImageSrc(fullCartSrc);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <header>
                <img id="logo" src="/colwdvatn-rails/headerLogo.webp" alt="Colwdvatn & Kerbalstead Rails"></img>
                <nav className={menuOpen ? "" : "collapsed"}>
                    <button onClick={toggleMenu}>Menu</button>
                    <button id="openCart">
                        <CartContext.Provider value={cart}>
                            <img src={cartImageSrc} alt={cartImageAlt} />
                            <p>{cartCount}</p>
                        </CartContext.Provider>
                    </button>
                    
                    
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/fares">Fares & Tickets</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}