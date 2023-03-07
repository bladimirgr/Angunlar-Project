import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorRequest, DoctorResponse } from '../../../web/doctors/interfaces/doctor.intefaces';

@Injectable()
export class DoctorsService {

    url = 'http://localhost:3000/doctors'

    constructor( private httpClient: HttpClient) {
        
    }

    GetList(): Observable<DoctorResponse[]> {
        return this.httpClient.get<DoctorResponse[]>(`${this.url}`)
    }

    GetById(id: string): Observable<DoctorResponse> {
        return this.httpClient.get<DoctorResponse>(`${this.url}/?userId=${id}`)
    }
    
    Create(entity: DoctorRequest): Observable<DoctorRequest> {
        return this.httpClient.post<DoctorRequest>(this.url, entity)
    }

}
