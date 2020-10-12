import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  menuActive: boolean;
  screenHeight: number;
  screenWidth: number;

  constructor() { 
    this.menuActive = false;
    this.getScreenSize();
  }
  
  ngOnInit(): void {
  }

  //gets the size of the window and makes the necessary adjustments
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if(this.screenWidth > 800){
          this.menuActive = true;
        }
        else{
          this.menuActive = false;
        }
  }

  //toggle menu on/off
  showMenu(){
    if(this.screenWidth <= 800){
      this.menuActive = !this.menuActive
    }
  }

}
