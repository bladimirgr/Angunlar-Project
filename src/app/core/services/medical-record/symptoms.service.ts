import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { SymptomsDataResponse, SymptomsRequest, SymptomsResponse } from '../../../web/medical-record/interfaces/symptoms.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService extends BaseService<SymptomsDataResponse, SymptomsResponse, SymptomsRequest>{

  override url = 'http://localhost:6000/api/v1/symptons'

  constructor(
    private httpClient: HttpClient
  ) {
    super(httpClient);
  }

}
