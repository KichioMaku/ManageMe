import { Functionality } from "./functionality";
import { User } from "./user";

export class Task{
    taskId: string;
    description: string;
    priority: Priority;
    functionality: Functionality;
    deadline: Date;
    state: State;
    addDate: Date;
    startDate: Date;
    endDate: Date;
    user: User


    constructor(taskId: string, description: string, priority: Priority, functionality: Functionality, deadline: Date, state: State, addDate: Date, startDate: Date, endDate: Date, user: User) {
        this.taskId = taskId;
        this.description = description;
        this.priority = priority;
        this.functionality = functionality;
        this.deadline = deadline;
        this.state = state;
        this.addDate = addDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.user = user;
    }
}












/*
Nazwa

· Opis

· Priorytet

· Funkcjonalność do której przynależy zadanie

· Przewidywany czas wykonania

· Stan (todo, doing, done). Zadanie ze stanem doing musi posiadać czas startu oraz przypisanego użytkownika. Zadanie ze stanem done posiada przypisanego użytkownika oraz datę zakończenia

· Data dodania

· Data startu (stan zmieniony na doing)

· Data zakończenia (stan zmieniony na done)

· Użytkownik odpowiedzialny za zadanie (devops lub developer)
*/