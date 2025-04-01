import { Component, ElementRef, Renderer2, AfterViewInit, AfterViewChecked, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-tree',
    standalone: true,
    imports: [ CommonModule ],
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements AfterViewInit {
    @Input() nodeData: any;
    @Input() depth: number = 1;

    private isListenerAdded = false;

    constructor( private el: ElementRef, private renderer: Renderer2 ) {}

    /*ngAfterViewChecked() {
        //console.log('실행??');
        //console.log(this.el.nativeElement);
        setTimeout(() => {
            const buttons = this.el.nativeElement.querySelectorAll('[data-toggle-node="button"]');
            //console.log(buttons);
            buttons.forEach((button: HTMLElement) => {
                //console.log('진짜실행??');
                this.renderer.listen(button, 'click', () => {
                    //console.log('click', button);
                    const parentLi = button.closest('li');

                    this.toggleActiveClass(button, parentLi);

                    if (parentLi) {
                        this.removeShowClassFromChildren(parentLi);
                        this.toggleShowClass(parentLi);
                        this.updateAfterHeight(parentLi);
                        this.updateParentAfterHeight(parentLi);
                    }
                });
            });
        }, 0);
    }*/
    ngAfterViewInit() {
        const treeContainer = this.el.nativeElement.querySelector('.treeComponent');
        if ( !treeContainer || this.isListenerAdded ) return;

        this.isListenerAdded = true;

        this.renderer.listen(treeContainer, 'click', (event: Event) => {
            const target = event.target as HTMLElement;
            const button = target.closest('[data-toggle-node="button"]') as HTMLElement | null;

            if ( !button ) return;

            const parentLi = button.closest('li');
            this.toggleActiveClass(button, parentLi);
            if ( parentLi ) {
                this.removeShowClassFromChildren(parentLi);
                this.toggleShowClass(parentLi);
                this.updateAfterHeight(parentLi);
                this.updateParentAfterHeight(parentLi);
            }
        });
    }

    private toggleActiveClass(button: HTMLElement, parentLi: HTMLElement | null): void {
        const siblingsUl = parentLi?.querySelector('[data-tree-order]');
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            const inActiveButtons = siblingsUl?.querySelectorAll('.active');
            inActiveButtons?.forEach((button: Element) => {
                const buttonElement = button as HTMLElement;
                buttonElement.classList.remove('active');
            })
        } else {
            button.classList.add('active');
        }
    }

    private toggleShowClass(parentLi: HTMLElement): void {
        if (parentLi.classList.contains('show')) {
            parentLi.classList.remove('show');
        } else {
            parentLi.classList.add('show');
        }
    }

    private removeShowClassFromChildren(parentLi: HTMLElement): void {
        const childNodes = parentLi.querySelectorAll('li');
        childNodes.forEach((child: HTMLElement) => {
            child.classList.remove('show');
        });
    }

    private updateAfterHeight(parentLi: HTMLElement) {
        setTimeout(() => {
            const childUl = parentLi.querySelector('ul[data-tree-order]');
            if (!childUl) return;

            const childLis = Array.from(childUl.children) as HTMLElement[];
            if (childLis.length === 0) return;

            const totalHeight = childLis.slice(0, -1).reduce((sum, li) => sum + li.offsetHeight, 0);
            const newHeight = totalHeight + 20;

            parentLi.style.setProperty('--after-height', `${newHeight}px`);
        }, 0);
    }
    private updateParentAfterHeight(parentLi: HTMLElement) {
        let currentLi: HTMLElement | null = parentLi;

        while (currentLi) {
            this.updateAfterHeight(currentLi);
            currentLi = currentLi.parentElement?.closest('li') as HTMLElement | null;
        }
    }
}
