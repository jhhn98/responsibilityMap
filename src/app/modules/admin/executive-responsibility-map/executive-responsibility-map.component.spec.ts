import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveResponsibilityMapComponent } from './executive-responsibility-map.component';

describe('ExecutiveResponsibilityMapComponent', () => {
  let component: ExecutiveResponsibilityMapComponent;
  let fixture: ComponentFixture<ExecutiveResponsibilityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveResponsibilityMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveResponsibilityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
