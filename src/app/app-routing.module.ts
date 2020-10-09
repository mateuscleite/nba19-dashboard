import { SearchPlayerComponent } from './views/search-player/search-player.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TeamListComponent } from './views/team-list/team-list.component';
import { TeamDetailsComponent } from './views/team-details/team-details.component';
import { PlayersListComponent } from './views/players-list/players-list.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'teams', component:TeamListComponent},
  {path:'teams/:id', component:TeamDetailsComponent},
  {path:'players', component:PlayersListComponent},
  {path:'players/:id', component:PlayerDetailsComponent},
  {path:'search', component:SearchPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
