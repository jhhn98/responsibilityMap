import { Component, AfterViewInit, AfterViewChecked, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/executive-dashboard/components/approval-pending/detail-modal/detail-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface TableRow {
    department: string;
    month: string;
    total: number;
    appropriate: number;
    inappropriate: number;
    requestDate: string;
}

@Component({
  selector: 'app-approval-pending',
  imports: [
      CommonModule
  ],
  templateUrl: './approval-pending.component.html',
  styleUrl: './approval-pending.component.scss'
})
export class ApprovalPendingComponent implements AfterViewInit, AfterViewChecked {
    @ViewChild('dataCount', { static: false }) dataCount!: ElementRef;
    @ViewChild('table', { static: false }) table!: ElementRef<HTMLTableElement>;

    tableData: TableRow[] = [
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 6,
            appropriate: 4,
            inappropriate: 1,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-09-28'
        },
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-08-27'
        },
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 6,
            appropriate: 4,
            inappropriate: 1,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-09-28'
        },
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-08-27'
        },
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 6,
            appropriate: 4,
            inappropriate: 1,
            requestDate: '2025-10-02'
        },
        {
            department: '소비자금융리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-09-28'
        },
        {
            department: '운영리스크 관리부',
            month: '2025-09',
            total: 4,
            appropriate: 4,
            inappropriate: 0,
            requestDate: '2025-08-27'
        }
    ];

    constructor(private dialog: MatDialog) {}

    ngAfterViewInit() {
        this.updateDataCount();
        /*setTimeout(() => this.syncTableHeaders());*/
    }

    ngAfterViewChecked() {
        this.updateDataCount();
        /*this.syncTableHeaders();*/
    }

    @HostListener('window:resize')
    onResize() {
        this.updateDataCount();
    }

    updateDataCount() {
        const table = this.table.nativeElement;
        const tbody = table.querySelector('tbody');
        const trLength = tbody?.querySelectorAll('tr').length || 0;

        if (this.dataCount) {
            this.dataCount.nativeElement.textContent = trLength;
        }
    }


    /*syncTableHeaders() {
        if (!this.table) return;

        const table = this.table.nativeElement;
        const thead = table.querySelector('thead');
        const tbody = table.querySelector('tbody');

        if(!thead || !tbody) return;

        const thElements = thead.querySelectorAll('th');
        const firstRow = tbody.querySelector('tr');

        if(!firstRow) return;

        const tdElements = firstRow.querySelectorAll('td');
        console.log(tdElements);
        if(thElements.length !== tdElements.length) return;

        thElements.forEach((th, index) => {
            const tdWidth = tdElements[index].getBoundingClientRect().width;
            (th as HTMLElement).style.width = `${tdWidth}px`;
        });
    }*/

    openModal(row: TableRow) {
        this.dialog.open(ModalComponent, {
            data: {
                title: `'${row.department}' 이행점검 결재`,
                component: DetailModalComponent,
                rowData: row
            },
        });
    }
}
