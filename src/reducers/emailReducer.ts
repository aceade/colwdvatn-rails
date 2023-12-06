import { CartTicket } from "../cart/CartContext";

export enum StateAction {
    setName,
    setAddress,
    setTickets,
    setDate,
    reset
}

export function updateFormState(state: object, action: {type: StateAction; value?: string | Date | CartTicket[]}) {
    
    switch (action.type) {
        case StateAction.setName:
            return {
                ...state,
                name: action.value,
            };
        case StateAction.setAddress:
            return {
                ...state,
                email: action.value,
            };
        case StateAction.setDate:
            return {
                ...state,
                departureDate: action.value
            }
        case StateAction.setTickets:
            return {
                ...state,
                tickets: action.value,
            };
        case StateAction.reset:
            return {
                ...state,
                name: "",
                email: "",
                departureDate: new Date(),
                tickets: []
            };
    }
}