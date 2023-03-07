import { Injectable } from '@angular/core';
import { MedicalRecordResponse, MedicalRecordRequest, MedicalRecordDataResponse } from '../../../web/medical-record/interfaces/medical-record.interfaces';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Injectable()
export class MedicalRecordService extends BaseService<MedicalRecordDataResponse, MedicalRecordResponse, MedicalRecordRequest> {

    override url = "http://localhost:3000/medical-record"

    constructor( private httpClient: HttpClient) {
        super(httpClient);
    }

    GetByPatientId(id: number): Observable<MedicalRecordResponse> {
        return this.httpClient.get<MedicalRecordResponse>(`${this.url}/?patientId/${id}`)
    }

}
