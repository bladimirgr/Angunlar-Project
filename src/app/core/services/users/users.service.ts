import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

    url = 'http://localhost:5000/api/v1/users'

    constructor(
        private httpClient: HttpClient
    ) { }

    Create(entity: any): Observable<any> {
        return this.httpClient.post<any>(this.url, entity)
    }

    Delete(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.url}/${id}`)
    }
    
}
