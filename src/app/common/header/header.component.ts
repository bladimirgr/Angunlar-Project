import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!: string | null

  constructor() { }

  ngOnInit(): void {

    this.username = localStorage.getItem('x-user')
    
  }

}