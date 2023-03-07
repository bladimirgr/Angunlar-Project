import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'isActive' })

export class IsActive implements PipeTransform {

    transform(isActive: boolean): string {
        switch (isActive) {

            case true:
                return 'Activo';

            case false:
                return 'Desactivado';

            default:
                return 'No Estado';
        }
    }

}