import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/internal/Observable'
import { Project } from '../models/project';
import { CONFIG } from '../config';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(url : string) : Observable<Project[]> {
    console.log(url);
    return this.http.get<Project[]>(url)
  }
  createProject(project : Project) {
    return this.http.post(CONFIG.createProject, project);
  }

  deleteProject(id: string) {
    return this.http.delete(`${CONFIG.deleteProject}/${id}`);
  }
}