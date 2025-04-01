import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule
    ],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { title: string; component: any },
        private dialogRef: MatDialogRef<ModalComponent>
    ) {}
    ngOnInit() {
        this.dialogRef.addPanelClass('custom-dialog-container');
    }
}
