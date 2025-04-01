import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatButton } from '@angular/material/button';
import { DataSearchComponent } from '../../../core/data-search/data-search.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-ipm-check-executive',
    imports: [
        MatPaginator,
        MatFormField,
        MatIcon,
        MatInput,
        MatRadioButton,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatLabel,
        MatButton,
        DataSearchComponent,
        NgIf,
    ],
    templateUrl: './ipm-check-executive.component.html',
    styleUrl: './ipm-check-executive.component.scss',
})
export class IpmCheckExecutiveComponent {
    default: boolean = true;
}
