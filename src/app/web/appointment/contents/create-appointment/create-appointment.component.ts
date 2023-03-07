import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';
import { AppointmentService } from 'src/app/core/services/appointment/appointment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorResponse } from 'src/app/web/doctors/interfaces/doctor.intefaces';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  doctors: DoctorResponse [] = [];
  services: any [] = [];
  name!: string;
  patientId!: number;
  currentDate: any;
  display: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService,
    private appointmentService: AppointmentService,
    private patientsService: PatientsService,
    private router: Router
  ) { }

  appointmentForm: FormGroup = this.formBuilder.group({
    record:      [],
    service:     [Validators.required],
    patientId:   [],
    patientName: [],
    doctorId:    [Validators.required],
    status:      ['Pendiente Consulta'],
    isActive:    [true],
    createdAt:   [],
    updatedAt:   [],
    createdBy:   [localStorage.getItem('x-user')],
    updatedBy:   []

  })

  ngOnInit() {
   
    this.currentDate = new Date().toISOString().slice(0, 10);

    this.services = [
      {
        "id": 1,
        "name": "Consulta Anestesia"
       },
       {
        "id": 2,
        "name": "Consulta Cardiologia"
       }
    ]

    this.doctorsService.GetList().subscribe((resp: DoctorResponse []) => {
      this.doctors = resp;
    })

  }

  search(event: any) {
    this.patientsService.GetPatient(event.target.value).subscribe((resp) => {
      var firstName = resp[0]?.firstName
      var lastName = resp[0]?.lastName
      this.name = firstName + ' ' + lastName
      this.appointmentForm.controls["patientId"].patchValue(resp[0]?.id);
    })
  }

  create(): void {
    if(this.appointmentForm.valid) {
      this.appointmentService.Create(this.appointmentForm.value).subscribe((resp) => {
        if(resp) {
          this.alertMessage(resp.record,resp.patientName)
          this.router.navigateByUrl('appointment/list')
        }
      })
    } else {
      this.appointmentForm.markAllAsTouched
    }
  }

  showDialog() {
    this.display = true;
  } 

  clear(): void {
    this.appointmentForm.reset();
  }

  alertMessage(record: string, patientName: string): void {
    Swal.fire({
      title: `Record: ${record}`,
      text: `Nombre Paciente: ${patientName}`,
      icon: 'success',
    })
  }

}
