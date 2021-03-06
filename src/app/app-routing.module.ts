import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareTeamsComponent } from './views/compare-teams/compare-teams.component';
import { SearchPlayerComponent } from './views/search-player/search-player.component';
import { HomeComponent } from './views/home/home.component';
import { TeamListComponent } from './views/team-list/team-list.component';
import { TeamDetailsComponent } from './views/team-details/team-details.component';
import { SearchTeamComponent } from './views/search-team/search-team.component';
import { PlayersListComponent } from './views/players-list/players-list.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'teams', component:TeamListComponent},
  {path:'teams/search', component:SearchTeamComponent},
  {path:'teams/:id', component:TeamDetailsComponent},
  {path:'players', component:PlayersListComponent},
  {path:'players/search', component:SearchPlayerComponent},
  {path:'players/:id', component:PlayerDetailsComponent},
  {path:'seasonInfo', component:CompareTeamsComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
