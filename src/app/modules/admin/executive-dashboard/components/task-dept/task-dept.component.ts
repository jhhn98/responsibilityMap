import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/executive-dashboard/components/task-dept/detail-modal/detail-modal.component';

@Component({
    selector: 'app-task-dept',
    imports: [
        CommonModule,
        MatIcon,
        MatButtonModule
    ],
    templateUrl: './task-dept.component.html',
    styleUrl: './task-dept.component.scss',
})
export class TaskDeptComponent {
    constructor(private dialog: MatDialog) {}

    openDialog(dialogName: string) {
        this.dialog.open(ModalComponent, {
            data: {
                title: dialogName === 'task' ? '나의 책무기술서' : '부서별 점검항목 조회',
                component: DetailModalComponent,
                dialogName: dialogName,
            },
        });
    }
}
