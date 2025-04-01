import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-detail-modal',
    imports: [
        CommonModule
    ],
    templateUrl: './detail-modal.component.html',
    styleUrl: './detail-modal.component.scss',
})
export class DetailModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { dialogName: string }) {}
}
