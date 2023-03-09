import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../core/services/users/users.service';
import { PatientsService } from '../../../../core/services/patients/patients.service';
import { DoctorsService } from '../../../../core/services/doctor/doctors.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private patientsService: PatientsService,
    private doctorsService: DoctorsService
  ) { }

  ngOnInit() {
  }

}
