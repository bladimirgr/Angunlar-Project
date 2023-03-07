import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from 'src/app/core/services/medical-record/medical-record.service';
import { MedicalRecordResponse } from '../../interfaces/medical-record.interfaces';

@Component({
  selector: 'app-list-medical-record',
  templateUrl: './list-medical-record.component.html',
  styleUrls: ['./list-medical-record.component.css']
})
export class ListMedicalRecordComponent implements OnInit {

  list: any [] = [];

  constructor(
    private medicalRecordService: MedicalRecordService 
  ) {}

  ngOnInit() {

    this.medicalRecordService.GetList().subscribe((resp) => {
      this.list = resp as unknown as [];

      console.log('%c⧭', 'color: #733d00', this.list);
    })
  }

}
