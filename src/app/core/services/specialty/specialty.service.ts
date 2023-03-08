import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { SpecialtyDataResponse, SpecialtyResponse, SpecialtyRequest } from '../../../web/common/interfaces/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService extends BaseService<SpecialtyDataResponse, SpecialtyResponse, SpecialtyRequest> {

  override url = 'http://localhost:3000/medical-specialty'

  constructor(
      private httpClient: HttpClient
  ) { 
    super(httpClient)
  }

}
