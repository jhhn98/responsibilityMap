import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-overview-responsibilities',
  imports: [],
  templateUrl: './overview-responsibilities.component.html',
  styleUrl: './overview-responsibilities.component.scss'
})
export class OverviewResponsibilitiesComponent implements AfterViewInit {
    @ViewChild('content', { static: false }) content!: ElementRef;

    ngAfterViewInit() {
        setTimeout(() => {
            this.getContent();  // DOM이 렌더링된 후에 호출
        }, 100);
    }

    getContent() {
        const content = this.content?.nativeElement?.innerHTML || '내용 없음';
        console.log('Tab Content:', content);  // 콘솔 로그 추가
        return content;
    }
}
