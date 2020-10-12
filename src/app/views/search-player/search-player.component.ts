import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css', '../../styles/card.css', '../../styles/player-card-list.css']
})
export class SearchPlayerComponent implements OnInit {

  parameter: string;
  type: string;
  players: any[] = new Array();
  loadingState: string;
  subscription: Subscription;
  querySubscription: Subscription;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService, private titleService: Title) { }

  ngOnInit(): void {
    this.querySubscription = this.getQueryParams();
    this.loadingState = 'loading'
    this.searchPlayers();
  }

  searchPlayers(){
    this.router.navigate(['/players/search'], {queryParams: {type: 'player', search: this.parameter}})
    this.titleService.setTitle(`Searching player: ${this.parameter}`);
    this.subscription = this.service.getPlayersSearch(this.parameter).subscribe(response =>{
      this.players = response
      this.loadingState = 'done'
    })
  }

  getQueryParams(){
    return this.route.queryParams.subscribe(params => {
      this.parameter = params['search']
      this.type = params['type'] 
    })
  }

  newSearch(parameter){
    this.parameter = parameter
    if(parameter !== ''){
      this.loadingState = 'loading'
      this.searchPlayers()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
