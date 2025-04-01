import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';

@Component({
    selector: 'app-data-search',
    imports: [
        FormsModule,
        NgIf,
        MatButton,
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatSuffix,
    ],
    templateUrl: './data-search.component.html',
    styleUrl: './data-search.component.scss',
})
export class DataSearchComponent {
    @Input() type!: 'default' | 'performCheck' | 'bbs';
}
