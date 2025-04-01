import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityMapComponent } from './responsibility-map.component';

describe('ResponsibilityMapComponent', () => {
  let component: ResponsibilityMapComponent;
  let fixture: ComponentFixture<ResponsibilityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibilityMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
