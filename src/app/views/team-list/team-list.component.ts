import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from './../../services/nba.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css', '../../styles/card.css', '../../styles/team-card-list.css']
})
export class TeamListComponent implements OnInit {

  teams: any[] = new Array();
  loadingState: string;
  subscription: Subscription;

  constructor(
    private router: Router, 
    private service: NbaService, 
    private titleService: Title) { 

      this.loadingState = 'loading'
  }

  ngOnInit(): void {
    this.loadTeams()
    this.titleService.setTitle("NBA Teams")
  }

  loadTeams(){
    this.subscription = this.service.getTeamsList()
      .subscribe(response =>{
        this.teams = response
        this.loadingState = 'done'
      })
  }

  searchTeam(parameter){
    console.log(parameter)
    if(parameter !== ''){
      this.router.navigate(['/teams/search'], {queryParams: {type: 'team', search: parameter}});
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
