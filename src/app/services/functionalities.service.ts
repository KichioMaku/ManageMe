import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Functionality } from '../models/functionality';
import { CONFIG } from '../config';
import { User } from '../models/user';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  constructor(private http: HttpClient) { }

  public getFunctionalities(url : string) : Observable<Functionality[]>{
    return this.http.get<Functionality[]>(url);
  }
  public getUsers(url : string) : Observable<User[]>{
    return this.http.get<User[]>(url);
  }
  createFunctionality(functionality : Functionality, projectId : string) {
    console.log(functionality);
    return this.http.post(`${CONFIG.createFunctionality}/${projectId}`, functionality);
  }

  updateFunctionality(functionality : Functionality, projectId : string) {
    console.log(functionality);
    return this.http.put(`${CONFIG.createFunctionality}/${projectId}`, functionality);
  }
  deleteFunctionality(id: string) {
    return this.http.delete(`${CONFIG.deleteFunctionality}/${id}`);
  }
  public getTasks(url : string) : Observable<Task[]>{
    let tasks = this.http.get<Task[]>(url);
    return tasks;
  }
}
