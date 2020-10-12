import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  dataInput: any[];
  @Input()
  labelsInput: any[];
  @Input()
  title: string

  data: any[];
  labels: any[];

  type: any;
  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.type = 'pie'

    this.data = new Array();
    this.labels = new Array();
  }
  
  ngOnInit(): void {
    this.labels = this.labelsInput
    this.data = this.dataInput
  }

}
