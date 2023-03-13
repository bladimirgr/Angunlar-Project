import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Countries' })

export class Countries implements PipeTransform {

    transform(Countries: number): string {
        switch (Countries) {

            case 1:
                return 'Republica Dominicana';

            case 2:
                return 'Otra ';

            default:
                return 'No Estado';
        }
    }

}