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
  pointsByPosition: any[] = new Array();
  primary_color: any[] = new Array();
  position: any[] = new Array();
  loadingState: string;
  subscription: Subscription;
  lineupSubscription: Subscription;
  pointsByPositionSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService, private titleService: Title) { }

  ngOnInit(): void {
    this.loadingState = 'loading'
    this.loadTeamsDetails();
  }

  //gets only one property from items ins an array
  pluck(array: any[], key: string) {
    return array.map(item =>  item[key]);
  }

  loadTeamsDetails(){
    this.subscription = this.route.params.subscribe((params: any) => {
          this.team['team_id'] = parseInt(params['id'])
          this.service.getTeamDetails(this.team['team_id']).subscribe(response => {
            this.team = response[0];
            let title: string = `${this.team['name']}`;
            this.titleService.setTitle(title);
            this.loadTeamLineup();
          })
        })
  }

  loadTeamLineup(){
    this.lineupSubscription = this.service.getTeamLineup(this.team['team_id']).subscribe(response =>{
      this.players = response;
      this.loadPointsByPosition()
    })
  }

  loadPointsByPosition(){
    this.pointsByPositionSubscription = this.service.getPointsByPosition(this.team['team_id']).subscribe(response =>{
      this.pointsByPosition = response
      this.position = this.pluck(this.pointsByPosition, 'position')
      this.pointsByPosition = this.pluck(this.pointsByPosition, 'total_points')
      this.loadingState = 'done'
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.lineupSubscription.unsubscribe();
  }

}
