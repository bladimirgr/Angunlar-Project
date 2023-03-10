import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';
import { AppointmentService } from 'src/app/core/services/appointment/appointment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorResponse } from 'src/app/web/doctors/interfaces/doctor.intefaces';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServicesService } from '../../../../core/services/services/services.service';
import { ServicesResponse } from '../../../common/interfaces/services.interfaces';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  doctors: DoctorResponse [] = [];
  services: ServicesResponse [] = [];
  name!: string;
  record!: number;
  patientId!: number;
  currentDate: any;
  display: boolean = false;
  isReadOnly: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService,
    private appointmentService: AppointmentService,
    private patientsService: PatientsService,
    private servicesService: ServicesService,
    private router: Router
  ) { }

  appointmentForm: FormGroup = this.formBuilder.group({
    record:      [localStorage.getItem(""),Validators.required],
    service:     ['',Validators.required],
    patientId:   [],
    patientName: ['',Validators.required],
    doctorId:    ['',Validators.required],
    status:      ['Pendiente Consulta'],
    isActive:    [true],
    createdAt:   ['',Validators.required],
    updatedAt:   [],
    createdBy:   [localStorage.getItem('x-user')],
    updatedBy:   []

  })

  ngOnInit() {
    this.getPatient();

    this.currentDate = new Date().toISOString().slice(0, 10);

    this.servicesService.GetList().subscribe((service) => {
      this.services = service as unknown as ServicesResponse [];
    })

    this.doctorsService.GetList().subscribe((resp: DoctorResponse []) => {
      this.doctors = resp;
    })

  }

  search(event: any) {
    this.patientsService.GetPatient(event.target.value).subscribe((resp) => {
      var firstName = resp[0]?.firstName;
      var lastName = resp[0]?.lastName;
      this.name = firstName + ' ' + lastName;
      this.appointmentForm.controls["patientId"].patchValue(resp[0]?.id);
    })
  }

  getPatient() {
    if(localStorage.getItem('x-user-role') === 'Paciente'){
      let userId = localStorage.getItem('x-userId')
      this.patientsService.GetPatientId(userId).subscribe((resp) => {
        var firstName = resp[0]?.firstName;
        var lastName = resp[0]?.lastName;
        this.name = firstName + ' ' + lastName;
        this.appointmentForm.controls["record"].patchValue(resp[0]?.record);
        this.appointmentForm.controls["patientId"].patchValue(resp[0]?.id);
        this.isReadOnly = true;
      })
    }
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
      this.appointmentForm.markAllAsTouched();
    }
  }

  showDialog() {
    this.display = true;
  } 

  clear(): void {
    this.appointmentForm.reset();
  }

  cancel(): void {
    if(this.appointmentForm.dirty) {
      Swal.fire({
        title: 'Se perderan los datos desea continuar?',
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigateByUrl('appointment/list');
        }
      })
    } else {
      this.router.navigateByUrl('appointment/list')
    }
  }

  alertMessage(record: string, patientName: string): void {
    Swal.fire({
      title: `Record: ${record}`,
      text: `Nombre Paciente: ${patientName}`,
      icon: 'success',
    })
  }

}
