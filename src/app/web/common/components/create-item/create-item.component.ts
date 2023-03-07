import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users/users.service';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';
import { ProvincesService } from '../../../../core/services/provinces/province.service';
import { Provinces, Countries, Municipalities } from '../../../../shared/models/provinces.interfaces';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  maritalStatus: any [] = [];
  roles: any [] = [];
  label: string[] = ['Casa', 'Trabajo', 'Otra'];
  label2: string[] = ['Personal', 'Trabajo', 'Otra'];
  userId: string = '';

  countries: Countries [] = [];
  provinces: Provinces [] = [];
  township: any [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private provincesService: ProvincesService
  ) { }

  userForm: FormGroup = this.formBuilder.group({
    username:  ['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    email:     ['',Validators.required, Validators.email],
    password:  ['',Validators.required],
    isActive:  [true],
    roles:     ['',Validators.required]
  })

  commonForm: FormGroup = this.formBuilder.group({
    userId:         [this.userId],
    record:         [],
    occupationId:   [],
    firstName:      [],
    lastName:       [],
    insurance:      [],
    sex:            [],
    maritalStatus:  [],
    birthday:       [],
    nationalityId:  [],
    specialtyId:    [],
    status:         [],
    isActive:       [true],
    createdAt:      [],
    updatedAt:      [],
    createdBy:      [],
    updatedBy:      [],
    documents: this.formBuilder.array([]),
    phones: this.formBuilder.array([]),
    addresses: this.formBuilder.array([]),
    emails: this.formBuilder.array([])
  })

  ngOnInit() {
    this.addDocuments();
    this.addAddresses();
    this.addPhones();
    this.addEmail();

    this.countries = [
      {
        id: 1,
        code: "RD",
        description: "Republica Dominicana"
      }
    ]

    this.maritalStatus = [
      {
        id: 1,
        name: "Soltero"
      },
      {
        id: 2,
        name: "Casado"
      }
    ]

    this.roles = [
      {
        id: 1,
        name: "Doctor"
      },
      {
        id: 2,
        name: "Paciente"
      }
    ]

  }

  get document() {
    return this.commonForm.controls["documents"] as FormArray;
  }

  get addresses() {
    return this.commonForm.controls["addresses"] as FormArray;
  }

  get phones() {
    return this.commonForm.controls["phones"] as FormArray;
  }

  get emails() {
    return this.commonForm.controls["emails"] as FormArray;
  }

  addDocuments(): void {
    let documents = [1,2]
    for (let i = 0; i < documents.length; i++) {
      const documentForm = this.formBuilder.group({
        documentType: [documents[i]],
        number: []
      });
      this.document.push(documentForm);
    }
  } 

  addAddresses(): void {
      const addressForm = this.formBuilder.group({
        addressType: [1],
        street: [],
        neighborhood: [],
        city: []
      });
      this.addresses.push(addressForm);
  }
  
  addPhones(): void {
    let phones = [1,2,3]
    for (let i = 0; i < phones.length; i++) {
      const phonesForm = this.formBuilder.group({
        phoneType: [phones[i]],
        number:    [],
        extension: []
      });
      this.phones.push(phonesForm);
    }
  
  }

  addEmail():void {
    let emails = [1,2]
    for (let i = 0; i < emails.length; i++) {
      const emailForm = this.formBuilder.group({
        emailType: [emails[i]],
        email:     []
      });
      this.emails.push(emailForm);
    }
  
  }

  Create(): void {


    console.log('%c⧭', 'color: #99adcc', this.commonForm.value);
    // if(this.userForm.valid) {
    //   //Si el formulario de Usuario es valido, lo crea.
    //   this.usersService.Create(this.userForm.value).subscribe((resp) => {
        
    //     if(resp.succeeded) {

    //       // Si el usuario es creado valida el Rol, Si los datos son validos lo crea
    //       if(this.commonForm.valid && resp.data.roles === "Doctor") {

    //         this.commonForm.value.userId = resp.data.id;

    //         this.doctorsService.Create(this.commonForm.value).subscribe((doctor) => {

    //           console.log('%c⧭', 'color: #1d3f73', "Crear Doctor", doctor);

    //         })

    //       } else if (this.commonForm.valid && resp.data.roles === "Paciente"){

    //         this.commonForm.value.userId = resp.data.id;
            
    //         this.patientsService.Create(this.commonForm.value).subscribe((patient) => {

    //           console.log('%c⧭', 'color: #cc0088', "Crear paciente", patient);
    //         })
    //       }
         

    //     } else if(!resp.succeeded) {
          
    //       console.log('%c⧭', 'color: #bfffc8', "No se creo el usuario");
    //     }

    //   })

    // } else {

    //   this.userForm.markAllAsTouched();
    //   this.commonForm.markAllAsTouched();
    // }
  }

  ngOnChanges(country: any): void {
    
    if(country) {

      this.provincesService.GetList().subscribe((resp: Provinces[]) => {

        this.provinces = resp;

        this.township = resp.map((x) => x.municipalities)
        
      })
    }    
  }

  onChanges(province: any): void {


  }



}
