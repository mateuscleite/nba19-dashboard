import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getPlayersList(){
    return this.http.get<any[]>(`${this.API}players`)
  }

  getPlayerDetails(id: number){
    return this.http.get<any>(`${this.API}players/${id}`)
  }

  getPlayersSearch(name: string){
    return this.http.get<any>(`${this.API}players/name/${name}`)
  }

  getTeamsList(){
    return this.http.get<any[]>(`${this.API}teams`)
  }

  getTeamDetails(id: number){
    return this.http.get<any>(`${this.API}teams/${id}`)
  }

  getTeamsSearch(name: string){
    return this.http.get<any>(`${this.API}teams/name/${name}`)
  }

  getTeamLineup(id: number){
    return this.http.get<any[]>(`${this.API}teams/${id}/lineup`)
  }
}
