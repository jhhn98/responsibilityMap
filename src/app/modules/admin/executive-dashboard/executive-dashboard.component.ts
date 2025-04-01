import { Component } from '@angular/core';
import { ModalComponent } from 'app/core/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
//대시보드 내 컴포넌트
import { ApprovalPendingComponent } from './components/approval-pending/approval-pending.component';
import { TaskDeptComponent } from './components/task-dept/task-dept.component';
import { DeptStatusComponent } from './components/dept-status/dept-status.component';
import { UnresolvedIssuesComponent } from './components/unresolved-issues/unresolved-issues.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-executive-dashboard',
    standalone: true,
    imports: [
        ApprovalPendingComponent,
        TaskDeptComponent,
        DeptStatusComponent,
        UnresolvedIssuesComponent,

    ],
    templateUrl: './executive-dashboard.component.html',
    styleUrl: './executive-dashboard.component.scss',
})
export class ExecutiveDashboardComponent {
    constructor(private dialog: MatDialog) {}
}
