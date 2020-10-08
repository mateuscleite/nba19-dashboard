import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getTeamsList(){
    return this.http.get<any[]>(`${this.API}teams`)
  }
}
