import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users/users.service';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';
import { ProvincesService } from '../../../../core/services/provinces/province.service';
import { Provinces, Countries } from '../../../../shared/models/provinces.interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OccupationResponse } from '../../interfaces/occupations.interfaces';
import { OccupationService } from '../../../../core/services/occupation/occupation.service';
import { SpecialtyService } from 'src/app/core/services/specialty/specialty.service';
import { SpecialtyResponse } from '../../interfaces/specialty.interfaces';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit, AfterViewInit {

  maritalStatus: any[] = [];
  occupations: OccupationResponse[] = [];
  specialty: SpecialtyResponse[] = [];
  roles: any[] = [];
  title: string[] = ['Casa', 'Trabajo', 'Otra'];
  label2: string[] = ['Personal', 'Trabajo', 'Otra'];
  userId: string = '';
  insurances: any[] = [];
  countries: Countries[] = [];
  provinces: Provinces[] = [];
  townshipList: any[] = [];
  selectProvince: any;
  fileToUpload!: File | null

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private provincesService: ProvincesService,
    private occupationService: OccupationService,
    private specialtyService: SpecialtyService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.generateRecord();
  }

  userForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isActive: [true],
    roles: ['', Validators.required],
    img: [''],
  })

  commonForm: FormGroup = this.formBuilder.group({
    userId: [this.userId],
    record: [],
    occupationId: [''],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    insurance: [''],
    sex: [''],
    maritalStatus: [''],
    birthday: [''],
    nationalityId: [''],
    specialtyId: [''],
    status: [''],
    isActive: [true],
    createdAt: [new Date()],
    updatedAt: [''],
    createdBy: [localStorage.getItem('x-user')],
    updatedBy: [''],
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

    this.insurances = [
      {
        id: 1,
        name: "Senasa Subsidiado"
      },
      {
        id: 2,
        name: "Senasa Contributivo"
      },
      {
        id: 3,
        name: "Senasa Pensionado"
      },
      {
        id: 4,
        name: "Humano"
      },
      {
        id: 5,
        name: "Mapfre Salud"
      }
    ]

    this.specialtyService.GetList().subscribe((specialty) => {
      this.specialty = specialty as unknown as SpecialtyResponse[];
    })

    this.occupationService.GetList().subscribe((occupation) => {
      this.occupations = occupation as unknown as OccupationResponse[];
    })

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
    let documents = [1, 2]
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
      township: [],
      province: []
    });
    this.addresses.push(addressForm);
  }

  addPhones(): void {
    let phones = [1, 2, 3]
    for (let i = 0; i < phones.length; i++) {
      const phonesForm = this.formBuilder.group({
        phoneType: [phones[i]],
        number: [],
        extension: []
      });
      this.phones.push(phonesForm);
    }

  }

  addEmail(): void {
    let emails = [1, 2]
    for (let i = 0; i < emails.length; i++) {
      const emailForm = this.formBuilder.group({
        emailType: [emails[i]],
        email: []
      });
      this.emails.push(emailForm);
    }

  }

  generateRecord() {
    this.patientsService.GetList().subscribe((resp) => {
      const arr = resp.map((x) => x.record);
      const last = arr.slice(-1);
      const newRecord = last[0] + 1
      this.commonForm.controls['record'].patchValue(newRecord);
    })
  }

  Create(): void {
    if (this.userForm.valid) {
      //Si el formulario de Usuario es valido, lo crea.
      this.usersService.Create(this.userForm.value).subscribe((resp) => {

        if (resp.succeeded) {

          // Si el usuario es creado valida el Rol, Si los datos son validos lo crea
          if (this.commonForm.valid && resp.roles === "Doctor") {

            this.commonForm.value.userId = resp.data.id;

            this.doctorsService.Create(this.commonForm.value).subscribe((doctor) => {
              this.alertMessage();

            })

          } else if (this.commonForm.valid && resp.data.roles === "Paciente") {

            this.commonForm.value.userId = resp.data.id;

            this.patientsService.Create(this.commonForm.value).subscribe((patient) => {
              this.alertMessage();
            })
          }

        } else if (!resp.succeeded) {
          Swal.fire({
            title: 'Error al crear usuario',
            icon: 'error',
            iconHtml: 'X',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            showCloseButton: true
          })
        }

      })

    } else {
      this.userForm.markAllAsTouched();
      this.commonForm.markAllAsTouched();
    }
  }

  onFileChange(files: FileList) {
    console.log('%c⧭', 'color: #e57373', files.item);
  }

  onChanges(country: any): void {
    if (country) {
      this.provincesService.GetList().subscribe((resp: Provinces[]) => {
        this.provinces = resp;
      })
    }
  }

  township() {
    this.townshipList = this.provinces.map((x) => x.municipalities);
  }

  clear(): void {
    this.userForm.reset();
    this.commonForm.reset();
  }

  cancel(): void {
    if (this.userForm.dirty && this.commonForm.dirty) {
      Swal.fire({
        title: 'Se perderan los datos desea continuar?',
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('appointment/list');
        }
      })
    } else {
      this.router.navigateByUrl('appointment/list')
    }
  }

  alertMessage(): void {
    Swal.fire({
      title: 'Usuario Creado',
      icon: 'success',
      iconHtml: '!',
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('appointment/list');
      }
    })
  }


}
