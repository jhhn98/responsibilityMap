import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../../core/modal/modal.component';
import { DetailModalComponent } from '../accountability-information-management/detail-modal/detail-modal.component';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-executive-management',
    imports: [
        NgIf,
        BaseButtonComponent,
        DataSearchComponent,
        RouterLink,
        MatIcon,
    ],
    templateUrl: './executive-management.component.html',
    styleUrl: './executive-management.component.scss',
})
export class ExecutiveManagementComponent {
    constructor(private dialog: MatDialog) {}
    performCheck: boolean = true;

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
