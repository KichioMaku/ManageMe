import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CONFIG } from '../config';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  public getTasks(url : string) : Observable<Task[]>{
    return this.http.get<Task[]>(url);
  }

  public getUsers(url : string) : Observable<User[]>{
    return this.http.get<User[]>(url);
  }
  createTask(task : Task) {
    console.log(task);
    return this.http.post(`${CONFIG.createTask}`, task);
  }

  updateTask(task : Task) {
    console.log(task);
    return this.http.put(`${CONFIG.createTask}`, task);
  }
  deleteTask(id: string) {
    return this.http.delete(`${CONFIG.deleteTask}/${id}`);
  }
}
