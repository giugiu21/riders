import { Ads } from "./ads.model";

export interface Restaurant{
    cap: string;
    city: string;
    //lat: 0;
    //long: 0;
    address: string;
    name: string;
    phoneNumber: string;
    email: string;
    taxCode: string;
    ads: Ads[];

}