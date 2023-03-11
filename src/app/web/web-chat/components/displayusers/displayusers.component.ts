import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent implements OnInit {

  @Input() users: any [] = [];

  constructor() {}

  ngOnInit() {

    console.log('%c⧭', 'color: #364cd9', this.users);
  }

}
