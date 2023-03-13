import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../core/services/users/users.service';
import { UsersResponse } from '../../interfaces/users.interfaces';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';
import { DoctorResponse } from '../../../doctors/interfaces/doctor.intefaces';
import { PatientsService } from 'src/app/core/services/patients/patients.service';
import { PatientsResponse } from '../../../patients/interfaces/patients.interfaces';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: UsersResponse;
  doctor!: any;
  patient!: PatientsResponse;
  id: string = '';

  constructor(
    private usersService: UsersService,
    private doctorsService: DoctorsService,
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('x-userId')
    const roles = localStorage.getItem('x-user-role')

    if(roles === 'Doctor') {
      this.usersService.GetById(userId).subscribe((resp) => {
        this.user = resp.data;
        this.id = resp.data.id;
        this.doctorsService.GetById(this.id).subscribe((resp) => {
          this.doctor = resp[0]

          console.log('%c⧭', 'color: #1d3f73', this.doctor);
        })
      })
    } else {
      this.patientsService.GetPatientId(this.id).subscribe((resp) => {
        this.patient = resp[0]

        console.log('%c⧭', 'color: #cc0088', this.patient);
      })
    }
  }

}
