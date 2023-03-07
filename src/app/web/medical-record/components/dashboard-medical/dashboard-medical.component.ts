import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import { PatientsResponse } from '../../../patients/interfaces/patients.interfaces';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../../../core/services/appointment/appointment.service';

@Component({
  selector: 'app-dashboard-medical',
  templateUrl: './dashboard-medical.component.html',
  styleUrls: ['./dashboard-medical.component.css']
})
export class DashboardMedicalComponent implements OnInit {

  patient!: PatientsResponse;
  patientId!: number;
  service: any

  items: any [] = [
    "Senasa Contributivo",
    "Senasa Susidiado",
    "Humano",
    "Mapfre Salud",
    "Ars Simag"
  ];

  constructor(
    private patientsService: PatientsService,
    private appointmentService: AppointmentService  ,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((resp) => {
       this.patientId = resp['id'];

      this.patientsService.GetById(this.patientId).subscribe((resp) => {
        this.patient = resp;

        this.appointmentService.GetByPatientId(this.patientId).subscribe((resp) => {
          this.service = resp[0]?.service
        })
  
      })
    })

  }

}
