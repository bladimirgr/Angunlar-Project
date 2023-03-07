import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseService } from '../../shared/models/services.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService<TType, TTypeResponse, TTypeRequest> implements IBaseService<TType, TTypeResponse, TTypeRequest>{

constructor(
 private http: HttpClient) { }

  url!: string;

  Create(entity: TTypeRequest): Observable<TTypeResponse> {
    return this.http.post<TTypeResponse>(`${this.url}`, entity)
  }
  Update(id: number, entity: TTypeRequest): Observable<TTypeRequest> {
    return this.http.put<TTypeRequest>(`${this.url}/${id}`, entity)
  }
  Patch(id: number, entity: TTypeRequest): Observable<TTypeResponse> {
    return this.http.patch<TTypeResponse>(`${this.url}/${id}`, entity)
  }
  GetList(numPage?: number, numSize?: number): Observable<TType> {
    return this.http.get<TType>(`${this.url}`)
  }
  GetById(id: number): Observable<TTypeResponse> {
    return this.http.get<TTypeResponse>(`${this.url}/${id}`)
  }
  Delete(id: number): Observable<TTypeRequest> {
    return this.http.delete<TTypeRequest>(`${this.url}/${id}`)
  }


  // No implementados
  GetListPaged(numPage: number, numSize: number): Observable<TType> {
    throw new Error('Method not implemented.');
  }
  ChangeStatus(entity: TTypeRequest): Observable<any> {
    throw new Error('Method not implemented.');
  }

}
