import { Restaurant } from "./restaurant.model";

export interface RestaurantOwner{
    _id: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    taxCode: string;
    restaurants: Restaurant[];
}