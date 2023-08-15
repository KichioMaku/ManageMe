export class User {
    userId: string;
    login: string;
    password: string;
    surname: string;
    entitlements: string;

    constructor(userId: string, login: string, password: string, surname: string, entitlements: string){
        this.userId = userId
        this.login = login;
        this.password = password;
        this.surname = surname;
        this.entitlements = entitlements;
    }
}
