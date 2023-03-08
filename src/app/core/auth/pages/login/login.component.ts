import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { DoctorsService } from '../../../services/doctor/doctors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if(this.loginForm.valid){

      const { email , password} = this.loginForm.value;

      this.authService.login(email, password)
      .subscribe((resp) => {

        this.router.navigateByUrl('medical-record')

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true
        })  
        
        Toast.fire({
          icon: 'success',
          title:`Bienvenido ${resp.data.username}`
        })


      });

    }
  }

}
