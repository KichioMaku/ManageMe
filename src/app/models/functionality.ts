import { Priority } from "../enums/priority";
import { State } from "../enums/state";
import { User } from "./user";

export class Functionality {
    functionalityId: string;
    name: string;
    description: string;
    priority: Priority;
    owner: User;
    state: State;

    constructor(functionalityId:string, name: string, description: string, priority: Priority, owner: User, state: State){
        this.functionalityId = functionalityId;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.owner = owner;
        this.state = state;
    }
}
