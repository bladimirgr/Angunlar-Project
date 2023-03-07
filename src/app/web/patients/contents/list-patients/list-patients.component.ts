import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../../../core/services/patients/patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {

    this.patientsService.GetList().subscribe((resp) => {

      console.log('%c⧭', 'color: #007300', resp);
    })
  }

}
