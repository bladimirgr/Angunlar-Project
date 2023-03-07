import { Observable } from "rxjs";

export interface IBaseInterface  {
   
    _entity: any;
    _list: any[];
    entity: any;
    list: any[];
    showSpin: boolean;
    id: number;
    _id: number;
    entityId: number;

    getList(): Observable<any>;
    getById(id: number): Observable<number>;
    create(form: any): Observable<any>;
    update(id: number, entity: any): Observable<any>;
    delete(id: number ): Observable<any>;
    patch(id: number, entity: any): Observable<any>;
    
}