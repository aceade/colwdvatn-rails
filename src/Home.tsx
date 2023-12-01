import "./Home.css";
import { ArrivalAndDeparture, inboundStations, outboundStations, StationEntry } from "./stations";

export default function Home() {
    
    const buildDateEntry = (date: ArrivalAndDeparture) => {
        let str = "";
        if (date.arrival) {
            str += `Arr: ${date.arrival}\n`;
        }
        if (date.departure) {
            str += `Dep: ${date.departure}`;
        }
        return <td>{str}</td>;
    }

    return (
        <>
            <main>
                <h1>Colwdvatn & Kerbalstead Rails</h1>
                <p>Your gateway to The Sydfjords</p>

                <section>
                    <header>
                        <h2>Live Trains (Inbound)</h2>

                        <table>
                            <tr>
                                <th>Station</th>
                            </tr>
                            {
                                inboundStations.map((station: StationEntry) => {
                                    return (
                                        <tr>
                                            <td className="rowHeader">
                                                {station.location}
                                            </td>
                                            {station.dates.map((date) => {
                                                return buildDateEntry(date);
                                            })}
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </header>
                </section>
                <section>
                    <header>
                        <h2>Outbound Trains</h2>
                        <table>
                            <tr>
                                <th>Station</th>
                            </tr>
                            {
                                outboundStations.map((station: StationEntry) => {
                                    return (
                                        <tr>
                                            <td className="rowHeader">
                                                {station.location}
                                            </td>
                                            {station.dates.map((date) => {
                                                return buildDateEntry(date);
                                            })}
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </header>
                </section>
            </main>
        </>
    );
}