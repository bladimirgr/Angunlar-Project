import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/core/services/patients/patients.service';
import { MedicalRecordService } from '../../../../core/services/medical-record/medical-record.service';

@Component({
  selector: 'app-info-medical-record',
  templateUrl: './info-medical-record.component.html',
  styleUrls: ['./info-medical-record.component.css']
})
export class InfoMedicalRecordComponent implements OnInit {

  patient: any;
  history: any;
  patientId!: number;

  constructor(
    private medicalRecordService: MedicalRecordService,
    private patientsService: PatientsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((resp) => {
      this.medicalRecordService.GetById(resp['id']).subscribe((history) => {
        this.history = history as unknown as any;
        this.patientsService.GetById(history.patientId).subscribe((patient) => {
          this.patient = patient;
        })
      })
    })

  }

}
