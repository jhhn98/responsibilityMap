import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface TableRow {
    department: string;
    month: string;
    total: number;
    appropriate: number;
    inappropriate: number;
    requestDate: string;
}
@Component({
  selector: 'app-detail-modal',
  imports: [],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.scss'
})
export class DetailModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { rowData: TableRow }) {}
}
