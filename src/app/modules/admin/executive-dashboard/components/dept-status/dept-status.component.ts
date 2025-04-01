import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CircleComponent } from 'app/core/progress/circle/circle.component';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/executive-dashboard/components/dept-status/detail-modal/detail-modal.component';

@Component({
    selector: 'app-dept-status',
    standalone: true,
    imports: [
        CommonModule,
        CircleComponent
    ],
    templateUrl: './dept-status.component.html',
    styleUrl: './dept-status.component.scss'
})
export class DeptStatusComponent {
    constructor(private dialog: MatDialog) {}

    openDialog(dialogName: string) {
        this.dialog.open(ModalComponent, {
            data: {
                title: dialogName === 'status' ? '부서단위 점검현황' : '완료부서 점검 결과',
                component: DetailModalComponent,
                dialogName: dialogName
            }
        });
    }
}
