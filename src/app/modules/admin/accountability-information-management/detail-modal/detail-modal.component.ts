import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-detail-modal',
    imports: [
        NgIf,
        MatFormField,
        MatSelect,
        MatOption,
        MatLabel,
        BaseButtonComponent,
    ],
    templateUrl: './detail-modal.component.html',
    styleUrl: './detail-modal.component.scss',
})
export class DetailModalComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: { dialogKey: string; dialogType: string },
        public http: HttpClient
    ) {}
}
