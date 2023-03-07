import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/handlers/validations/validator.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  errorMessages!: string;

  @Input() control!: AbstractControl;
  
  constructor() {
  
  }

  ngOnInit() {
  }

  get errorMessage(){
    for(let propertyname in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyname) && this.control.touched){
        return ValidatorService.getErrormessages(propertyname,this.control.errors[propertyname]);
      }
    }
    return null;
  }

}

