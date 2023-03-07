import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PatientsService } from '../../../../core/services/patients/patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patientList!: any []
  @Input() selectedPatient!: any

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit() {

    this.patientsService.GetList().subscribe((resp) => {
      this.patientList = resp as unknown as [];
    })
  }

}
