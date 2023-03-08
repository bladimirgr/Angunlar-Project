import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import Swal from 'sweetalert2';
import { PatientsService } from '../../../../core/services/patients/patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patientList!: any []
  @Input() selectedPatient!: any

  constructor(
    private patientsService: PatientsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {

    this.patientsService.GetList().subscribe((resp) => {
      this.patientList = resp as unknown as [];
    })
  }

  delete(id: number): void {
    this.patientsService.GetById(id).subscribe((patient) => {
      this.usersService.Delete(patient.userId).subscribe((x) => {
        if(x.succeeded) {
          this.patientsService.Delete(id).subscribe((resp) => {
            if(resp) {
              let value = this.patientList.findIndex(function(obj) {
                return obj.id === id;
              })
              this.patientList.splice(value, 1);
              this.alerMessage();
            }
          })
        }
      })
    })
    
  }

  alerMessage(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Paciente Eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
