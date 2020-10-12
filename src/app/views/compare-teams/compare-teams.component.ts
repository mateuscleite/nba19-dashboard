import { NbaService } from 'src/app/services/nba.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-teams',
  templateUrl: './compare-teams.component.html',
  styleUrls: ['./compare-teams.component.css']
})
export class CompareTeamsComponent implements OnInit {

  teams: any[];
  wins: any[];
  primary_color: any[];

  loadingState: string;
  
  subscription: Subscription;

  constructor(private service: NbaService) { 
    this.loadingState = 'loading'
  }

  ngOnInit(): void {
    this.subscription = this.loadTeamsStats()
  }

  //gets only one property from items ins an array
  pluck(array: any[], key: string) {
    return array.map(item =>  item[key]);
  }
  pluckData(array: any[], data: string, label: string){
    return array.map(item => {
      return {data: [item[data]], label: item[label]}
    })
  }

  loadTeamsStats(){
    return this.service.getAllTeamsStats().subscribe(response =>{
      this.teams = response
      this.loadWinsData()
      this.loadingState = 'done'
    })
  }

  loadWinsData(){
    this.wins = this.pluckData(this.teams, "wins", "name")
    this.primary_color = this.pluck(this.teams, "primary_color")
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    


}
