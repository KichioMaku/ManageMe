import { Priority } from "../enums/priority";
import { State } from "../enums/state";
import { User } from "./user";

export class Task{
    taskId: string;
    description: string;
    priority: string;
    functionalityId: string;
    deadline: Date;
    state: string;
    addDate: Date;
    startDate: string;
    endDate: string;
    userId: string;


    constructor(taskId: string, description: string, priority: string, functionalityId: string, deadline: Date, state: string, addDate: Date, startDate: string, endDate: string, userId: string) {
        this.taskId = taskId;
        this.description = description;
        this.priority = priority;
        this.functionalityId = functionalityId;
        this.deadline = deadline;
        this.state = state;
        this.addDate = addDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;
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