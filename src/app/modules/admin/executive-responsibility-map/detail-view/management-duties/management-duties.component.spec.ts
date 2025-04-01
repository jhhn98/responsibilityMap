import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDutiesComponent } from './management-duties.component';

describe('ManagementDutiesComponent', () => {
  let component: ManagementDutiesComponent;
  let fixture: ComponentFixture<ManagementDutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementDutiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
