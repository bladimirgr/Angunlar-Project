import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AppointmentDataResponse, AppointmentRequest, AppointmentResponse } from 'src/app/web/appointment/interfaces/appointment.interfaces';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseService<AppointmentDataResponse, AppointmentResponse, AppointmentRequest> {

  override url = "http://localhost:3000/appointment"

  constructor(
    private httpClient: HttpClient
  ) {
    super(httpClient);
  }

  GetByPatientId(id?: number, service?: string): Observable<AppointmentResponse[]> {
    return this.httpClient.get<AppointmentResponse[]>(`${this.url}?patientId=${id}&?service=${service}`)
  }

  GetAppointment(id?: number, service?: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}?patientId=${id}&service=${service}`)
  }
}
