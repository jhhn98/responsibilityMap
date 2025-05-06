import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { DataSearchComponent } from '../../../../core/data-search/data-search.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { BaseButtonComponent } from '../../../../core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-set-modal',
    imports: [
        NgSwitch,
        NgSwitchDefault,
        NgSwitchCase,
        DataSearchComponent,
        NgIf,
        MatCheckbox,
        MatRadioButton,
        BaseButtonComponent,
    ],
    templateUrl: './set-modal.component.html',
    styleUrl: './set-modal.component.scss',
})
export class SetModalComponent {
    dialogDefault: boolean = true;
    isDeleteCompleted = false;
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: {
            dialogType: string;
        }
    ) {}

    onConfirmDelete(): void {
        this.isDeleteCompleted = true;
    }
}
