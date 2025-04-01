import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DataSearchComponent } from 'app/core/data-search/data-search.component';

@Component({
    selector: 'app-status-implementation',
    imports: [
        NgIf,
        DataSearchComponent
    ],
    templateUrl: './status-implementation.component.html',
    styleUrl: './status-implementation.component.scss',
})
export class StatusImplementationComponent {
    performCheck: boolean = true;
}
