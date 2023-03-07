import { Observable } from 'rxjs';

export interface IBaseService<TType, TTypeResponse, TTypeRequest> {

  url: string

  GetList(numPage?: number, numSize?: number): Observable<TType>;
  GetListPaged(numPage: number, numSize: number): Observable<TType>;
  GetById(id: number): Observable<TTypeResponse>;
  Delete(id: number): Observable<TTypeRequest>;
  ChangeStatus(entity: TTypeRequest): Observable<any>;
  Create(entity: TTypeRequest): Observable<TTypeResponse>;
  Update(id: number, entity: TTypeRequest): Observable<TTypeRequest>;
  Patch(id: number, entity: TTypeRequest): Observable<TTypeResponse>
  
}
