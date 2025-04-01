import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { NgForOf } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseButtonComponent } from '../../../../core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-form-modal',
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        MatSelect,
        MatOption,
        MatDialogContent,
        ReactiveFormsModule,
        NgForOf,
        BaseButtonComponent,
    ],
    templateUrl: './form-modal.component.html',
    styleUrl: './form-modal.component.scss',
})
export class FormModalComponent {
    legendForm: FormGroup;
    legendGroups: any[];

    constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.legendGroups = data.legendGroups || [];

        this.legendForm = this.fb.group({
            groupTitle: [this.data.legendData?.groupTitle || ''],
            content: [this.data.legendData?.content || ''],
            code: [this.data.legendData?.code || ''],
        });
    }

    save() {
        console.log(this.legendForm.value);
    }
}
