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
      this.patientId =  resp['id']
      this.medicalRecordService.GetByPatientId(resp['id']).subscribe((resp) => {

        this.history = resp as unknown as [];
        
        console.log('%c⧭', 'color: #ace2e6', this.history.length);
    
        this.patientsService.GetById(this.patientId).subscribe((resp) => {
          this.patient = resp;


          console.log('%c⧭', 'color: #cc7033', resp);
          
        })

        console.log('%c⧭', 'color: #5200cc', resp);
      })
    })

  }

}
