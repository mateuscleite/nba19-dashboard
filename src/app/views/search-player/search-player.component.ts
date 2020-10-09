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
  subscription: Subscription;
  querySubscription: Subscription;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService) { }

  ngOnInit(): void {
    this.querySubscription = this.getQueryParams();
    this.searchPlayers();
  }

  searchPlayers(){
    this.router.navigate(['/search'], {queryParams: {type: 'player', search: this.parameter}})
    console.log("Searching: " + this.parameter)
    this.subscription = this.service.getPlayersSearch(this.parameter).subscribe(response =>{
      this.players = response
      console.log(this.players)
    })
  }

  getQueryParams(){
    return this.route.queryParams.subscribe(params => {
      this.parameter = params['search']
      this.type = params['type'] 
      console.log('GET query params: ' + this.parameter)
    })
  }

  newSearch(parameter){
    this.parameter = parameter
    console.log("New Search function: " + parameter)
    if(parameter !== ''){
      this.searchPlayers()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
