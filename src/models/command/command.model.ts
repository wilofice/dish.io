export interface Command {
    key?: string;
    restaurantKey: string;
    restaurantName: string;
    dishName: string;
    dateCommand: string;
    heureCommand: string;
    quantite: number;
    total: number;
    nomClient: string;
    prenomClient: string;
    addresseClient: string;
    phoneClient: string;
    status: boolean;
}