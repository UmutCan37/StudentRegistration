import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxButtonModule, DxPopupModule, DxSelectBoxModule } from 'devextreme-angular';
import { RestService } from '@abp/ng.core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, DxDataGridModule, DxButtonModule, DxPopupModule, DxSelectBoxModule],
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  departments: any[] = [];
  isPopupVisible = false;
  isEditMode = false;
  selectedStudent: any = {
    firstName: '',
    lastName: '',
    nationalId: '',
    city: '',
    district: '',
    departmentId: null
  };

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.loadStudents();
    this.loadDepartments();
  }

  loadStudents(): void {
    this.restService
      .request<any, any>(
        { method: 'GET', url: '/api/app/student' },
        { apiName: 'default' }
      )
      .subscribe(res => {
        this.students = res.items;
      });
  }

  loadDepartments(): void {
    this.restService
      .request<any, any>(
        { method: 'GET', url: '/api/app/department' },
        { apiName: 'default' }
      )
      .subscribe(res => {
        this.departments = res.items;
      });
  }

  openAddPopup(): void {
    this.isEditMode = false;
    this.selectedStudent = {
      firstName: '',
      lastName: '',
      nationalId: '',
      city: '',
      district: '',
      departmentId: null
    };
    this.isPopupVisible = true;
  }

  openEditPopup(student: any): void {
    this.isEditMode = true;
    this.selectedStudent = { ...student };
    this.isPopupVisible = true;
  }

  save(): void {
    const body = {
      firstName: this.selectedStudent.firstName,
      lastName: this.selectedStudent.lastName,
      nationalId: this.selectedStudent.nationalId,
      city: this.selectedStudent.city,
      district: this.selectedStudent.district,
      departmentId: this.selectedStudent.departmentId
    };

    if (this.isEditMode) {
      this.restService
        .request(
          { method: 'PUT', url: `/api/app/student/${this.selectedStudent.id}`, body },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.isPopupVisible = false;
          this.loadStudents();
        });
    } else {
      this.restService
        .request(
          { method: 'POST', url: '/api/app/student', body },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.isPopupVisible = false;
          this.loadStudents();
        });
    }
  }

  delete(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.restService
        .request(
          { method: 'DELETE', url: `/api/app/student/${id}` },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.loadStudents();
        });
    }
  }
}
