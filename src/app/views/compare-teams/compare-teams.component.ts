import { Title } from '@angular/platform-browser';
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
  twoPointersPercentage: any[];
  threePointersPercentage: any[];
  primary_color: any[];

  loadingState: string;
  
  subscription: Subscription;

  constructor(private service: NbaService, private titleService: Title) { 
    this.loadingState = 'loading'
  }

  ngOnInit(): void {
    this.subscription = this.loadTeamsStats()
    this.titleService.setTitle('NBA 2019 Season Info')
  }

  //gets only one property from items in an array
  pluck(array: any[], key: string) {
    return array.map(item =>  item[key]);
  }
  //returns an object in the format expected by the BarChart component
  pluckData(array: any[], data: string, label: string){
    return array.map(item => {
      return {data: [item[data]], label: item[label]}
    })
  }

  loadTeamsStats(){
    return this.service.getAllTeamsStats().subscribe(response =>{
      this.teams = response
      this.primary_color = this.pluck(this.teams, "primary_color")
      this.loadWinsData()
    })
  }

  loadWinsData(){
    this.wins = this.pluckData(this.teams, "wins", "name")
    this.loadTwoPointersData()
  }

  loadTwoPointersData(){
    this.twoPointersPercentage = this.pluckData(this.teams, "two_pointers_percentage", "name")
    this.loadThreePointersData()
  }

  loadThreePointersData(){
    this.threePointersPercentage = this.pluckData(this.teams, "three_pointers_percentage", "name")
    this.loadingState = 'done'
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    


}
