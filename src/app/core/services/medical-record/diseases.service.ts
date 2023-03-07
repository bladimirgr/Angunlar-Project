import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  url = "http://localhost:3000/diseases"

  constructor(
    private httpClient: HttpClient
  ) {}

}
