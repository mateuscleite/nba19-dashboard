import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TeamListComponent } from './views/team-list/team-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'teams', component:TeamListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
