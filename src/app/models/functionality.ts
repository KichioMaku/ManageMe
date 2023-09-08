
export class Functionality {
    functionalityId: string;
    name: string;
    description: string;
    priority: string;
    surname: string;
    state: string;
    projectId?: number;

    constructor(functionalityId:string, name: string, description: string, priority: string, surname: string, state: string){
        this.functionalityId = functionalityId;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.surname = surname;
        this.state = state;
    }
}
