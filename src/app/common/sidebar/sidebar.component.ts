import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../core/services/patients/patients.service';
import { MedicalRecordService } from '../../core/services/medical-record/medical-record.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  roles!: string | null;
  
  constructor(
    private patientsService: PatientsService,
    private medicalRecordService: MedicalRecordService
  ) { }

    ngOnInit(): void {

      this.roles = localStorage.getItem('x-user-role');
      
    }

}
