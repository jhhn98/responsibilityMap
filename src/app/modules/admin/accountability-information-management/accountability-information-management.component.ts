import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/accountability-information-management/detail-modal/detail-modal.component';

@Component({
    selector: 'app-accountability-information-management',
    imports: [
        MatCheckbox,
        BaseButtonComponent
    ],
    templateUrl: './accountability-information-management.component.html',
    styleUrl: './accountability-information-management.component.scss',
})

export class AccountabilityInformationManagementComponent {
    constructor(private dialog: MatDialog) {}

    openDialog(dialogKey: string, dialogType: string) {
        this.dialog.open(ModalComponent, {
            data: {
                title: '책무 정보 등록',
                component: DetailModalComponent,
                dialogKey: dialogKey,
                dialogType: dialogType,
            },
        });
    }
}
