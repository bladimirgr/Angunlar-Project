import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { ServicesResponse, ServicesRequest, ServicesDataResponse } from '../../../web/common/interfaces/services.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends BaseService<ServicesResponse, ServicesDataResponse, ServicesRequest> {


  override url = 'http://localhost:3000/medical-services'

  constructor(
      private httpClient: HttpClient
  ) {
    super(httpClient)
  }

}
