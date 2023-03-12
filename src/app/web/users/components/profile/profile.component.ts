import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../core/services/users/users.service';
import { UsersResponse } from '../../interfaces/users.interfaces';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: UsersResponse;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('x-userId')
    this.usersService.GetById(userId).subscribe((resp) => {

      this.user = resp.data
      console.log('%c⧭', 'color: #f27999', this.user);
    })
  }

}
