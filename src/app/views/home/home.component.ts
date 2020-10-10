import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../styles/card.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('NBA 2019 Dashboard');
  }

  ngOnInit(): void {
    this.titleService.setTitle('NBA 2019 Dashboard');
  }

}
