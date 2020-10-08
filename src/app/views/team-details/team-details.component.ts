import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from './../../services/nba.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team: any = new Object();
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.team['team_id'] = parseInt(params['id'])
      this.service.getTeamDetails(this.team['team_id']).subscribe(response => {
        this.team = response
        console.log(this.team)
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
