import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmCheckExecutiveComponent } from './ipm-check-executive.component';

describe('IpmCheckExecutiveComponent', () => {
  let component: IpmCheckExecutiveComponent;
  let fixture: ComponentFixture<IpmCheckExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpmCheckExecutiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpmCheckExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
