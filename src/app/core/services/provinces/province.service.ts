import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provinces } from 'src/app/shared/models/provinces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  url = 'http://localhost:3001/provinces';

  constructor(
    private httpClient: HttpClient
  ) { }

  GetList(): Observable<Provinces[]> {
    return this.httpClient.get<Provinces[]>(`${this.url}`)
  }


}
