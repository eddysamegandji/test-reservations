import { Bus } from "./bus.model";

export interface Trajet {
    id: number;
    nbrPlaces: number;
    dateDepart: Date;
    trajetPrice: number;
    bus: Bus;
}