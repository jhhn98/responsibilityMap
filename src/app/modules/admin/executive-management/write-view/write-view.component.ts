import { Component, ChangeDetectorRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgForOf, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-write-view',
    imports: [
        BaseButtonComponent,
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect,
        ReactiveFormsModule,
        MatInput,
        MatRadioGroup,
        MatRadioButton,
        MatIcon,
        NgForOf,
        NgIf,
        FormsModule
    ],
    templateUrl: './write-view.component.html',
    styleUrl: './write-view.component.scss',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-5px)' }),
                animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-5px)' }))
            ])
        ])
    ]
})
export class WriteViewComponent {
    @ViewChildren('fileInput') fileInputs!: QueryList<
        ElementRef<HTMLInputElement>
    >;

    checkResult: string = '1';

    closeOptionField(): void {
        this.checkResult = '1';
    }

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
