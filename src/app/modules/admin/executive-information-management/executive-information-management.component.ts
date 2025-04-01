import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'app/core/modal/modal.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';
import { DetailModalComponent } from 'app/modules/admin/executive-information-management/detail-modal/detail-modal.component';

@Component({
    selector: 'app-executive-information-management',
    imports: [
        FormsModule,
        MatCheckbox,
        RouterLink,
        DataSearchComponent,
        NgIf,
        BaseButtonComponent,
    ],
    templateUrl: './executive-information-management.component.html',
    styleUrl: './executive-information-management.component.scss',
})
export class ExecutiveInformationManagementComponent {
    default: boolean = true;

    constructor(private dialog: MatDialog) {}

    openDialog(dialogName: string) {
        this.dialog.open(ModalComponent, {
            data: {
                title: '임원 주관회의체 조회',
                component: DetailModalComponent,
                dialogName: dialogName,
            },
        });
    }
}
