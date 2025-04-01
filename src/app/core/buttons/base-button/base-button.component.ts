import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-base-button',
    imports: [
        MatButton,
        MatIcon,
        NgSwitch,
        NgSwitchCase,
        MatAnchor,
        NgClass,
        NgIf,
        RouterLink
    ],
    templateUrl: './base-button.component.html',
    styleUrl: './base-button.component.scss',
})
export class BaseButtonComponent {
    @Input() baseClass: 'custom-option-button' | 'custom-option-textButton' =
        'custom-option-button';
    @Input() label: string = '버튼';
    @Input() icon: string = '';
    @Input() styleClass: string = '';
    @Input() size: 'small' | '' = '';
    @Input() tag: 'button' | 'a' = 'button';
    @Input() type: 'button' | 'submit' = 'button';
    @Input() disabled: boolean = false;
    @Input() href: string = '#';
    @Input() routerLink?: any[] | string = '';

    @Output() action = new EventEmitter<void>();

    onClick(event: Event) {
        if (this.tag === 'a' && !this.href) {
            event.preventDefault();
        }
        if (!this.disabled) {
            this.action.emit();
        }
    }
}
