import { CartTicket } from "../cart/CartContext";

export enum StateAction {
    setName,
    setAddress,
    setTickets,
    setDate,
    setCompany,
    setMessage,
    reset
}

export interface CartStateAction {
    type: StateAction;
    value?: string | Date | CartTicket[];
}

export interface FreightStateAction {
    type: StateAction;
    value?: string;
}

export function updateCartFormState(state: object, action: CartStateAction) {
    
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
        default:
            return state;
    }
}

export function updateFreightFormState(state: object, action: FreightStateAction) {
    switch(action.type) {
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
        case StateAction.setCompany:
            return {
                ...state,
                company: action.value
            }
        case StateAction.setMessage:
            return {
                ...state,
                message: action.value
            }
        case StateAction.reset:
            return {
                ...state,
                name: "",
                email: "",
                company: "",
                message: "",
                statusText: action.value
            };
        default: return state;
    }
}