import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartTicket } from "../cart/CartContext";

import "./Navbar.css";



export default function Navbar() {

    const cart = useContext(CartContext);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const getCartImageSrc = (cart: CartTicket[]) => {
        console.info(cart.length);
        if (cart.length > 0) {
            return "/colwdvatn-rails/cart.svg";
        }
        return "/colwdvatn-rails/cart-empty.svg";
        
    }

    const getCartImageAlt = (cart: CartTicket[]) => {
        return `${cart.length.toLocaleString()} tickets`;
    }

    const getCartTotal = (cart: CartTicket[]) => {
        return cart.length.toLocaleString();
    }

    return (
        <>
            <header>
                <img id="logo" src="/colwdvatn-rails/headerLogo.webp" alt="Colwdvatn & Kerbalstead Rails"></img>
                <nav className={menuOpen ? "" : "collapsed"}>
                    <button onClick={toggleMenu}>Menu</button>
                    <button id="openCart">
                        <CartContext.Provider value={cart}>
                            <img src={getCartImageSrc(cart)} alt={getCartImageAlt(cart)} />
                            <p>{getCartTotal(cart)}</p>
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