import { Cnd } from "./cnd.model";
import { Vehicles } from "./vehicles.model";

export interface Rider {
    _id: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    birthCity: string;
    residenceAddress: string;
    residenceCity: string;
    residenceCap: string;
    domicileAddress: string;
    domicileCity: string;
    domicileCap: string;
    description: string;
    notEuCitizen: boolean;
    fiscalCode: string;
    vehicles: Vehicles[];
    cnd: Cnd[];

}