import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { CONFIG } from 'src/app/config';
import { Priority } from 'src/app/enums/priority';
import { User } from 'src/app/models/user';
import { State } from 'src/app/enums/state';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  functionalityId : string ='';
  projectId : string = '';
  tasks: Task[] = [];
  showForm : boolean = false;
  isEdit : boolean = false;
  priority?: Priority;
  state? : State;
  users? : User[];
  buttonOkText = 'Create';
  HeaderText = ``;

  task = {
    id: '0',
    description: '',
    priority: '',
    functionalityId: '',
    deadline: new Date(),
    state: '',
    addDate: '',
    startDate: '',
    endDate: '',
    userId: '',
    surname: ''
  };

  private subscription: Subscription = new Subscription();
  priorityKeys = Object.keys(Priority).filter(k => isNaN(Number(k)));
  stateKeys = Object.keys(State).filter(k => isNaN(Number(k)));
  constructor(private route: ActivatedRoute, private taskService: TaskService ){
  }

  ngOnInit(){
    this.functionalityId = this.route.snapshot.paramMap.get('functionalityId') || '';
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.getTasks()
    this.getUsers();
    this.HeaderText = `Task for functionality with id: ${this.functionalityId}`;
  };


  getTasks(): void {
    let url = `${CONFIG.getTasks}${this.functionalityId}`
    this.taskService
    .getTasks(url)
    .subscribe((result: Task[]) => (this.tasks = result));
  }
  createTask() {
    this.showForm = true;
    this.buttonOkText = 'Create';
    this.isEdit = false;
    this.task.id = '0';
    this.task.description = '';
    this.task.priority = '';
    this.task.functionalityId = '';
    this.task.deadline = new Date();
    this.task.state = '';
    this.task.addDate = '';
    this.task.endDate = '';
    this.task.userId = '';

  }
  cancel() {
    this.showForm = false;
    this.isEdit = false;
  }
  onSubmit() {
    const task = new Task(this.task.id, this.task.description, this.task.priority, this.functionalityId, new Date(this.task.deadline), this.task.state, new Date(), '', '', this.task.userId);

    if(task.state == "Doing")
    {
        task.startDate = new Date().toISOString();
    }
    if(task.state == "Done")
    {
      task.startDate = new Date().toISOString();
      task.endDate = new Date().toISOString();
    }
    
    if(this.isEdit){
      this.showForm = false;
      this.taskService.updateTask(task).subscribe(() =>  this.getTasks());
    }
    else{
    this.showForm = false;
    this.taskService.createTask(task).subscribe(() =>  this.getTasks());
    }
    this.isEdit = false;
  }

  getUsers() : void{
    let url = `${CONFIG.getUsers}`
    this.taskService
    .getUsers(url)
    .subscribe((result: User[]) => (this.users = result));
  }

  editTask(task : Task){
    this.showForm = true;
    this.isEdit = true;
    this.buttonOkText = 'Update';
    this.task.id = task.taskId;
    this.task.description = task.description;
    this.task.priority = task.priority;
    this.task.functionalityId = task.functionalityId;
    this.task.deadline = task.deadline;
    this.task.state = task.state;
    this.task.addDate = task.addDate.toString();
    this.task.endDate = task.endDate;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }
  
  deleteTask(taskId: string): void {
    const confirmation = window.confirm(`You sure you want to delete task with id: ${taskId}?`);

    if (confirmation) {
      this.taskService.deleteTask(taskId).subscribe(() =>  this.getTasks());
    } else {
      console.log("Delete project not confirmed")
    }
  }
}
