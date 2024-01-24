import { useReducer, useState } from "react";
import Navbar from "./navbar/Navbar";
import { StateAction, updateFreightFormState } from "./reducers/emailReducer";
import { sendQuery } from "./freight/makeQuery";

import "./Freight.css";
import "./photos.css";

export function Freight() {

    const [formState, dispatch] = useReducer(updateFreightFormState, { name: "", email: "", company: "", statusText: "" });

    const [statusText] = useState("");


    return (
        <>
            <Navbar></Navbar>
            <main>
                <h1>Freight & Commercial Traffic</h1>

                <p>Freight trains depart all major stations daily.</p>

                <h2>Please contact us for further details.</h2>
                <div id="emailForm">
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input id="name" required minLength={1} onChange={(e) => dispatch({
                            type: StateAction.setName,
                            value: e.target.value
                        })} />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required onChange={(e) => dispatch({
                            type: StateAction.setAddress,
                            value: e.target.value
                        })} />
                        <label htmlFor="company">Your Company (Optional)</label>
                        <input type="email" id="email" onChange={(e) => dispatch({
                            type: StateAction.setCompany,
                            value: e.target.value
                        })} />
                        <label htmlFor="message">Query</label>
                        <textarea id="message" required minLength={1} onChange={(e) => dispatch({
                            type: StateAction.setMessage,
                            value: e.target.value
                        })}></textarea>
                        <button onClick={() => sendQuery(formState, dispatch)}>Send</button>
                        <p id="submitStatus">{statusText}</p>
                    </div>
                </div>
                <h2>Supported traffic</h2>
                <ul>
                    <li>Livestock</li>|
                    <li>Intermodal containers</li>|
                    <li>Timber</li>
                </ul>

                <div id="photos">
                    <img srcSet="/colwdvatn-rails/trains/FreightTrain-320w.webp 320w, /colwdvatn-rails/trains/FreightTrain-480w.webp 480w, /colwdvatn-rails/trains/FreightTrain-600w.webp 600w, /colwdvatn-rails/trains/FreightTrain-800w.webp 800w"
                        alt="A cargo train"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px, 800px"
                    />
                    <img srcSet="/colwdvatn-rails/trains/Boxcar-320w.webp 320w, /colwdvatn-rails/trains/Boxcar-480w.webp 480w, /colwdvatn-rails/trains/Boxcar-600w.webp 600w, /colwdvatn-rails/trains/Boxcar-800w.webp 800w"
                        alt="An old-fashioned boxcar"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, 600px, 800px"
                    />
                </div>
            </main>
        </>
    )
}