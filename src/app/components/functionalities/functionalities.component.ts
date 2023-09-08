import { Component } from '@angular/core';
import { Functionality } from 'src/app/models/functionality';
import { Subscription, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { CONFIG } from 'src/app/config';
import { Priority } from 'src/app/enums/priority';
import { State } from 'src/app/enums/state';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.scss']
})
export class FunctionalitiesComponent {
    projectId : string ='';
    functionalities: Functionality[] = [];
    showForm : boolean = false;
    isEdit : boolean = false;
    priority?: Priority;
    state? : State;
    users? : User[];
    buttonOkText = 'Create';
    HeaderText = ``;

    functionality = {
      id: '',
      name: '',
      description: '',
      priority:'',
      userId: '',
      state: '',
    };

    private subscription: Subscription = new Subscription();
    priorityKeys = Object.keys(Priority).filter(k => isNaN(Number(k)));
    stateKeys = Object.keys(State).filter(k => isNaN(Number(k)));
    constructor(private route: ActivatedRoute, private functionalitiesService: FunctionalitiesService ){
    }

    ngOnInit(){
      this.projectId = this.route.snapshot.paramMap.get('id') || '';
      this.getFunctionalities()
      this.getUsers();
      this.HeaderText = `Functionalities for project with id: ${this.projectId}`;
    };
    getFunctionalities(): void {
      let url = `${CONFIG.getFunctionalities}${this.projectId}`
      this.functionalitiesService
      .getFunctionalities(url)
      .subscribe((result: Functionality[]) => (this.functionalities = result));
    }
    createFunctionality() {
      this.functionality.description = '';
      this.functionality.name = '';
      this.functionality.priority = '';
      this.functionality.state = '';
      this.functionality.userId = '';
      this.functionality.id = '0';
      this.showForm = true;
      this.buttonOkText = 'Create';
    }
    cancel() {
      this.showForm = false;
      this.isEdit = false;
    }
    onSubmit() {
      const func = new Functionality(this.functionality.id, this.functionality.name, this.functionality.description, this.functionality.priority, this.functionality.userId, this.functionality.state);
      func.projectId = Number(this.projectId);
      if(this.isEdit){
        this.showForm = false;
        this.functionalitiesService.updateFunctionality(func, this.projectId.toString()).subscribe(() =>  this.getFunctionalities());
      }
      else{
      this.showForm = false;
      this.functionalitiesService.createFunctionality(func, this.projectId.toString()).subscribe(() =>  this.getFunctionalities());
      }
      this.isEdit = false;
    }
    getUsers() : void{
      let url = `${CONFIG.getUsers}`
      this.functionalitiesService
      .getUsers(url)
      .subscribe((result: User[]) => (this.users = result));
    }

    editFunctionality(func : Functionality){
      this.showForm = true;
      this.isEdit = true;
      this.buttonOkText = 'Update';
      this.functionality.id = func.functionalityId;
      this.functionality.description = func.description;
      this.functionality.name = func.name;
      this.functionality.priority = func.priority;
      this.functionality.state = func.state;
      let user =  this.users?.find(user => user.surname === func.surname);
      this.functionality.userId = user?.userId.toString() || "";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    deleteFunctionality(functionalityId: string, functionalityName: string): void {
      const confirmation = window.confirm(`You sure you want to delete ${functionalityName} project?`);

      if (confirmation) {
        this.functionalitiesService.deleteFunctionality(functionalityId).subscribe(() =>  this.getFunctionalities());
      } else {
        console.log("Delete project not confirmed")
      }
    }
}
