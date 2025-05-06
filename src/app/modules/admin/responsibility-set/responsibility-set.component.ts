import { Component } from '@angular/core';
import { BaseButtonComponent } from '../../../core/buttons/base-button/base-button.component';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'app/core/modal/modal.component';
import { SetModalComponent } from 'app/modules/admin/responsibility-set/set-modal/set-modal.component'
@Component({
    selector: 'app-responsibility-set',
    imports: [
        BaseButtonComponent,
        FormsModule
    ],
    templateUrl: './responsibility-set.component.html',
    styleUrl: './responsibility-set.component.scss',
})
export class ResponsibilitySetComponent {
    constructor(private dialog: MatDialog) {}
    openDialog(dialogType: string) {
        let title: string;

        switch (dialogType) {
            case 'setAdd' :
                title = '결재권자 신규 등록';
                break;
            case 'setEdit' :
                title = '결재권자 변경';
                break;
            case 'setDelete' :
                title = '결재권자 삭제';
                break;
        }

        const dataToSend = {
            title: title,
            dialogType: dialogType,
            component: SetModalComponent
        };
        this.dialog.open(ModalComponent, {
            data: dataToSend
        });
    }
}
