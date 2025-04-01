import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';

@Component({
    selector: 'app-department-management',
    imports: [
        NgIf,
        DataSearchComponent
    ],
    templateUrl: './department-management.component.html',
    styleUrl: './department-management.component.scss',
})
export class DepartmentManagementComponent {
    performCheck: boolean = true;
}
