import { useState, useContext, useEffect, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";

import "./Navbar.css";
import { makePurchase } from "../cart/makePurchase";
import { StateAction, updateCartFormState } from "../reducers/emailReducer";



export default function Navbar() {

    const cart = useContext(CartContext);

    const emptyCartSrc = "/colwdvatn-rails/cart-empty.svg";
    const fullCartSrc = "/colwdvatn-rails/cart.svg";

    const [menuOpen, setMenuOpen] = useState(false);
    const [cartImageAlt, setCartImageAlt] = useState("View cart (0 tickets)");
    const [cartImageSrc, setCartImageSrc] = useState(emptyCartSrc);
    const [cartCount, setCartCount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>();
    const [cartTotal, setCartTotal] = useState(0);

    // putting customer details here because it's going to be common to all pages.
    const [formState, dispatch] = useReducer(updateCartFormState, {name: "", email: "", departureDate: new Date(), tickets: []});

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleCartDialog = () => {
        setCartOpen(!cartOpen);
        console.debug(cartOpen);
        if (cartOpen) {
            dialogRef.current?.show();
        } else {
            dialogRef.current?.close();
        }
    }

    // auto-update the cart image/count
    useEffect(() => {
        const intervalId = setInterval(() => {
            const length = cart.length;
            setCartCount(length);
            setCartImageAlt(`View cart (${length} tickets)`);
            if (length > 0) {
                setCartImageSrc(fullCartSrc);
            }
            const total = cart.reduce((total: number, currentValue) => total + currentValue.price, 0)
            setCartTotal(total);
        }, 100);
        return () => clearInterval(intervalId);
    });

    return (
        <>
            <header>
                <img id="logo" src="/colwdvatn-rails/headerLogo.webp" alt="Colwdvatn & Kerbalstead Rails"></img>
                <nav className={menuOpen ? "" : "collapsed"}>
                    <button onClick={toggleMenu}>Menu</button>
                    <button id="openCart" onClick={toggleCartDialog}>
                        <CartContext.Provider value={cart}>
                            <img src={cartImageSrc} alt={cartImageAlt} title="View cart" /> {cartCount}
                        </CartContext.Provider>
                    </button>

                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/fares">Fares & Tickets</Link>
                        <Link to="/freight">Freight Traffic</Link>
                    </div>
                </nav>

                <dialog id="cartDialog" className={cartOpen ? "visible" : ""}>
                    <h2>Your Cart</h2>
                    {
                        cart.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p>{`From: ${value.from} To: ${value.to} τ${value.price}`}</p>
                                    <button onClick={() => {
                                        cart.splice(index, 1);
                                    }}>-</button>
                                </div>
                            )
                        })
                    }
                    <p id="total">Total: τ{cartTotal}</p>
                    <hr />
                    <div className="payForm">
                        <label htmlFor="customerName">Your Name</label>
                        <input type="name" id="customerName" onChange={(e) => dispatch({
                            type: StateAction.setName, value: e.target.value
                        })} />
                        <label htmlFor="customerEmail">Your Contact Address</label>
                        <input type="email" id="customerEmail" onChange={(e) => dispatch({
                            type: StateAction.setAddress, value: e.target.value
                        })} />
                        <input type="date" id="departureDate" onChange={(e) => dispatch({
                            type: StateAction.setDate, value: e.target.valueAsDate!
                        })} />
                        <button onClick={() => makePurchase(formState, dispatch)}>Make Your Reservation</button>
                    </div>

                </dialog>
            </header>
        </>
    );
}