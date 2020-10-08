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
import { PlayersListComponent } from './views/players-list/players-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PageDefaultComponent,
    ContentComponent,
    HomeComponent,
    SearchBarComponent,
    TeamListComponent,
    PlayersListComponent
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
