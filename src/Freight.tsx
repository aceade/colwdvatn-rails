import { useReducer, useState } from "react";
import Navbar from "./navbar/Navbar";
import { StateAction, updateFreightFormState } from "./reducers/emailReducer";
import { sendQuery } from "./freight/makeQuery";

export function Freight() {

    const [formState, dispatch] = useReducer(updateFreightFormState, {name: "", email: "", company: "", message: ""});

    const [statusText, setStatusText] = useState("");


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
                        })}/>
                        <label htmlFor="company">Your Company</label>
                        <input type="email" id="email" onChange={(e) => dispatch({
                            type: StateAction.setCompany,
                            value: e.target.value
                        })}/>
                        <label htmlFor="message">Query</label>
                        <textarea id="message" required minLength={1} onChange={(e) => dispatch({
                            type: StateAction.setMessage,
                            value: e.target.value
                        })}></textarea>
                        <button onClick={() => sendQuery(formState, dispatch)}>Send</button>
                        <p id="submitStatus">{statusText}</p>
                    </div>
                </div>

                <div id="photos"></div>
            </main>
        </>
    )
}