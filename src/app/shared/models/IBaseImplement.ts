import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBaseInterface } from './IBase.interfaces';

export class IBaseImplement implements IBaseInterface {
 
    _entity: any;
    _list!: any[];
    entity: any;
    list!: any[];
    showSpin!: boolean;
    id!: number;
    _id!: number;
    entityId!: number;

    constructor(private services: any){}

    getList(): Observable<any> {
        return this.services.Getlist().pipe(
            tap( (resp: any) => {this.list = resp;
        }))
    }

    getById(id: number): Observable<number> {
        return this.services.GetById(id)
    }

    create(form: any): Observable<any> {
        return this.services.Create(form)
    }

    update(id: number, entity: any): Observable<any> {
        return this.services.Update(id)
    }
    
    delete(id: number): Observable<any> {
        return this.services.Delete(id)
    }

    patch(id: number, entity: any): Observable<any> {
        return this.services.Patch(id, entity)
    }
    
}