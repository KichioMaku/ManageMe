export class project {
    projectId: string;
    name: string;
    description: string;

    constructor(projectId:string, name: string, description: string){
        this.projectId = projectId;
        this.name = name;
        this.description = description;
    }
}