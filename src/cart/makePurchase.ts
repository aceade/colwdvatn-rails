import { StateAction } from "../reducers/emailReducer";
import { CartTicket } from "./CartContext";

const validateDetails = (name: string, email: string, departureDate: Date) => {
    return {
        nameValid: name?.length > 1,
        emailValid: email?.length > 1,
        messageValid: departureDate.getTime() > Date.now()
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makePurchase = async (formState: any, dispatch: { (value: { type: StateAction; value?: string | Date | CartTicket[] | undefined; }): void; (arg0: { type: StateAction; }): void; }) => {
    console.info(formState)
    const name: string = formState.name!;
    const email: string = formState.email!;
    const departureDate: Date = formState.departureDate!;
    const tickets = formState.tickets;
    

    const validation = validateDetails(name, email, departureDate);
    if (validation.nameValid && validation.emailValid && validation.messageValid) {
        try {
            const response = await window.fetch("https://aceade-express-echo.azurewebsites.net/api/email", {
                method: "POST",
                body: JSON.stringify({
                    name, email, departureDate, tickets
                })
            });
            if (response.status === 200) {
                console.info("Success");
                dispatch({type: StateAction.setMessage, value: "Your tickets have been ordered"});
            } else {
                console.warn(response.status, response.statusText);
                dispatch({type: StateAction.setMessage, value: "Purchase failed. Please try again later"});
            }
        } catch (error) {
            console.error(error);
            dispatch({type: StateAction.setMessage, value: "Purchase failed. Please try again later"});
        }

        setTimeout(() => {
            dispatch({type: StateAction.reset});
        }, 3000);
    }
}