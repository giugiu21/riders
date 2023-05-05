import { Restaurant } from "./restaurant.model";

export interface RestaurantOwner{
    _id: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    taxCode: string;
    restaurants: Restaurant[];
}