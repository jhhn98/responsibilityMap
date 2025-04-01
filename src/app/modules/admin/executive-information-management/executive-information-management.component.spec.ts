import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInformationManagementComponent } from './executive-information-management.component';

describe('ExecutiveInformationManagementComponent', () => {
  let component: ExecutiveInformationManagementComponent;
  let fixture: ComponentFixture<ExecutiveInformationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInformationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInformationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
