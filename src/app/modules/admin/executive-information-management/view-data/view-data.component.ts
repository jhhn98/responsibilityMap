import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'app/core/modal/modal.component';
import { EditModalComponent } from 'app/modules/admin/executive-information-management/edit-modal/edit-modal.component';
import { BaseButtonComponent } from '../../../../core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-view-data',
    imports: [
        BaseButtonComponent
    ],
    templateUrl: './view-data.component.html',
    styleUrl: './view-data.component.scss',
})
export class ViewDataComponent {
    constructor(private dialog: MatDialog) {}

    openDialog(dialogName: string) {
        this.dialog.open(ModalComponent, {
            data: {
                title: '임원 정보수정',
                component: EditModalComponent,
                dialogName: dialogName,
            },
        });
    }
}
