import { Component, ChangeDetectorRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';
import { ModalComponent } from 'app/core/modal/modal.component';
import { FormModalComponent } from 'app/modules/admin/responsibility-system/form-modal/form-modal.component';

interface AccountabilityList {
    columnNo: number;
    dataYear: string;
    dataRound: string;
    changeReason: string;
    regDate: string;
    regAuthor: string;
    filePPT: string;
    filePrint: string;
}
interface Legend {
    code: string;
    content: string;
}
interface LegendGroup {
    legendGroup: string;
    groupKey: string;
    groupTitle: string;
    legends: Legend[];
}

interface BankManager {
    name: string;
    position: string;
    date: string;
    legend: string;
}
interface Staff {
    name: string;
    position: string;
    date: string;
    legend: string;
}
interface Departments {
    departmentName: string;
    staff: Staff[];
}
interface Bank {
    bankName: string;
    bankManager: BankManager;
    departments: Departments[];
}
@Component({
    selector: 'app-responsibility-system',
    imports: [
        FormsModule,
        DataSearchComponent,
        NgIf,
        NgForOf,
        NgClass,
        BaseButtonComponent,
        MatFormField,
        MatSelect,
        MatOption,
        MatInput,
        MatLabel,
        MatIcon
    ],
    templateUrl: './responsibility-system.component.html',
    styleUrl: './responsibility-system.component.scss',
})
export class ResponsibilitySystemComponent {
    default: boolean = true;

    accountabilityListSet: AccountabilityList[] = [];
    legendGroups: LegendGroup[] = [];
    bank: Bank[] = [];
    managerLegends: string[] = [];
    departments: Departments[] = [];

    constructor(
        private dialog: MatDialog,
        private http: HttpClient,
        private cdr: ChangeDetectorRef
    ) {}

    openDialog(dialogName: string, legend?: any, groupTitle?: string) {
        const dataToSend = {
            title: '책무범례 수정',
            dialogName: dialogName,
            component: FormModalComponent,
            legendData: {
                groupTitle: groupTitle || '',
                content: legend?.content || '',
                code: legend?.code || '',
            },
            legendGroups: this.legendGroups,
        };
        this.dialog.open(ModalComponent, {
            data: dataToSend,
        });
    }

    ngOnInit(): void {
        this.http
            .get<
                AccountabilityList[]
            >('assets/accountabilitySystemListData.json')
            .subscribe((data: AccountabilityList[]) => {
                this.accountabilityListSet = data;
            });
        this.http
            .get<LegendGroup[]>('assets/accountabilitySystemLegendData.json')
            .subscribe((data) => {
                this.legendGroups = data;
            });

        this.http
            .get<Bank[]>('assets/accountabilitySystemData.json')
            .subscribe((data) => {
                this.bank = data;

                if (this.bank[0]?.bankManager) {
                    const legend = this.bank[0]?.bankManager.legend;
                    this.managerLegends =
                        typeof legend === 'string' ? legend.split(',') : [];
                } else {
                    console.error('Bank Manager is undefined.');
                }

                if (this.bank[0]?.departments) {
                    this.departments = this.bank[0]?.departments;
                }
            });
    }

    removeNumbers(legend: string): string {
        return legend.replace(/\d+/g, '').trim();
    }

    downloadPPT(filePath: string) {
        console.log(filePath);
    }

    print(filePrint: string) {
        console.log(filePrint);
    }

    accountabilityList: any[] = [];
    yearOptions = [2024, 2023, 2022];
    roundOptions = ['1회차', '2회차', '3회차', '4회차'];

    newItem: any = null;

    registerListData() {
        this.newItem = {
            year: null,
            round: null,
            changeReason: '',
            regDate: this.getToday(),
            registrant: '박OO',
            filePPT: '',
        };
        this.cdr.detectChanges();
    }
    getToday(): string {
        const today = new Date();
        return today.toISOString().slice(0, 10);
    }

    saveListData(item: any) {
        this.accountabilityList.push(item);
        this.newItem = null;
    }

    cancelListData() {
        this.newItem = null;
    }

    @ViewChildren('fileInput') fileInputs!: QueryList<
        ElementRef<HTMLInputElement>
    >;

    selectedFiles: string[][] = [];

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
}
