import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityMapDetailComponent } from './responsibility-map-detail.component';

describe('ResponsibilityMapDetailComponent', () => {
  let component: ResponsibilityMapDetailComponent;
  let fixture: ComponentFixture<ResponsibilityMapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibilityMapDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityMapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
