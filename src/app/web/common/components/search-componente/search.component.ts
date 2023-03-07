import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SeachComponent implements OnInit {

  Items: any;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  search(): void {
    this.onSubmit.emit(this.Items)
  }

}
