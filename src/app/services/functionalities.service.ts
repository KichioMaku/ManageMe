import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Functionality } from '../models/functionality';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  constructor(private http: HttpClient) { }

  public getFunctionalities(url : string) : Observable<Functionality[]>{
    return this.http.get<Functionality[]>(url);
  }
}
