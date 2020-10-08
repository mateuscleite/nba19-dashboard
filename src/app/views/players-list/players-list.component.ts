import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: any[] = new Array();
  subscription: Subscription;

  constructor(private service: NbaService) { }

  ngOnInit(): void {
    this.loadPlayers()
  }

  loadPlayers(){
    this.subscription = this.service.getPlayersList()
      .subscribe(response =>{
        this.players = response
        console.log(this.players)
      })
  }

}
