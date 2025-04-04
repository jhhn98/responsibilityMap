import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TreeComponent } from 'app/core/tree/tree.component';
import { HttpClient } from '@angular/common/http';

interface Department {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-detail-modal',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatButton,
        MatIcon,
        TreeComponent
    ],
    templateUrl: './detail-modal.component.html',
    styleUrl: './detail-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailModalComponent  implements OnInit {

    treeData1: any[] = [];
    treeData2: any[] = [];

    constructor( @Inject(MAT_DIALOG_DATA) public data: { dialogName: string }, public http:HttpClient ) {}

    departments: Department[] = [
        { value: '', viewValue: '부서 선택' },
        { value: '0', viewValue: '운영리스크 관리부' },
        { value: '1', viewValue: '소비자금융리스크 관리부' },
        { value: '2', viewValue: '... 관리부' },
    ];
    selected = '';

    ngOnInit(): void {
        this.http.get<any[]>('assets/treeData1.json').subscribe(data => {
            setTimeout( ()=> {
                this.treeData1 = data;
            });
        });

        this.http.get<any[]>('assets/treeData2.json').subscribe(data => {
            setTimeout( ()=> {
                this.treeData2 = data;
            });
        });
    }
}
