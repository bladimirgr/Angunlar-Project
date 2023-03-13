import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Roles' })

export class Roles implements PipeTransform {

    transform(Roles: string): string {
        switch (Roles) {

            case 'Doctor':
                return 'Dr';

            case 'Paciente':
                return 'Px';

            default:
                return 'No Estado';
        }
    }

}