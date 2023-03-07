import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  url = 'http://localhost:3000/medical-services'

  constructor(
      private httpClient: HttpClient
  ) { }

  GetList(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.url}`)
  }

}
