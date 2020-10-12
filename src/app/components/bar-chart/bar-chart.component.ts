import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input()
  dataInput: any[];
  @Input()
  labelsInput: any[];
  @Input()
  colorsInput: any[];

  data: any[];
  labels: any[];
  colors: any[];

  options: any;
  type: any;
  legend: any;
  title: any;
  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
    this.type = 'bar'
    this.legend = true

    this.data = new Array();
    this.labels = new Array();
    this.colors = new Array();
  }
  
  ngOnInit(): void {

    this.getScreenSize();
    this.labels = [this.labelsInput]
    this.title = this.labelsInput
    
    this.data = this.dataInput

    this.colors = this.colorfy()

  }

  //gets the size of the screen and makes necessary adjustments
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if(this.screenWidth > 800){
          this.options['maintainAspectRatio'] = true;
          this.colors = this.colorfy()
        }
        else{
          this.options['maintainAspectRatio'] = false;
          this.colors = this.colorfy()
        }
  }
  
  //returns an object with the backgroundColor property set
  colorfy(){
    return this.colorsInput.map(item =>  {return {backgroundColor: '#' + item}});
  }

}
