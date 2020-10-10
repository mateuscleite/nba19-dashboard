import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player: any = new Object();
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService, private titleService: Title) { }

  ngOnInit(): void {
    this.loadPlayerDetails();
  }

  loadPlayerDetails(){
    this.subscription = this.route.params.subscribe((params: any) => {
      this.player['player_id'] = parseInt(params['id'])
      this.service.getPlayerDetails(this.player['player_id']).subscribe(response => {
        this.player = response[0]
        this.titleService.setTitle(`${this.player['first_name']} ${this.player['last_name']}`);
        console.log(this.player)
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
