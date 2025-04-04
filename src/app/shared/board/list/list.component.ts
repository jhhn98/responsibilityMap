import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-list',
    imports: [
        DataSearchComponent,
        MatPaginator,
        CommonModule,
        RouterLink,
        MatIcon
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
    bbsId: string = '';
    bbsData: any[] = [];
    totalItems: number = 0;
    bbs: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.bbsId = params.get('bbsId') || 'bbs01'; // 기본값-공지사항
            this.loadBoardData();
        });
    }

    loadBoardData() {
        const jsonFile = `assets/${this.bbsId}_data.json`;

        this.http.get(jsonFile).subscribe({
            next: (data: any) => {
                this.bbsData = data.map(item => ({
                    ...item,
                    date: this.convertDate(item.date)
                }));
                this.totalItems = this.bbsData.length;
            },
            error: (err) => {
                console.error(`${this.bbsId}.json 로드 실패`, err);
                this.bbsData = [];
            },
        });
    }

    convertDate(dateString: string): string {
        if (/^\d{8}$/.test(dateString)) {
            const year = dateString.substring(0, 4);
            const month = dateString.substring(4, 6);
            const day = dateString.substring(6, 8);
            const date = new Date(`${year}-${month}-${day}`);
            return date.toISOString().split('T')[0];
        }
        return dateString;
    }

    sortKey: string = '';
    sortOrder: 'asc' | 'desc' = 'asc';

    sortList( sortKey: string, event: Event ) {
        const target = event.target as HTMLElement;

        if ( this.sortKey === sortKey ) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortKey = sortKey;
            this.sortOrder = 'asc';
        }

        this.bbsData.sort((a, b) => {
            let valueA = a[sortKey];
            let valueB = b[sortKey];

            if ( !isNaN(Number(valueA)) && !isNaN(Number(valueB)) ) {
                valueA = Number(valueA);
                valueB = Number(valueB);
            }

            if ( valueA < valueB ) return this.sortOrder === 'asc' ? -1 : 1;
            if ( valueA > valueB ) return this.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        document.querySelectorAll('[data-sort-button]').forEach(btn => btn.classList.remove('active'));
        target.closest('button')?.classList.add('active');
    }

    getSortIcon(sortKey: string): string {
        if (this.sortKey === sortKey) {
            return this.sortOrder === 'asc' ? 'heroicons_solid:bars-arrow-up' : 'heroicons_solid:bars-arrow-down';
        }
        return 'heroicons_solid:bars-arrow-down';
    }

    toggleActive(event: Event) {
        const target = event.currentTarget as HTMLElement;

        if (target.classList.contains('active')) {
            target.classList.remove('active');

            const tdElement = target.closest('.field-attachment');
            if (tdElement) {
                tdElement.classList.remove('zIndex');
            }
        } else {
            const buttons = document.querySelectorAll('[data-file-button]');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            target.classList.add('active');

            const fieldTds = document.querySelectorAll('.field-attachment');
            fieldTds.forEach(td => {
                td.classList.remove('zIndex');
            });

            const tdElement = target.closest('.field-attachment');
            if (tdElement) {
                tdElement.classList.add('zIndex');
            }
        }
    }
}
