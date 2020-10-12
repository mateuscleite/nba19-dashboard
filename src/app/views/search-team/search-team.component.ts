import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css', '../../styles/card.css', '../../styles/team-card-list.css']
})
export class SearchTeamComponent implements OnInit {

  parameter: string;
  type: string;
  teams: any[] = new Array();
  loadingState: string;
  subscription: Subscription;
  querySubscription: Subscription;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: NbaService, private titleService: Title) { }

  ngOnInit(): void {
    this.querySubscription = this.getQueryParams();
    this.loadingState = 'loading'
    this.searchTeams();
  }

  searchTeams(){
    this.router.navigate(['/teams/search'], {queryParams: {type: 'team', search: this.parameter}})
    this.titleService.setTitle(`Searching team: ${this.parameter}`);
    this.subscription = this.service.getTeamsSearch(this.parameter).subscribe(response =>{
      this.teams = response
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
      this.searchTeams()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
