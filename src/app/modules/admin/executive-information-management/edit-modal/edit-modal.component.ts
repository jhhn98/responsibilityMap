import { Component, Inject } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { BaseButtonComponent } from '../../../../core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-edit-modal',
    imports: [
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect,
        MatInput,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatSuffix,
        BaseButtonComponent,
    ],
    templateUrl: './edit-modal.component.html',
    styleUrl: './edit-modal.component.scss',
})
export class EditModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { dialogName: string }) {}
    selected = 'option2';
}
