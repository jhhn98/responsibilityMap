import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitySystemComponent } from './responsibility-system.component';

describe('ResponsibilitySystemComponent', () => {
  let component: ResponsibilitySystemComponent;
  let fixture: ComponentFixture<ResponsibilitySystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibilitySystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilitySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
