import "./Home.css";
import Navbar from "./navbar/Navbar";
import { ArrivalAndDeparture, inboundStations, outboundStations, StationEntry } from "./stations";

export default function Home() {

    const buildDateEntry = (date: ArrivalAndDeparture, index: number) => {
        let str = "";
        if (date.arrival) {
            str += `Arr: ${date.arrival}\n`;
        }
        if (date.departure) {
            str += `Dep: ${date.departure}`;
        }
        return <td key={index}>{str}</td>;
    }

    return (
        <>
            <Navbar></Navbar>
            <main>
                <img id="logo" src="/colwdvatn-rails/headerLogo.webp" alt="Logo"></img>
                <h1>Colwdvatn & Kerbalstead Rails</h1>
                <p>Your gateway to The Sydfjords</p>

                <section>
                    <h2>Live Trains (Inbound)</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Station</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inboundStations.map((station: StationEntry, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td className="rowHeader">
                                                {station.location}
                                            </td>
                                            {station.dates.map((date, index: number) => {
                                                return buildDateEntry(date, index);
                                            })}
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </section>
                <section>

                    <h2>Outbound Trains</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Station</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                outboundStations.map((station: StationEntry, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td className="rowHeader">
                                                {station.location}
                                            </td>
                                            {station.dates.map((date, index) => {
                                                return buildDateEntry(date, index);
                                            })}
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}