import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() list: any[] = [];

  constructor(
    
  ) { }

  ngOnInit() {

  }

  search(termino:string): void {
    
    console.log('%c⧭', 'color: #00736b', "services");
  }

}
