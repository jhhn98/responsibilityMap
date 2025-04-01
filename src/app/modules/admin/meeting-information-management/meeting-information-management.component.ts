import { Component } from '@angular/core';
import { BaseButtonComponent } from 'app/core/buttons/base-button/base-button.component';

@Component({
    selector: 'app-meeting-information-management',
    imports: [
        BaseButtonComponent
    ],
    templateUrl: './meeting-information-management.component.html',
    styleUrl: './meeting-information-management.component.scss',
})
export class MeetingInformationManagementComponent {}
