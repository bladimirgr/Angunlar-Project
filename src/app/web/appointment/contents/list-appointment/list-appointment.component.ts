import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../../core/services/appointment/appointment.service';
import { AppointmentResponse } from '../../interfaces/appointment.interfaces';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {

  appointmentList: AppointmentResponse [] = [];

  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {

    this.appointmentService.GetList().subscribe((resp) => {
      this.appointmentList = resp as unknown as AppointmentResponse[];
    })
    
  }

}
