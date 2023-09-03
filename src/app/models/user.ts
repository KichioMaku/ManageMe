import { Entitlements } from "../enums/entitlements";

export class User {
    userId: string;
    login: string;
    password: string;
    surname: string;
    entitlements: Entitlements;

    constructor(userId: string, login: string, password: string, surname: string, entitlements: Entitlements){
        this.userId = userId
        this.login = login;
        this.password = password;
        this.surname = surname;
        this.entitlements = entitlements;
    }
}
