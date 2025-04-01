import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-template',
    imports: [MatButton, MatIcon, MatAnchor],
    templateUrl: './template.component.html',
    styleUrl: './template.component.scss',
})
export class TemplateComponent {}
