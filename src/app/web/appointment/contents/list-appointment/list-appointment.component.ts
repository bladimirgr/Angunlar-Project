import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AppointmentService } from '../../../../core/services/appointment/appointment.service';
import { AppointmentResponse } from '../../interfaces/appointment.interfaces';
import { PatientsService } from '../../../../core/services/patients/patients.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit, OnDestroy {

  appointmentList: AppointmentResponse [] = [];
  
  appointmentList$: Subscription = new Subscription();

  constructor(
    private patientsService: PatientsService,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.getList()
    
  }

  getList(): void {
    if(localStorage.getItem('x-user-role') === 'Paciente'){
      let userId = localStorage.getItem('x-userId')
      this.patientsService.GetPatientId(userId).subscribe((resp) => {

        this.appointmentService.GetByPatientId(resp[0].id).subscribe((x) => {
          
          this.appointmentList = x;
        }) 
      })
    } else {
      this.appointmentList$ = this.appointmentService.GetList().subscribe((resp) => {
        this.appointmentList = resp as unknown as AppointmentResponse[];
      })
    }
  }

  delete(id: number): void {
    this.appointmentService.Delete(id).subscribe((resp) => {
      if(resp) {
        let value = this.appointmentList.findIndex(function(obj) {
          return obj.id === id;
        })
        this.appointmentList.splice(value, 1);
        this.alerMessage();
      }
    })
  }

  alerMessage(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cita Eliminada',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnDestroy(): void {
    this.appointmentList$.unsubscribe();
  }

}
