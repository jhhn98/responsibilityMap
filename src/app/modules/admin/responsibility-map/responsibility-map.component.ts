import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-responsibility-map',
    imports: [
        FormsModule,
        MatIcon,
        ReactiveFormsModule,
        RouterLink,
        DataSearchComponent,
        NgIf,
        BaseButtonComponent,
    ],
    templateUrl: './responsibility-map.component.html',
    styleUrl: './responsibility-map.component.scss',
})
export class ResponsibilityMapComponent {
    default: boolean = true;

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
            buttons.forEach((button) => {
                button.classList.remove('active');
            });

            target.classList.add('active');

            const fieldTds = document.querySelectorAll('.field-attachment');
            fieldTds.forEach((td) => {
                td.classList.remove('zIndex');
            });

            const tdElement = target.closest('.field-attachment');
            if (tdElement) {
                tdElement.classList.add('zIndex');
            }
        }
    }
}
