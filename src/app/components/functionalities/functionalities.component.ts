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
    priority?: Priority;
    state? : State;
    users? : User[];

    functionality = {
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
    };
    getFunctionalities(): void {
      let url = `${CONFIG.getFunctionalities}${this.projectId}`
      this.functionalitiesService
      .getFunctionalities(url)
      .subscribe((result: Functionality[]) => (this.functionalities = result));
    }
    createFunctionality() {
      this.showForm = true;
    }
    cancel() {
      this.showForm = false;
    }
    onSubmit() {
      console.log(this.functionality);
      this.showForm = false;
      const func = new Functionality("0", this.functionality.name, this.functionality.description, this.functionality.priority, this.functionality.userId, this.functionality.state);
      func.projectId = Number(this.projectId);
      this.functionalitiesService.createFunctionality(func, this.projectId.toString()).subscribe(() =>  this.getFunctionalities());
    }
    getUsers() : void{
      let url = `${CONFIG.getUsers}`
      this.functionalitiesService
      .getUsers(url)
      .subscribe((result: User[]) => (this.users = result));
    }

}
