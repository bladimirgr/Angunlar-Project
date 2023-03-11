import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientsResponse, PatientsRequest, PatientsDataResponse } from '../../../web/patients/interfaces/patients.interfaces';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Injectable()
export class PatientsService extends BaseService<PatientsDataResponse,PatientsResponse,PatientsRequest> {

    override url = 'http://localhost:3000/patients'

    constructor(
        private httpClient: HttpClient
    ) {
        super(httpClient);
    }

    GetPatient(param: string): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/?record=${param}`)
    }

    GetPatientId(param: string | null): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/?userId=${param}`)
    }
    
}
