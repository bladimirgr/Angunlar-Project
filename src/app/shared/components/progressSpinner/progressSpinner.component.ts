import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressSpinner',
  templateUrl: './progressSpinner.component.html',
  styleUrls: ['./progressSpinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  @Input() showAndHide: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
