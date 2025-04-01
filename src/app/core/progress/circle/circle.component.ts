import { Component, Input, ElementRef, AfterViewInit, ViewChild, HostListener, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-circle',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent implements AfterViewInit {
    @Input() progress: number = 0;
    @Input() circleSize: string | number = 96;
    @Input() inactiveColor: string = 'f1f3f5';
    @Input() activeColor: string = 'e32a2e';
    @Input() title: string = '';
    @ViewChild('circle') circle!: ElementRef<HTMLDivElement>;

    constructor(private ngZone: NgZone, private cdRef: ChangeDetectorRef) {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateCircleSize();
            this.cdRef.detectChanges();
            this.animateProgress(0, this.progress);
        }, 0);
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.ngZone.run(() => {
            this.updateCircleSize();
            this.cdRef.detectChanges();
        });
    }

    animateProgress(start: number, end: number) {
        const duration = 1000;
        const startTime = performance.now();

        this.ngZone.runOutsideAngular(() => {
            const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progressPercentage = Math.min(elapsed / duration, 1);

                const degrees = (start + (end - start) * progressPercentage) / 100 * 360;

                this.updateCircleBackground(degrees);

                if (progressPercentage < 1) {
                    requestAnimationFrame(update);
                } else {
                    this.ngZone.run(() => {
                        this.cdRef.detectChanges();
                    });
                }
            };

            requestAnimationFrame(update);
        });
    }

    updateCircleBackground(degrees: number) {
        if (this.circle) {
            (this.circle.nativeElement as HTMLDivElement).style.background = `conic-gradient(#${this.activeColor} ${degrees}deg, #${this.inactiveColor} 0deg)`;
        }
    }

    get innerCircleSize(): number {
        let size: number;

        if (typeof this.circleSize === 'string' && this.circleSize.includes('%')) {
            const parentSize = this.circle?.nativeElement?.parentElement?.offsetWidth || 0;
            size = (parseFloat(this.circleSize) / 100) * parentSize - 50;
        } else {
            size = (typeof this.circleSize === 'number' ? this.circleSize : 96) - 30;
        }

        return size;
    }

    get circleSizeInPx(): number {
        let size: number;

        if (this.circle) {
            if (typeof this.circleSize === 'string' && this.circleSize.includes('%')) {
                const parentSize = this.circle.nativeElement.parentElement?.offsetWidth || 0;
                size = (parseFloat(this.circleSize) / 100) * parentSize;
            } else {
                size = typeof this.circleSize === 'number' ? this.circleSize : 96;
            }
        } else {
            size = 96;
        }

        return size;
    }

    updateCircleSize() {
        if (this.circle) {
            const parentSize = this.circle.nativeElement.parentElement?.offsetWidth || 0;

            if (typeof this.circleSize === 'number' || (typeof this.circleSize === 'string' && !this.circleSize.includes('%'))) {
                const currentSize = this.circleSizeInPx;

                if (currentSize > parentSize) {
                    const percentage = (parentSize / currentSize) * 100;
                    this.circleSize = `${percentage}%`;
                }
            }

            const sizeInPx = this.circleSizeInPx;
            (this.circle.nativeElement as HTMLDivElement).style.width = `${sizeInPx}px`;
            (this.circle.nativeElement as HTMLDivElement).style.height = `${sizeInPx}px`;

            const innerCircle = this.circle.nativeElement.querySelector('.inner-circle');
            if (innerCircle) {
                const innerCircleSize = this.innerCircleSize;

                (innerCircle as HTMLElement).style.width = `${innerCircleSize}px`;
                (innerCircle as HTMLElement).style.height = `${innerCircleSize}px`;
            }
        }
    }
}
