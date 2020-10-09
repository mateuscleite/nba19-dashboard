import { ActivatedRoute, Router } from '@angular/router';
import { Paginator } from './../../classes/paginator';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css', '../../styles/card.css']
})
export class PlayersListComponent implements OnInit {

  players: any[] = new Array();
  playersDisplayed: any[] = new Array();
  count: number;
  offset: number;
  limit: number;
  page: Paginator;
  subscription: Subscription;
  querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService) { 
    this.offset = 0;
    this.limit = 40;
  }

  ngOnInit(): void {
    this.querySubscription = this.getCurrentOffset();
    this.loadPlayers()
  }

  loadPlayers(){
    this.subscription = this.service.getPlayersList()
      .subscribe(response =>{
        this.players = response
        this.count = this.players.length
        this.page = new Paginator(this.players, this.playersDisplayed, this. count, this.offset, this.limit);
        this.playersDisplayed = this.page.getPage('current')
        this.offset = this.page.getOffset()
      })
  }

  getCurrentOffset(){
    return this.route.queryParams.subscribe(queryParams => {
      this.offset = parseInt(queryParams['offset'])
    })
  }

  nextPage(){
    this.playersDisplayed = this.page.getPage('next')
    this.offset = this.page.getOffset()
    this.router.navigate(['/players'], {queryParams: {offset: this.offset}});
  }

  previousPage(){
    this.playersDisplayed = this.page.getPage('previous')
    this.offset = this.page.getOffset()
    this.router.navigate(['/players'], {queryParams: {offset: this.offset}});
  }

}
