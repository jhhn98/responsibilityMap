import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface TableRow {
    checkYear: string;
    checkDepartment: string;
    checkList: string;
    checkManager: string;
    checkDate: string;
    checkStatus: string;
}

@Component({
  selector: 'app-detail-modal',
  imports: [],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.scss'
})
export class DetailModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {rowData: TableRow }) {}
}
