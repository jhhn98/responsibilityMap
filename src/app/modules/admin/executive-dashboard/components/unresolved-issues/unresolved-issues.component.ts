import { Component, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule, NgForOf } from '@angular/common';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/executive-dashboard/components/unresolved-issues/detail-modal/detail-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface TableRow {
    index: string;
    items: string;
    occurrenceMM: string;
    department: string;
    reason: string;
    status: string;
    actionDate: string;
}

@Component({
    selector: 'app-unresolved-issues',
    imports: [
        CommonModule,
        NgForOf
    ],
    templateUrl: './unresolved-issues.component.html',
    styleUrl: './unresolved-issues.component.scss',
})
export class UnresolvedIssuesComponent implements AfterViewInit, AfterViewChecked, OnInit {
    @ViewChild('table', { static: false}) table!: ElementRef<HTMLTableElement>;

    tableData: TableRow[] = [
        {
            index: '2507-0003',
            items: '투자상품 판매 승인',
            occurrenceMM: '2025-07',
            department: '기업여신관리부',
            reason: 'A 상품 승인관련 심의위 미개최',
            status: '<span class="inline-flex items-center rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wide bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50"><span class="whitespace-nowrap leading-relaxed w-20">결재완료</span></span>',
            actionDate: '2025-09-02'
        },
        {
            index: '2508-0002',
            items: '신용한도관리 적정성 점검',
            occurrenceMM: '2025-08',
            department: '소비자여신관리부',
            reason: '25-xx차 감사결과 미반영',
            status: '<span class="inline-flex items-center rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wide bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50"><span class="whitespace-nowrap leading-relaxed w-20">진행중</span></span>',
            actionDate: '2025-11-01'
        },
        {
            index: '2509-0001',
            items: '위험관리위원회 운영',
            occurrenceMM: '2025-09',
            department: '운영리스크관리부',
            reason: '25-xx차 위원회 심의 안건 누락',
            status: '<span class="inline-flex items-center rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wide bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-50"><span class="whitespace-nowrap leading-relaxed w-20">결재대기</span></span>',
            actionDate: '-'
        }
    ];

    constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.tableData.forEach(row => {
            row.status = this.sanitizer.bypassSecurityTrustHtml(row.status) as string;
        });
    }
    ngAfterViewInit() {
        /*setTimeout(() => this.syncTableHeaders());*/
    }

    ngAfterViewChecked() {
        /*this.syncTableHeaders();*/
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
                title: `부적정 점검항목 상세`,
                component: DetailModalComponent,
                rowData: row
            },
        });
    }
}
