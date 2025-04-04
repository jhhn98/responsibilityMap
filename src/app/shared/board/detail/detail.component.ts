import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';

@Component({
    selector: 'app-detail',
    imports: [CommonModule, RouterLink, MatIcon, MatAnchor],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
    bbsId: string = '';
    bbsDetailData: any = {};
    bbsData: any[] = [];
    prevPost: any = null;
    nextPost: any = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.bbsId = params.get('bbsId') || '';
            const bbsDetailId = params.get('bbsDetailId') || '';
            this.loadDetailData(this.bbsId, bbsDetailId);
        });
    }

    loadDetailData(bbsId: string, bbsDetailId: string | null) {
        const dataUrl = `assets/${bbsId}_data.json`;

        this.http.get(dataUrl).subscribe({
            next: (data: any) => {
                this.bbsData = data.map((item) => ({
                    ...item,
                    date: this.convertDate(item.date),
                }));
                if (bbsDetailId) {
                    const currentIndex = this.bbsData.findIndex(
                        (bbs) => bbs.bbsDetailId === bbsDetailId
                    );

                    if (currentIndex !== -1) {
                        this.bbsDetailData = this.bbsData[currentIndex];
                        this.prevPost =
                            currentIndex > 0
                                ? this.bbsData[currentIndex - 1]
                                : null;
                        this.nextPost =
                            currentIndex < this.bbsData.length - 1
                                ? this.bbsData[currentIndex + 1]
                                : null;
                    }
                }
                document.querySelector('.bbs-content').innerHTML =
                    this.bbsDetailData.content.replace(/\n/g, '<br>');
            },
            error: (err) => {
                console.error(`데이터 로드 실패`, err);
                this.bbsDetailData = [];
                alert('게시물 데이터를 불러오는 데 실패했습니다.');
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
}
