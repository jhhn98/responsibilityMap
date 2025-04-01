import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, AfterViewChecked, HostListener, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ModalComponent } from 'app/core/modal/modal.component';
import { DetailModalComponent } from 'app/modules/admin/ipm-check-department/detail-modal/detail-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DataSearchComponent } from '../../../core/data-search/data-search.component';


interface TableRow {
    checkYear: string;
    checkDepartment: string;
    checkList: string;
    checkManager: string;
    checkDate: string;
    checkStatus: string;
}

@Component({
    selector: 'app-ipm-check-department',
    imports: [
        MatPaginator,
        NgForOf,
        RouterLink,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatButton,
        DataSearchComponent,
        NgIf
    ],
    templateUrl: './ipm-check-department.component.html',
    styleUrl: './ipm-check-department.component.scss',
})
export class IpmCheckDepartmentComponent
    implements AfterViewInit, AfterViewChecked, OnInit
{
    default: boolean = true;

    @ViewChild('dataCount', { static: false }) dataCount!: ElementRef;
    @ViewChild('table', { static: false }) table!: ElementRef<HTMLTableElement>;
    @ViewChildren('fileInput') fileInputs!: QueryList<
        ElementRef<HTMLInputElement>
    >;

    selectedFiles: string[][] = [];

    tableData: TableRow[] = [
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '영업계획 수립에 대한 관리 및 점검',
            checkManager: '김담당',
            checkDate: '2024-12-12',
            checkStatus: '<span class="data_stat type1">등록</span>',
        },
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '투자전략의 집행 여부에 대한 점검',
            checkManager: '',
            checkDate: '',
            checkStatus: '<span class="data_stat type2">미등록</span>',
        },
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '신탁관련 내규의 제정개폐에 대한 관리 및 점검',
            checkManager: '김담당',
            checkDate: '2024-12-12',
            checkStatus: '<span class="data_stat type1">등록</span>',
        },
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '인가요건 유지에 대한 관리 및 점검',
            checkManager: '',
            checkDate: '',
            checkStatus: '<span class="data_stat type2">미등록</span>',
        },
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '적법한 신탁계약조건의 준수에 대한 관리 및 점검',
            checkManager: '',
            checkDate: '',
            checkStatus: '<span class="data_stat type2">미등록</span>',
        },
        {
            checkYear: '2024-12',
            checkDepartment: '구조화신탁부',
            checkList: '신탁재산의 신탁 적격성에 대한 관리 및 점검',
            checkManager: '김담당',
            checkDate: '2024-12-12',
            checkStatus: '<span class="data_stat type1">등록</span>',
        },
    ];
    openFilePicker(index: number): void {
        const fileInputArray = this.fileInputs.toArray();
        if (fileInputArray[index]) {
            fileInputArray[index].nativeElement.click();
        } else {
            console.error(`파일 입력 필드를 찾을 수 없음 (index: ${index})`);
        }
    }

    onFileSelected(event: Event, index: number): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            // 선택된 파일이 있으면, 기존 배열을 새로운 배열로 업데이트
            const newFiles = Array.from(input.files).map((file) => file.name);

            // 기존 배열을 새 배열로 업데이트 (Angular 변경 감지 보장)
            this.selectedFiles[index] = [
                ...(this.selectedFiles[index] ?? []),
                ...newFiles,
            ];

            // 같은 파일을 다시 선택할 수 있도록 input 초기화
            input.value = '';
        }
    }
    constructor(
        private dialog: MatDialog,
        private sanitizer: DomSanitizer
    ) {}

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

    ngOnInit(): void {
        this.tableData.forEach((row) => {
            row.checkStatus = this.sanitizer.bypassSecurityTrustHtml(
                row.checkStatus
            ) as string;
        });
    }

    updateDataCount() {
        const table = this.table.nativeElement;
        const tbody = table.querySelector('tbody');
        const trLength = tbody?.querySelectorAll('tr').length || 0;

        if (this.dataCount) {
            this.dataCount.nativeElement.textContent = trLength;
        }
    }

    openModal(row: TableRow) {
        this.dialog.open(ModalComponent, {
            data: {
                title: '관련 책무',
                component: DetailModalComponent,
                rowData: row,
            },
        });
    }
}
