import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Regex } from 'src/app/shared/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  static getErrormessages(validatorName: any, validatorValue?: any) {

    let config: any = {
      required: 'Este campo es requerido',
      minlength: `Minimo de caracteres ${validatorValue.requiredLength}`,
      maxlength: `Máximo de caracteres ${validatorValue.requiredLength}`,
      invalidEmail: `El correo no es valido`
    };

    return config[validatorName];
  } 



  static Email(control: AbstractControl) {

    if(control.value.match(Regex.email)){
      return null
    }else{
      return {invalidEmail:true}
    }
  }

}
