import { User } from "../models/user.model";

export const USERS: User[] = [
    {
        email: "prova@mail.it",
        username: "giulia-rider",
        password: "giulia1",
        token: "1234",
        userId: 1,
        rider_Id: 1,
        restaurantOwner_Id: 0,
    },
    {
        email: "prova2@mail.it",
        username: "giulia-owner",
        password: "giulia2",
        token: "4567",
        userId: 2,
        rider_Id: 0,
        restaurantOwner_Id: 1,
    },
]