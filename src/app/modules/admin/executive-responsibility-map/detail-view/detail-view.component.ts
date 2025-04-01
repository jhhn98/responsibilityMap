import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { OverviewResponsibilitiesComponent } from 'app/modules/admin/executive-responsibility-map/detail-view/overview-responsibilities/overview-responsibilities.component';
import { ManagementDutiesComponent } from 'app/modules/admin/executive-responsibility-map/detail-view/management-duties/management-duties.component';
import { PositionInformationComponent } from 'app/modules/admin/executive-responsibility-map/detail-view/position-information/position-information.component';
import { ResponsibilitiesComponent } from 'app/modules/admin/executive-responsibility-map/detail-view/responsibilities/responsibilities.component';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-detail-view',
    imports: [
        RouterLinkActive,
        RouterOutlet,
        RouterLink,
        BaseButtonComponent
    ],
    templateUrl: './detail-view.component.html',
    styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent {
    @ViewChildren(OverviewResponsibilitiesComponent)
    tab1Components!: QueryList<OverviewResponsibilitiesComponent>;
    @ViewChildren(ManagementDutiesComponent)
    tab2Components!: QueryList<ManagementDutiesComponent>;
    @ViewChildren(PositionInformationComponent)
    tab3Components!: QueryList<PositionInformationComponent>;
    @ViewChildren(ResponsibilitiesComponent)
    tab4Components!: QueryList<ResponsibilitiesComponent>;

    @ViewChild('printArea') printArea!: ElementRef;

    allTabs: any[] = [];

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        // Angular 뷰 업데이트 강제
        this.cdr.detectChanges();

        // setTimeout을 사용하여 탭 콘텐츠 로딩 후 처리
        setTimeout(() => {
            this.allTabs = [
                ...this.tab1Components.toArray(),
                ...this.tab2Components.toArray(),
                ...this.tab3Components.toArray(),
                ...this.tab4Components.toArray(),
            ];

            console.log('모든 탭 로드 완료:', this.allTabs.length);

            // 탭들이 정상적으로 로드된 후에 프린트 버튼 활성화
            if (this.allTabs.length > 0) {
                console.log('프린트 준비 완료');
            }
        }, 300); // 300ms 후에 탭이 로드되었을 가능성 있음 (이 값을 더 길게 설정할 수 있음)
    }

    printAllTabs() {
        if (!this.allTabs || this.allTabs.length === 0) {
            console.error('탭 콘텐츠가 아직 로드되지 않았습니다.');
            return;
        }

        // 탭 콘텐츠 모으기
        const printContent = this.allTabs
            .map((tab) => tab.getContent?.()) // `getContent()`가 존재할 때만 실행
            .filter((content) => content) // null 또는 undefined 제외
            .join('<hr/>');

        if (!printContent) {
            console.error('출력할 콘텐츠가 없습니다.');
            return;
        }

        // #printArea에 콘텐츠 추가
        console.log('콘텐츠를 #printArea에 추가:', printContent); // 콘텐츠가 잘 추가되는지 확인
        this.printArea.nativeElement.innerHTML = printContent;

        // 프린트 창 열기
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(
                '<html><head><title>프린트</title></head><body>'
            );
            printWindow.document.write(this.printArea.nativeElement.innerHTML); // #printArea의 콘텐츠
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
        }
    }
}
