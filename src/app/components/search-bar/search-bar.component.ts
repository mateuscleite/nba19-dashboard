import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  placeholderText: String;
  
  @Output() 
  requestSearch = new EventEmitter();

  text: string;

  constructor() {
    this.text = ''
  }

  ngOnInit(): void {
  }

  updateSearch(searchField: string){
    this.text = searchField.trim().toUpperCase();
  }

  searchItem(searchField: string){
    this.text = searchField.trim().toUpperCase();
    this.requestSearch.emit(this.text)
  }
}
