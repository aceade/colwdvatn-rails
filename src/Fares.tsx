import { useContext, useState } from "react";
import { CartContext, CartTicket } from "./cart/CartContext";
import Navbar from "./navbar/Navbar";
import { fares, Ticket } from "./stations";
import "./Fares.css";
import "./photos.css";

export default function Fares() {

    const [cart, setCart] = useState<CartTicket[]>([]);
    const cartContext = useContext(CartContext);

    const buyTicket = (from: string, to: string, price: number) => {
        console.info(`Buying ticket (${price}) from ${from} to ${to}`);
        cartContext.push({
            from, to, price
        });
        setCart(cartContext);

    }

    const makePriceEntry = (from: string, ticket: Ticket) => {
        // exit early if this is the same station
        const isSameStation = from === ticket.to;
        if (isSameStation) {
            return (
                <td colSpan={2}>/</td>
            )
        }
        return (
            <>
                <td className="firstClass" key={ticket.to + "-1"}>
                    <button onClick={() => buyTicket(from, ticket.to, ticket.firstClass)}>
                        {`τ${ticket.firstClass}`}
                    </button>
                </td>
                <td className="secondClass" key={ticket.to + "-2"}>
                    <button onClick={() => buyTicket(from, ticket.to, ticket.secondClass)}>
                        {`τ${ticket.secondClass}`}
                    </button>
                </td>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main>
                <h1>Fares and Tickets</h1>

                <CartContext.Provider value={cart}></CartContext.Provider>
                <table>
                    <thead>
                        <tr>
                            {/* Accesibility concerns require empty <th> to be replaced with <td>, according to WebAIM */}
                            <td></td>
                            {
                                fares.map((value, index) => {
                                    return <th colSpan={2} key={index}>{value.from}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fares.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.from}</td>
                                        {
                                            value.tickets.map((ticket) => {
                                                return makePriceEntry(value.from, ticket)
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div id="prices">
                    <div className="firstClass">
                        1st Class
                    </div>
                    <div className="secondClass">
                        2nd Class
                    </div>
                    <div>
                        All prices in talers.
                    </div>
                </div>

                <hr />

                <section>
                    <header>
                        <h1>Photos</h1>
                        <div id="photos">
                            <div>
                                <h2>First Class</h2>
                                <img srcSet="/colwdvatn-rails/trains/FirstClassLounge-320w.webp 320w, /colwdvatn-rails/trains/FirstClassLounge-480w.webp 480w, /colwdvatn-rails/trains/FirstClassLounge-600w.webp 600w"
                                    alt="The first-class Faledonian Lounge"
                                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px"
                                />
                                <img srcSet="/colwdvatn-rails/trains/FirstClassSleeper-320w.webp 320w, /colwdvatn-rails/trains/FirstClassSleeper-480w.webp 480w, /colwdvatn-rails/trains/FirstClassSleeper-800w.webp 800w"
                                    alt="First class berth"
                                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px"
                                />
                            </div>
                            <div>
                                <h2>Second Class</h2>
                                <img srcSet="/colwdvatn-rails/trains/SecondClassLounge-320w.webp 320w, /colwdvatn-rails/trains/SecondClassLounge-480w.webp 480w, /colwdvatn-rails/trains/SecondClassLounge-600w.webp 600w"
                                    alt="Cafe car"
                                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px"
                                />
                                <img srcSet="/colwdvatn-rails/trains/SecondClassSleeper-320w.webp 320w, /colwdvatn-rails/trains/SecondClassSleeper-480w.webp 480w, /colwdvatn-rails/trains/SecondClassSleeper-800w.webp 800w"
                                    alt="Second class berth"
                                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px"
                                />
                            </div>
                        </div>
                    </header>
                </section>
            </main>


        </>
    )
}