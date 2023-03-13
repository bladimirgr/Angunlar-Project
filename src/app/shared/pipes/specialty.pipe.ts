import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Specialty' })

export class Specialty implements PipeTransform {

    transform(Specialty: number): string {
        switch (Specialty) {

            case 1:
                return 'Endrocrinologia';

            case 2:
                return 'Anestesiologa';

            case 3:
                return 'Audiologa';

            case 4:
                return 'Cardiologia infantil';

            case 5:
                return 'Cardiologo';

            case 6:
                return 'Px';
    
            default:
                return 'No Tiene Especialidad';
        }
    }

}