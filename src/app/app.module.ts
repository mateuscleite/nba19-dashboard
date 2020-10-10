import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageDefaultComponent } from './views/page-default/page-default.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './views/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TeamListComponent } from './views/team-list/team-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersListComponent } from './views/players-list/players-list.component';
import { TeamDetailsComponent } from './views/team-details/team-details.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { SearchPlayerComponent } from './views/search-player/search-player.component';
import { SearchTeamComponent } from './views/search-team/search-team.component';
import { RatioPipe } from './pipes/ratio.pipe';
import { SeasonTypePipe } from './pipes/season-type.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { HeightInMetersPipe } from './pipes/height-in-meters.pipe';
import { AgePipe } from './pipes/age.pipe';
import { WeightInKgPipe } from './pipes/weight-in-kg.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PageDefaultComponent,
    ContentComponent,
    HomeComponent,
    SearchBarComponent,
    TeamListComponent,
    PlayersListComponent,
    TeamDetailsComponent,
    PlayerDetailsComponent,
    SearchPlayerComponent,
    SearchTeamComponent,
    RatioPipe,
    SeasonTypePipe,
    PositionPipe,
    HeightInMetersPipe,
    AgePipe,
    WeightInKgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
