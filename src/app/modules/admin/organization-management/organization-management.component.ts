import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from 'app/core/tree/tree.component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-organization-management',
    imports: [
        CommonModule,
        TreeComponent
    ],
    templateUrl: './organization-management.component.html',
    styleUrl: './organization-management.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationManagementComponent implements OnInit {
    treeData1: any[] = [];

    constructor( public http:HttpClient ) {}

    ngOnInit(): void {
        this.http.get<any[]>('/assets/treeData1.json').subscribe(data => {
            setTimeout(() => {
                this.treeData1 = data;
            });
        });
    }
}
