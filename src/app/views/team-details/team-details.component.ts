import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from './../../services/nba.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css', 
    '../../styles/card.css', 
    '../../styles/player-card-list.css',
    '../../styles/details.css']
})
export class TeamDetailsComponent implements OnInit {

  team: any = new Object();
  players: any[] = new Array(); 
  loadingState: string;
  subscription: Subscription;
  lineupSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService, private titleService: Title) { }

  ngOnInit(): void {
    this.loadingState = 'loading'
    this.loadTeamsDetails();
  }

  loadTeamsDetails(){
    this.subscription = this.route.params.subscribe((params: any) => {
          this.team['team_id'] = parseInt(params['id'])
          this.service.getTeamDetails(this.team['team_id']).subscribe(response => {
            this.team = response[0];
            let title: string = `${this.team['name']}`;
            this.titleService.setTitle(title);
            console.log(this.team)
            this.loadTeamLineup();
          })
        })
  }

  loadTeamLineup(){
    this.lineupSubscription = this.service.getTeamLineup(this.team['team_id']).subscribe(response =>{
      this.players = response;
      this.loadingState = 'done'
      console.log(this.players)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.lineupSubscription.unsubscribe();
  }

}
