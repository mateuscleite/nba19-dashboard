import { TeamsService } from './../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: any[] = new Array();
  subscription: Subscription;

  constructor(private service: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams()
  }

  loadTeams(){
    this.subscription = this.service.getTeamsList()
      .subscribe(response =>{
        this.teams = response
        console.log(this.teams)
      })
  }

}
