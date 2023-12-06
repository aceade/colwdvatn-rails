import { createContext } from 'react';

/**
 * Dates are deliberately excluded here
 */
export interface CartTicket {
    from: string;
    to: string;
    price: number;
}

const cart: CartTicket[] = [];

export const CartContext = createContext(cart);