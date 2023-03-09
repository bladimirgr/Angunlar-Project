import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-whatsapp',
  templateUrl: './icon-whatsapp.component.html',
  styleUrls: ['./icon-whatsapp.component.css']
})
export class IconWhatsappComponent implements OnInit {

  displayMaximizable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.displayMaximizable = true;
  }

  hideModal(): void {
    this.displayMaximizable = false;
  }

}
