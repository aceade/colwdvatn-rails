import { StateAction } from "../reducers/emailReducer";
import { CartTicket } from "./CartContext";

const validateDetails = (name: string, email: string, departureDate: Date) => {
    console.log(name, email, departureDate);
    return {
        nameValid: name?.length > 1,
        emailValid: email?.length > 1,
        messageValid: departureDate.getTime() > Date.now()
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makePurchase = async (formState: any, dispatch: { (value: { type: StateAction; value?: string | Date | CartTicket[] | undefined; }): void; (arg0: { type: StateAction; }): void; }) => {
 
    const name: string = formState.name!;
    const email: string = formState.email!;
    const departureDate: Date = formState.departureDate!;
    const tickets = formState.tickets;

    const validation = validateDetails(name, email, departureDate);
    if (validation.nameValid && validation.emailValid && validation.messageValid) {
        try {
            const response = await window.fetch("https://aceade-express-echo.azurewebsites.net/", {
                method: "POST",
                body: JSON.stringify({
                    name, email, departureDate, tickets
                })
            });
            if (response.status === 200) {
                alert("Success!")
                dispatch({type: StateAction.reset});
            } else {
                console.warn(response.status, response.statusText);
                alert("Failed!")
            }
        } catch (error) {
            console.error(error);
        }
    }
}