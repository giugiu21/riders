import { Cnd } from "./cnd.model";

export interface Ads{
    dateStartAd: string;
    dateFinishAd: string;
    //ge0_Radius_Km: 0;
    text: string;
    resaturant_Id: string;
    vehicleType: string;
    cnd: Cnd[];
}