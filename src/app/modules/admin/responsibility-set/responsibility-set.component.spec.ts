import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitySetComponent } from './responsibility-set.component';

describe('ResponsibilitySetComponent', () => {
  let component: ResponsibilitySetComponent;
  let fixture: ComponentFixture<ResponsibilitySetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibilitySetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilitySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
