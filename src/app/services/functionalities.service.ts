import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Functionality } from '../models/functionality';
import { CONFIG } from '../config';
import { User } from '../models/user';

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
    console.log(`${CONFIG.deleteProject}/${projectId}`);
    return this.http.post(`${CONFIG.deleteProject}/${projectId}`, functionality);
  }
}
