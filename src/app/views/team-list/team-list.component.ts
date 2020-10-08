import { NbaService } from './../../services/nba.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css', '../../styles/card.css']
})
export class TeamListComponent implements OnInit {

  teams: any[] = new Array();
  subscription: Subscription;

  constructor(private service: NbaService) { }

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
