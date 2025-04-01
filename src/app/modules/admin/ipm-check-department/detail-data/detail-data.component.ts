import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { NgForOf, NgIf } from '@angular/common';
@Component({
    selector: 'app-detail-data',
    imports: [
        MatButton,
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        MatRadioButton,
        NgForOf,
        NgIf,
    ],
    templateUrl: './detail-data.component.html',
    styleUrl: './detail-data.component.scss',
})
export class DetailDataComponent {
    constructor(private route: ActivatedRoute) {}
}
