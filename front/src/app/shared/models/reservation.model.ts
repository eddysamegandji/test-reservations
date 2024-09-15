import { Client } from "./client.model";
import { Trajet } from "./trajet.model";

export interface Reservation {
    id: number;
    client : Client;
    trajets: Trajet[];
    reservationPrice: number;
    reservationDate: Date;
    nbBillets: number;
    isPaid: boolean;
    paymentMethod: string;
}