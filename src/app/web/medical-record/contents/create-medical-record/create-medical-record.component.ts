import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment/appointment.service';
import { MedicalRecordService } from 'src/app/core/services/medical-record/medical-record.service';
import { PatientsService } from 'src/app/core/services/patients/patients.service';
import Swal from 'sweetalert2';
import { SymptomsResponse } from '../../interfaces/symptoms.interfaces';

@Component({
  selector: 'app-create-medical-record',
  templateUrl: './create-medical-record.component.html',
  styleUrls: ['./create-medical-record.component.css']
})
export class CreateMedicalRecordComponent implements OnInit, AfterViewInit {

  @Input() id!: number;
  @Input() service!: any
  patientName!: string
  symptoms!: SymptomsResponse []
  selectedSymptoms: string [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private medicalRecordService: MedicalRecordService,
    private patientsService: PatientsService,
    private appointmentService: AppointmentService
  ) { }


  ngAfterViewInit(): void {
    this.route.params.subscribe((resp) => { 
      this.patientsService.GetById(resp['id']).subscribe((resp) => {

        this.visitForm.controls['patientId'].patchValue(resp['id']);
        this.visitForm.controls['patientName'].patchValue(resp?.firstName + ' ' + resp?.lastName);
  
      })
    })
  }

  ngOnInit() {
    this.symptoms = [
      {
        id: 1,
        name: "Tos con o sin mucosidad"
      },
      {
        id: 2,
        name: "Dolor en el pecho"
      },
      {
        id: 3,
        name: "Cansancio"
      },
      {
        id: 4,
        name: "Estornudos"
      },
      {
        id: 5,
        name: "Congestión nasal"
      },
      {
        id: 6,
        name: "Moqueo"
      },
      {
        id: 7,
        name: "Dolor de garganta"
      },
      {
        id: 8,
        name: "Dolor de oído"
      },
      {
        id: 9,
        name: "Fiebre"
      },
      {
        id: 10,
        name: "Dificultad para dormir"
      },
      {
        id: 11,
        name: "Dolores corporales"
      },
      {
        id: 12,
        name: "Dolor de garganta"
      },
      {
        id: 13,
        name: "Escalofríos"
      },
      {
        id: 14,
        name: "Vómitos y diarrhea"
      },
      {
        id: 15,
        name: "Fatiga"
      },
      {
        id: 16,
        name: "Mal aliento"
      },
      {
        id: 17,
        name: "Enrojecimiento de la piel"
      },
      {
        id: 18,
        name: "Inflamación del área afectada"
      },
      {
        id: 19,
        name: "Tos"
      },
      {
        id: 20,
        name: "Conjuntivitis"
      },
      {
        id: 21,
        name: "Dolor o ardor al orinar"
      },
      {
        id: 22,
        name: "Sangre en la orina"
      },
      {
        id: 23,
        name: "Presión o retorcijones en la ingle"
      }
    ]
  }

  visitForm: FormGroup = this.formBuilder.group({
    patientId:      ['', Validators.required],
    patientName:    ['', Validators.required],
    reason:         ['',Validators.required],
    description:    [],
    dignostics:     [''],
    symptoms:       ['', Validators.required],
    service:        ['', Validators.required],
    status:         ['Realizada', Validators.required],
    isActive:       [true],
    createdAt:      [new Date()],
    updatedAt:      [],
    createdBy:      [],
    updatedBy:      [],
  })


  Create() {
    if(this.visitForm.valid) {
      this.medicalRecordService.Create(this.visitForm.value).subscribe((x) => {
        if(x) {
          this.appointmentService.GetAppointment(x.patientId, x.service).subscribe((appointment) => {
            this.appointmentService.Delete(appointment[0].id).subscribe((a) => {
              this.alertMessage(x)
            })
          })
        }
      })
    }
  }

  clear(): void {
    // this.visitForm.reset();
  }

  cancel(): void {
    if(this.visitForm.dirty) {
      Swal.fire({
        title: 'Se perderan los datos desea continuar?',
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showCloseButton: true
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigateByUrl('appointment/list');
        }
      })
    } else {
      this.router.navigateByUrl('appointment/list')
    }
  }


  alertMessage(param: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${param}`,
      showConfirmButton: false,
      timer: 1500
    })
  }

}
