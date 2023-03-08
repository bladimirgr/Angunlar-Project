import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { MedicalRecordService } from 'src/app/core/services/medical-record/medical-record.service';
import { PatientsService } from '../../../../core/services/patients/patients.service';

@Component({
  selector: 'app-list-medical-record',
  templateUrl: './list-medical-record.component.html',
  styleUrls: ['./list-medical-record.component.css']
})
export class ListMedicalRecordComponent implements OnInit {

  medicalList: any [] = [];

  constructor(
    private medicalRecordService: MedicalRecordService
  ) {}

  ngOnInit() {
    this.medicalRecordService.GetList().subscribe((resp) => {
      this.medicalList = resp as unknown as [];
    })
  }

}
