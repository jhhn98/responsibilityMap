import { Component } from '@angular/core';
import { BaseButtonComponent } from '../../../../core/buttons/base-button/base-button.component';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-detail-view',
    imports: [
        BaseButtonComponent,
        FormsModule
    ],
    templateUrl: './detail-view.component.html',
    styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent {}
