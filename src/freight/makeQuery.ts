import { StateAction } from "../reducers/emailReducer";

const validateDetails = (name: string, email: string, message: string) => {
    return {
        nameValid: name?.length > 1,
        emailValid: email?.length > 1,
        messageValid: message?.length > 1
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendQuery = async (formState: any, dispatch: { (value: { type: StateAction; value?: string ; }): void; (arg0: { type: StateAction; }): void; }) => {
 
    const name: string = formState.name!;
    const email: string = formState.email!;
    const message: string = formState.message!;
    
    const company: string = formState.company;

    const validation = validateDetails(name, email, message);
    if (validation.nameValid && validation.emailValid && validation.messageValid) {
        try {
            const response = await window.fetch("https://aceade-express-echo.azurewebsites.net/api/email", {
                method: "POST",
                body: JSON.stringify({
                    name, email, company, message
                })
            });
            if (response.status === 200) {
                console.log("Success");
                dispatch({type: StateAction.setMessage, value: "Your query has been sent"});
            } else {
                console.warn(response.status, response.statusText);
                dispatch({type: StateAction.setMessage, value: "Failed to send"});
            }
        } catch (error) {
            console.error(error);
        }
    }
}