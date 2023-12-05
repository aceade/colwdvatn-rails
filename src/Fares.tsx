import Navbar from "./navbar/Navbar";
import { fares, Ticket } from "./stations";
import "./Fares.css";

export default function Fares() {

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
                <td className="firstClass" key={ticket.to + "-1"}>{ticket.firstClass}</td>
                <td className="secondClass" key={ticket.to + "-2"}>{ticket.secondClass}</td>
            </>
        )
    }
    
    return (
        <>
            <Navbar/>
            <main>
                <h1>Fares and Tickets</h1>

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
                            <td></td>
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
                                        <td>
                                            <button>Buy</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </main>
        </>
    )
}