import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-position-information',
    imports: [
        MatLabel,
        MatFormField,
        MatDatepickerToggle,
        MatDatepickerInput,
        MatInput,
        MatDatepicker,
    ],
    templateUrl: './position-information.component.html',
    styleUrl: './position-information.component.scss',
})
export class PositionInformationComponent implements AfterViewInit {
    @ViewChild('content', { static: false }) content!: ElementRef;

    ngAfterViewInit() {
        setTimeout(() => {
            this.getContent(); // DOM이 렌더링된 후에 호출
        }, 100);
    }

    getContent() {
        const content = this.content?.nativeElement?.innerHTML || '내용 없음';
        console.log('Tab Content:', content); // 콘솔 로그 추가
        return content;
    }
}
