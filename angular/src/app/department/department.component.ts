import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxButtonModule, DxPopupModule, DxFormModule } from 'devextreme-angular';
import { RestService } from '@abp/ng.core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, FormsModule, DxDataGridModule, DxButtonModule, DxPopupModule, DxFormModule],
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  departments: any[] = [];
  isPopupVisible = false;
  isEditMode = false;
  selectedDepartment: any = { name: '', quota: 0 };

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.loadDepartments();
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
    this.selectedDepartment = { name: '', quota: 0 };
    this.isPopupVisible = true;
  }

  openEditPopup(department: any): void {
    this.isEditMode = true;
    this.selectedDepartment = { ...department };
    this.isPopupVisible = true;
  }

  save(): void {
    const body = {
      name: this.selectedDepartment.name,
      quota: this.selectedDepartment.quota
    };

    if (this.isEditMode) {
      this.restService
        .request(
          { method: 'PUT', url: `/api/app/department/${this.selectedDepartment.id}`, body: body },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.isPopupVisible = false;
          this.loadDepartments();
        });
    } else {
      this.restService
        .request(
          { method: 'POST', url: '/api/app/department', body: body },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.isPopupVisible = false;
          this.loadDepartments();
        });
    }
  }

  delete(id: string): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.restService
        .request(
          { method: 'DELETE', url: `/api/app/department/${id}` },
          { apiName: 'default' }
        )
        .subscribe(() => {
          this.loadDepartments();
        });
    }
  }
}
