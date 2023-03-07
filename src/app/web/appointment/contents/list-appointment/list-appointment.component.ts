import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentService } from '../../../../core/services/appointment/appointment.service';
import { AppointmentResponse } from '../../interfaces/appointment.interfaces';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit, OnChanges, OnDestroy {

  appointmentList: AppointmentResponse [] = [];
  
  appointmentList$: Subscription = new Subscription();

  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log('%c⧭', 'color: #f279ca', changes);
  }

  ngOnInit() {

    this.appointmentList$ = this.appointmentService.GetList().subscribe((resp) => {
      this.appointmentList = resp as unknown as AppointmentResponse[];
    })
    
  }

  delete(id: number): void {
    this.appointmentService.Delete(id).subscribe((resp) => {
      if(resp) {
         console.log('%c⧭', 'color: #e5de73', resp);
      }
    })
    let value = this.appointmentList.findIndex(function(obj) {
      return obj.id === id;
    })
    this.appointmentList.splice(value, 1)  

  }

  ngOnDestroy(): void {
    this.appointmentList$.unsubscribe();
  }

}
